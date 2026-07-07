import { Incident, Resolucao68Sugestao } from '../types';

/**
 * ════════════════════════════════════════════════════════════════════════
 * Resolução SEDUC nº 68, de 19/06/2026 — Triagem automática por histórico
 * ════════════════════════════════════════════════════════════════════════
 *
 * Ao receber um novo registro do professor, este serviço:
 *   1) Localiza o histórico de ocorrências já existentes do mesmo aluno;
 *   2) Aplica a lógica de gradação pedagógica prevista na Resolução
 *      (medida pedagógica antes de medida restritiva; agravamento apenas
 *      diante de reiteração/esgotamento de estratégias anteriores);
 *   3) Devolve uma SUGESTÃO de enquadramento (nível, reiteração e alertas).
 *
 * IMPORTANTE — o que este serviço NÃO faz:
 *   - Não decide nem aplica sozinho Afastamento Preventivo (Art. 11/12) ou
 *     Transferência Cautelar (Art. 13 a 22). Essas medidas exigem hipótese
 *     legal fundamentada (risco a terceiros/ao próprio estudante), Relatório
 *     Circunstanciado, deliberação do Conselho de Escola e contraditório —
 *     etapas que dependem de avaliação humana e não podem ser inferidas
 *     apenas pela contagem de registros.
 *   - Para esses casos o serviço apenas gera um ALERTA para a gestão avaliar
 *     manualmente a abertura do procedimento correspondente (já disponível
 *     na tela de Gestão), mantendo o enquadramento sugerido no nível
 *     pedagógico até que a gestão decida o contrário.
 *
 * Critérios adotados (documentados para auditoria/ajuste futuro):
 *   - 0 ocorrência anterior            → Ocorrência Pedagógica (Nível I)
 *   - 1–2 ocorrências anteriores       → Encaminhamento Pedagógico (Art. 7º, IX)
 *   - ≥ 3 ocorrências OU ≥ 2 encaminhamentos pedagógicos anteriores
 *                                       → Encaminhamento Pedagógico REITERADO
 *                                         (Art. 7º, § 5º) + alerta para a
 *                                         gestão avaliar Afastamento Preventivo
 *                                         (Art. 11, § 1º, III — recorrência grave)
 *   - Já houve Afastamento Preventivo anterior e nova ocorrência depois dele
 *                                       → alerta reforçado para a gestão avaliar
 *                                         Transferência Cautelar (Art. 13 a 22)
 *   - Já houve Transferência Cautelar anterior
 *                                       → alerta para verificar acompanhamento
 *                                         pela URE / rede protetiva (Art. 19-22)
 */

interface IdentificadorAluno {
  nome: string;
  ra?: string;
  turma?: string;
}

const normalizar = (s?: string) => (s || '').trim().toUpperCase();

/** Verifica se um incidente pertence ao mesmo aluno (prioriza RA; usa nome+turma como fallback). */
const mesmoAluno = (inc: Incident, aluno: IdentificadorAluno): boolean => {
  const raAluno = normalizar(aluno.ra);
  const raInc = normalizar(inc.ra);
  if (raAluno && raAluno !== '---' && raInc && raInc !== '---') {
    return raAluno === raInc;
  }
  const mesmoNome = normalizar(inc.studentName) === normalizar(aluno.nome);
  if (!aluno.turma) return mesmoNome;
  return mesmoNome && normalizar(inc.classRoom) === normalizar(aluno.turma);
};

/**
 * Analisa o histórico de ocorrências do aluno e devolve a sugestão de
 * enquadramento na Resolução SEDUC nº 68/2026.
 *
 * @param todasOcorrencias  Histórico completo já carregado no app (professor + gestão).
 * @param aluno             Identificação do aluno do novo registro (nome, RA, turma).
 */
