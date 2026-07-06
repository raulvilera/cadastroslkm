export interface Student {
  id?: string;
  nome: string;
  ra: string;
  turma: string;
}

export interface ClassRoom {
  id: string;
  name: string;
}

// Encaminhamento feito pelo professor (múltipla seleção)
export interface ProfessorReferral {
  type: 'orientacao_individual' | 'encaminhamento_gestao' | 'busca_ativa' | 'incidente' | 'acidente';
  description?: string; // orientacao_individual, incidente e acidente usam descrição
}

export interface ManagementReferral {
  type: string;
  description: string;
}

// ════════════════════════════════════════════════════════════════════════
// Resolução SEDUC nº 68, de 19/06/2026 — Dados estruturados por medida
// (Tratamento pedagógico da indisciplina, afastamento preventivo
// temporário e transferência cautelar)
// ════════════════════════════════════════════════════════════════════════

// Art. 7º, IX e Art. 8º — Encaminhamento Pedagógico (Estudo Dirigido)
export interface EncaminhamentoPedagogicoData {
  atividades: (
    | 'leitura_orientada'              // Art. 8º, I
    | 'producao_escrita_reflexiva'     // Art. 8º, II
    | 'atividades_curriculares'        // Art. 8º, III
    | 'acompanhamento_profissional'    // Art. 8º, IV
  )[];
  espacoUtilizado?: string;
  profissionalResponsavel: string;
  duracaoDias?: number;
  reiterado?: boolean; // § 5º — se reiterado, deve ser comunicado à família e integrado ao plano de acompanhamento
}

// Art. 11 e 12 — Afastamento Preventivo Temporário
export interface AfastamentoPreventivoData {
  hipotese: 'I' | 'II' | 'III'; // Art. 11, § 1º, incisos I a III
  dataInicio: string;
  prazoDiasLetivos: number; // padrão: 5 (Art. 11, § 5º)
  dataPrevistaRetorno?: string;
  prorrogado: boolean;
  dataAprovacaoConselhoProrrogacao?: string; // Art. 11, § 7º
  justificativaProrrogacao?: string;
  comunicadoFamilia: boolean;
  comunicadoURE: boolean;
  comunicadoRedeProtetiva: boolean;
  planoContinuidadePedagogica?: string; // Art. 11, § 3º
  oportunidadeManifestacaoAssegurada: boolean; // Art. 12, § 3º
}

// Art. 13 a 22 — Transferência Cautelar
export interface TransferenciaCautelarData {
  // Art. 14 — etapas do procedimento
  etapaAtual: 1 | 2 | 3 | 4 | 5;

  // Art. 15 — Relatório Circunstanciado (itens I a XII)
  cronologiaFatos: string;                    // III
  analiseRisco: string;                       // IV
  registrosPlataformaConviva?: string;        // V
  medidasAdotadasAnteriormente: string;       // VI
  comunicacoesFamilia: string;                // VII
  registrosReunioesPactuacoes?: string;       // VIII
  encaminhamentosRedeProtetiva?: string;      // IX
  justificativaTecnicaTransferencia: string;  // X
  propostaContinuidadeAcompanhamento?: string;// XI
  matriculaPorDecisaoJudicial: boolean;       // XII
  numeroProcessoJudicial?: string;

  // Art. 16, § 3º — Ata de deliberação do Conselho de Escola
  dataReuniaoConselho?: string;
  membrosPresentesConselho?: string;
  decisaoConselho?: 'retorno_atividades' | 'manutencao_intensificacao_medidas' | 'articulacao_ure_rede_protetiva' | 'transferencia_deliberada';
  fundamentacaoDecisaoConselho?: string;

  // Art. 17 — Notificação e contraditório
  dataNotificacaoFamilia?: string;
  manifestacaoEstudanteFamilia?: string;
  acompanhadoAdvogado?: boolean;

  // Art. 18 — Decisão final e recurso
  prazoRecursoDias: number; // 5 dias (Art. 18, § 2º)

  // Art. 19 a 22 — Efetivação e acolhimento pela URE
  unidadeEscolarDestino?: string;
  dataEfetivacao?: string;
  transporteEscolarNecessario?: boolean;
}

export interface MeasureData {
  encaminhamentoPedagogico?: EncaminhamentoPedagogicoData;
  afastamentoPreventivo?: AfastamentoPreventivoData;
  transferenciaCautelar?: TransferenciaCautelarData;
}

export interface Incident {
  id: string;
  professorName?: string;
  classRoom?: string;
  studentName: string;
  ra?: string;
  date: string;
  time?: string;
  registerDate?: string;
  returnDate?: string;
  discipline?: string;
  irregularities?: string;
  description: string;
  severity: 'Baixa' | 'Média' | 'Alta' | 'Crítica';
  aiAnalysis?: string;
  status: 'Pendente' | 'Em Análise' | 'Resolvido' | 'Visualizada' | 'Em Andamento' | 'Resolvida';
  category?: string;
  source: 'professor' | 'gestao';
  pdfUrl?: string;
  authorEmail?: string;
  managementFeedback?: string;
  managementFeedbackAt?: string;      // quando a gestão salvou a devolutiva
  managementFeedbackReadAt?: string;  // quando o professor visualizou
  lastViewedAt?: string;
  isPendingSync?: boolean;
  escola?: string;

  // ── Encaminhamentos do Professor (múltiplos) ──────────────────────────
  professorReferrals?: ProfessorReferral[];

  // ── Legado (mantido para compatibilidade com registros antigos) ───────
  referralType?: 'orientacao_individual' | 'encaminhamento_gestao' | 'busca_ativa' | null;
  referralDescription?: string;

  // ── Encaminhamentos da Gestão ─────────────────────────────────────────
  managementReferrals?: ManagementReferral[];

  // ── Dados estruturados conforme Resolução SEDUC nº 68/2026 ────────────
  measureData?: MeasureData;
}

export type View = 'login' | 'dashboard';

export interface User {
  email: string;
  role: 'gestor' | 'professor';
}