export function analisarHistoricoResolucao68(
  todasOcorrencias: Incident[],
  aluno: IdentificadorAluno
): Resolucao68Sugestao {
  const historico = (todasOcorrencias || []).filter(inc => mesmoAluno(inc, aluno));

  const qtdOcorrenciasAnteriores = historico.length;
  const qtdEncaminhamentosPedagogicosAnteriores = historico.filter(
    inc => !!inc.measureData?.encaminhamentoPedagogico
  ).length;
  const qtdAfastamentosPreventivosAnteriores = historico.filter(
    inc => !!inc.measureData?.afastamentoPreventivo
  ).length;
  const jaTeveTransferenciaCautelar = historico.some(inc => !!inc.measureData?.transferenciaCautelar);

  // Data do afastamento preventivo mais recente (para saber se a ocorrência atual é "depois dele")
  const dataUltimoAfastamento = historico
    .filter(inc => !!inc.measureData?.afastamentoPreventivo)
    .map(inc => inc.measureData!.afastamentoPreventivo!.dataInicio)
    .sort()
    .pop();

  let nivelSugerido: Resolucao68Sugestao['nivelSugerido'] = 'OCORRÊNCIA PEDAGÓGICA';
  let reiterado = false;
  let justificativa = '';
  let alertaGestao: string | undefined;

  if (jaTeveTransferenciaCautelar) {
    // Já houve a medida mais grave prevista na Resolução; mantém o histórico
    // como referência e pede verificação do acompanhamento em curso.
    nivelSugerido = 'ENCAMINHAMENTO PEDAGÓGICO (ESTUDO DIRIGIDO)';
    reiterado = true;
    justificativa = `O aluno já possui ${qtdOcorrenciasAnteriores} ocorrência(s) anterior(es), incluindo Transferência Cautelar (Art. 13 a 22) já registrada. Este novo registro é enquadrado como Encaminhamento Pedagógico até revisão da gestão.`;
    alertaGestao = 'ATENÇÃO: aluno com Transferência Cautelar registrada anteriormente. Verifique junto à URE/rede protetiva a situação de matrícula e o acompanhamento em curso antes de prosseguir (Art. 19 a 22).';
  } else if (qtdAfastamentosPreventivosAnteriores > 0 && dataUltimoAfastamento) {
    // Nova ocorrência após já ter havido Afastamento Preventivo → possível
    // esgotamento das estratégias pedagógicas; sinaliza para avaliação de
    // Transferência Cautelar, sem decidir por conta própria.
    nivelSugerido = 'ENCAMINHAMENTO PEDAGÓGICO (ESTUDO DIRIGIDO)';
    reiterado = true;
    justificativa = `O aluno possui ${qtdOcorrenciasAnteriores} ocorrência(s) anterior(es) e já foi submetido a Afastamento Preventivo Temporário (Art. 11/12) em ${dataUltimoAfastamento.split('-').reverse().join('/')}. Nova ocorrência após essa medida indica possível esgotamento das estratégias pedagógicas.`;
    alertaGestao = 'RECOMENDAÇÃO: avalie a abertura do procedimento de Transferência Cautelar (Art. 13 a 22), elaborando o Relatório Circunstanciado (Art. 15), dada a recorrência após Afastamento Preventivo já aplicado. A decisão exige deliberação do Conselho de Escola.';
  } else if (qtdOcorrenciasAnteriores >= 3 || qtdEncaminhamentosPedagogicosAnteriores >= 2) {
    nivelSugerido = 'ENCAMINHAMENTO PEDAGÓGICO (ESTUDO DIRIGIDO)';
    reiterado = true;
    justificativa = `O aluno possui ${qtdOcorrenciasAnteriores} ocorrência(s) anterior(es), sendo ${qtdEncaminhamentosPedagogicosAnteriores} com Encaminhamento Pedagógico. Enquadrado como adoção REITERADA (Art. 7º, § 5º), exigindo comunicação à família e plano individual de acompanhamento.`;
    alertaGestao = 'Avalie, conforme evolução do caso, se a recorrência já configura hipótese de Afastamento Preventivo (Art. 11, § 1º, III — recorrência grave/esgotamento de estratégias anteriores).';
  } else if (qtdOcorrenciasAnteriores >= 1) {
    nivelSugerido = 'ENCAMINHAMENTO PEDAGÓGICO (ESTUDO DIRIGIDO)';
    reiterado = false;
    justificativa = `O aluno possui ${qtdOcorrenciasAnteriores} ocorrência(s) anterior(es) registrada(s). Enquadrado como Encaminhamento Pedagógico — Estudo Dirigido (Art. 7º, IX e Art. 8º).`;
  } else {
    nivelSugerido = 'OCORRÊNCIA PEDAGÓGICA';
    reiterado = false;
    justificativa = 'Primeira ocorrência registrada para este aluno. Enquadrado como Ocorrência Pedagógica (Nível I), sem histórico de reincidência.';
  }

  return {
    nivelSugerido,
    reiterado,
    qtdOcorrenciasAnteriores,
    qtdEncaminhamentosPedagogicosAnteriores,
    qtdAfastamentosPreventivosAnteriores,
    jaTeveTransferenciaCautelar,
    justificativa,
    alertaGestao,
    geradoEm: new Date().toISOString(),
  };
}

/** Severidade sugerida para o registro, coerente com o nível de enquadramento. */
export function severidadeSugerida(sugestao: Resolucao68Sugestao): Incident['severity'] {
  if (sugestao.alertaGestao) return 'Crítica';
  if (sugestao.reiterado) return 'Alta';
  if (sugestao.nivelSugerido === 'OCORRÊNCIA PEDAGÓGICA') return 'Baixa';
  return 'Média';
}
