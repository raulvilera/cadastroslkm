import { jsPDF } from "jspdf";
import { Incident } from "../types";
import { supabase, isSupabaseConfigured } from "./supabaseClient";

// URLs das imagens hospedadas no Supabase Storage
// Estas imagens estão no bucket público 'incident-pdfs' na pasta 'assets'
const LOGO_SP_URL = "https://zvuxzrfbmmbhuhwaofrn.supabase.co/storage/v1/object/public/incident-pdfs/assets/brasao-sp.png";
const LOGO_LKM_URL = "https://zvuxzrfbmmbhuhwaofrn.supabase.co/storage/v1/object/public/incident-pdfs/assets/logo-lkm.png";

// ════════════════════════════════════════════════════════════════════════
// Documentos gerados em conformidade com a Resolução SEDUC nº 68, de 19 de
// junho de 2026 (DOE-SP de 22/06/2026), que dispõe sobre as diretrizes, os
// princípios e os procedimentos para o tratamento pedagógico das situações
// de indisciplina escolar e para a adoção excepcional de afastamento
// preventivo temporário e transferência cautelar de estudantes, em
// complemento ao DOC - Documento Orientador para a Convivência - Protocolo
// 179.
// ════════════════════════════════════════════════════════════════════════

const RESOLUCAO_REF = "Resolução SEDUC nº 68, de 19/06/2026";
const MARGIN = 20;

type ImgData = { data: string; width: number; height: number };

const getBase64Image = (url: string): Promise<ImgData> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        resolve({
          data: canvas.toDataURL('image/png'),
          width: img.width,
          height: img.height
        });
      } else {
        reject(new Error("Erro no contexto do canvas"));
      }
    };
    img.onerror = () => reject(new Error("Falha ao carregar imagem: " + url));
    img.src = url;
  });
};

// ── Contexto compartilhado de geração de documento ─────────────────────

interface DocContext {
  doc: jsPDF;
  pageWidth: number;
  pageHeight: number;
  contentWidth: number;
  brasaoData: ImgData | null;
  lkmData: ImgData | null;
  y: number;
}

const createBaseDoc = async (): Promise<DocContext> => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const contentWidth = pageWidth - MARGIN * 2;

  let brasaoData: ImgData | null = null;
  let lkmData: ImgData | null = null;
  try {
    [brasaoData, lkmData] = await Promise.all([
      getBase64Image(LOGO_SP_URL),
      getBase64Image(LOGO_LKM_URL)
    ]);
  } catch (err) {
    console.error("Erro ao carregar logos:", err);
  }

  return { doc, pageWidth, pageHeight, contentWidth, brasaoData, lkmData, y: 0 };
};

const drawPageFrame = (ctx: DocContext) => {
  const { doc, pageWidth, pageHeight } = ctx;
  doc.setDrawColor(0, 43, 92);
  doc.setLineWidth(0.5);
  doc.rect(7, 7, pageWidth - 14, pageHeight - 14);

  if (ctx.brasaoData) {
    const targetW = 22;
    const targetH = (ctx.brasaoData.height / ctx.brasaoData.width) * targetW;
    doc.addImage(ctx.brasaoData.data, 'PNG', 12, 12, targetW, targetH);
  }
  if (ctx.lkmData) {
    const targetW = 25;
    const targetH = (ctx.lkmData.height / ctx.lkmData.width) * targetW;
    doc.addImage(ctx.lkmData.data, 'PNG', pageWidth - targetW - 12, pageHeight - targetH - 12, targetW, targetH);
  }
};

const drawHeaderBlock = (ctx: DocContext): number => {
  const { doc, pageWidth } = ctx;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(0, 0, 0);
  const headerLines = [
    "GOVERNO DO ESTADO DE SÃO PAULO",
    "SECRETARIA DE ESTADO DA EDUCAÇÃO",
    "DIRETORIA DE ENSINO REGIÃO GUARULHOS NORTE – EE LYDIA KITZ MOREIRA",
    "RUA DOREZÓPOLIS, 294 - JARDIM SANTA CLARA – CEP: 07123-120",
    "GUARULHOS - SP    Telefone: 2403-3105 / 2404-3535"
  ];
  let y = 15;
  headerLines.forEach(line => {
    doc.text(line, pageWidth / 2, y, { align: 'center' });
    y += 4.2;
  });
  return y;
};

const newPage = (ctx: DocContext) => {
  ctx.doc.addPage();
  drawPageFrame(ctx);
  ctx.y = 15;
};

const ensureSpace = (ctx: DocContext, neededHeight: number) => {
  if (ctx.y + neededHeight > ctx.pageHeight - 22) {
    newPage(ctx);
  }
};

const writeDocTitle = (ctx: DocContext, title: string, subtitle?: string) => {
  ensureSpace(ctx, subtitle ? 20 : 14);
  ctx.doc.setFont("helvetica", "bold");
  ctx.doc.setFontSize(13.5);
  ctx.doc.setTextColor(0, 84, 166);
  const lines = ctx.doc.splitTextToSize(title, ctx.contentWidth);
  ctx.doc.text(lines, ctx.pageWidth / 2, ctx.y, { align: 'center' });
  ctx.y += lines.length * 6 + 1;
  if (subtitle) {
    ctx.doc.setFont("helvetica", "normal");
    ctx.doc.setFontSize(8.5);
    ctx.doc.setTextColor(90, 90, 90);
    const subLines = ctx.doc.splitTextToSize(subtitle, ctx.contentWidth);
    ctx.doc.text(subLines, ctx.pageWidth / 2, ctx.y, { align: 'center' });
    ctx.y += subLines.length * 4 + 2;
  }
  ctx.y += 8;
};

const writeSectionTitle = (ctx: DocContext, text: string) => {
  ensureSpace(ctx, 14);
  ctx.doc.setFont("helvetica", "bold");
  ctx.doc.setFontSize(10.5);
  ctx.doc.setTextColor(0, 43, 92);
  ctx.doc.text(text, MARGIN, ctx.y);
  ctx.y += 3.5;
  ctx.doc.setDrawColor(0, 84, 166);
  ctx.doc.setLineWidth(0.4);
  ctx.doc.line(MARGIN, ctx.y, ctx.pageWidth - MARGIN, ctx.y);
  ctx.y += 6;
};

const writeLabelValue = (ctx: DocContext, label: string, value?: string | null) => {
  ctx.doc.setFont("helvetica", "bold");
  ctx.doc.setFontSize(9.3);
  ctx.doc.setTextColor(0, 0, 0);
  const text = `${label}: `;
  const valueText = (value && value.trim()) ? value.trim() : "NÃO INFORMADO";
  const full = text + valueText;
  const lines = ctx.doc.splitTextToSize(full, ctx.contentWidth);
  ensureSpace(ctx, lines.length * 5 + 1);
  // Renderiza com o rótulo em negrito e o valor em fonte normal, em uma única chamada
  // (simplificação: todo o bloco em negrito mantém legibilidade e padronização visual)
  ctx.doc.text(lines, MARGIN, ctx.y);
  ctx.y += lines.length * 5 + 1.5;
};

const writeNumberedItem = (ctx: DocContext, numeral: string, text: string) => {
  ctx.doc.setFont("helvetica", "normal");
  ctx.doc.setFontSize(9.3);
  ctx.doc.setTextColor(0, 0, 0);
  const full = `${numeral} – ${text || "NÃO INFORMADO"}`;
  const lines = ctx.doc.splitTextToSize(full, ctx.contentWidth - 3);
  ensureSpace(ctx, lines.length * 5 + 2);
  ctx.doc.text(lines, MARGIN + 2, ctx.y);
  ctx.y += lines.length * 5 + 3;
};

const writeChecklistItem = (ctx: DocContext, checked: boolean, label: string) => {
  ctx.doc.setFont("helvetica", "normal");
  ctx.doc.setFontSize(9.3);
  ctx.doc.setTextColor(0, 0, 0);
  const box = checked ? "[X]" : "[ ]";
  const full = `${box} ${label}`;
  const lines = ctx.doc.splitTextToSize(full, ctx.contentWidth - 3);
  ensureSpace(ctx, lines.length * 5 + 1.5);
  ctx.doc.text(lines, MARGIN + 2, ctx.y);
  ctx.y += lines.length * 5 + 2;
};

const writeParagraph = (ctx: DocContext, text: string, opts: { bold?: boolean; color?: [number, number, number]; size?: number } = {}) => {
  ctx.doc.setFont("helvetica", opts.bold ? "bold" : "normal");
  ctx.doc.setFontSize(opts.size || 9.5);
  const c = opts.color || [0, 0, 0];
  ctx.doc.setTextColor(c[0], c[1], c[2]);
  const lines = ctx.doc.splitTextToSize(text, ctx.contentWidth);
  ensureSpace(ctx, lines.length * 5 + 3);
  ctx.doc.text(lines, MARGIN, ctx.y, { align: 'justify', maxWidth: ctx.contentWidth });
  ctx.y += lines.length * 5 + 5;
};

const writeBoxedText = (ctx: DocContext, label: string, text: string, minHeight = 40) => {
  writeSectionTitle(ctx, label);
  const lines = ctx.doc.splitTextToSize((text || "NÃO INFORMADO").toUpperCase(), ctx.contentWidth - 10);
  const boxHeight = Math.max(minHeight, lines.length * 5 + 10);
  ensureSpace(ctx, boxHeight + 4);
  ctx.doc.setDrawColor(180, 180, 180);
  ctx.doc.rect(MARGIN, ctx.y, ctx.contentWidth, boxHeight);
  ctx.doc.setFont("helvetica", "normal");
  ctx.doc.setFontSize(9.3);
  ctx.doc.setTextColor(0, 0, 0);
  ctx.doc.text(lines, MARGIN + 4, ctx.y + 7, { maxWidth: ctx.contentWidth - 8 });
  ctx.y += boxHeight + 8;
};

const writeSignatureLines = (ctx: DocContext, labels: string[]) => {
  ensureSpace(ctx, 32);
  ctx.y += 12;
  ctx.doc.setDrawColor(0, 0, 0);
  ctx.doc.setLineWidth(0.3);
  if (labels.length === 1) {
    ctx.doc.line((ctx.pageWidth / 2) - 45, ctx.y, (ctx.pageWidth / 2) + 45, ctx.y);
    ctx.y += 5;
    ctx.doc.setFont("helvetica", "normal");
    ctx.doc.setFontSize(8.5);
    ctx.doc.text(labels[0], ctx.pageWidth / 2, ctx.y, { align: 'center' });
  } else {
    const lineSize = 75;
    ctx.doc.line(MARGIN, ctx.y, MARGIN + lineSize, ctx.y);
    ctx.doc.line(ctx.pageWidth - MARGIN - lineSize, ctx.y, ctx.pageWidth - MARGIN, ctx.y);
    ctx.y += 5;
    ctx.doc.setFont("helvetica", "normal");
    ctx.doc.setFontSize(8.5);
    ctx.doc.text(labels[0], MARGIN + (lineSize / 2), ctx.y, { align: 'center' });
    ctx.doc.text(labels[1], ctx.pageWidth - MARGIN - (lineSize / 2), ctx.y, { align: 'center' });
  }
  ctx.y += 10;
};

const writeLegalFooterNote = (ctx: DocContext, extra?: string) => {
  ensureSpace(ctx, 16);
  ctx.y += 4;
  ctx.doc.setDrawColor(200, 200, 200);
  ctx.doc.setLineWidth(0.2);
  ctx.doc.line(MARGIN, ctx.y, ctx.pageWidth - MARGIN, ctx.y);
  ctx.y += 4;
  ctx.doc.setFont("helvetica", "italic");
  ctx.doc.setFontSize(7);
  ctx.doc.setTextColor(110, 110, 110);
  const base = `Documento elaborado em conformidade com a ${RESOLUCAO_REF}, em complemento ao DOC - Documento Orientador para a Convivência - Protocolo 179.`;
  const text = extra ? `${base} ${extra}` : base;
  const lines = ctx.doc.splitTextToSize(text, ctx.contentWidth);
  ctx.doc.text(lines, MARGIN, ctx.y);
  ctx.y += lines.length * 3.4 + 2;
};

const identificationBlock = (ctx: DocContext, incident: Incident) => {
  writeLabelValue(ctx, "Estudante", incident.studentName?.toUpperCase());
  writeLabelValue(ctx, "Turma", incident.classRoom);
  writeLabelValue(ctx, "RA", incident.ra);
  writeLabelValue(ctx, "Data do registro", incident.registerDate || incident.date);
  writeLabelValue(ctx, "Responsável pelo registro (Direção/Gestão)", incident.professorName);
  ctx.y += 2;
};

// Art. 9º, § 1º — o registro deve conter "síntese da análise inicial e
// atualização das intervenções e encaminhamentos adotados". Renderiza os
// encaminhamentos do professor e da gestão já registrados no incidente.
const PROFESSOR_REFERRAL_LABELS: Record<string, string> = {
  orientacao_individual: "Orientação individual e retomada dos combinados de convivência (Art. 7º, II)",
  encaminhamento_gestao: "Encaminhamento à gestão escolar",
  busca_ativa: "Busca ativa do(a) estudante",
  incidente: "Registro de incidente",
  acidente: "Registro de acidente"
};

const writeReferralsSection = (ctx: DocContext, incident: Incident) => {
  const hasProfessor = incident.professorReferrals && incident.professorReferrals.length > 0;
  const hasManagement = incident.managementReferrals && incident.managementReferrals.length > 0;
  if (!hasProfessor && !hasManagement) return;

  writeSectionTitle(ctx, "INTERVENÇÕES E ENCAMINHAMENTOS ADOTADOS (ART. 9º, § 1º)");

  if (hasProfessor) {
    incident.professorReferrals!.forEach(r => {
      const label = PROFESSOR_REFERRAL_LABELS[r.type] || r.type;
      const text = r.description ? `${label} — ${r.description}` : label;
      writeChecklistItem(ctx, true, text);
    });
  }
  if (hasManagement) {
    incident.managementReferrals!.forEach(r => {
      const text = r.description ? `${r.type} — ${r.description}` : r.type;
      writeChecklistItem(ctx, true, text);
    });
  }
  ctx.y += 2;
};

// ════════════════════════════════════════════════════════════════════════
// 1) OCORRÊNCIA DISCIPLINAR / OCORRÊNCIA PEDAGÓGICA
//    Registro escolar nos termos do Art. 9º — caráter pedagógico,
//    formativo e de acompanhamento (Art. 1º, § 1º).
// ════════════════════════════════════════════════════════════════════════
const buildOcorrenciaGenerica = (ctx: DocContext, incident: Incident, title: string) => {
  writeDocTitle(ctx, title, "Registro escolar — Art. 9º da " + RESOLUCAO_REF);
  identificationBlock(ctx, incident);

  writeParagraph(
    ctx,
    "O presente registro documenta, de forma objetiva e tempestiva, situação relacionada à convivência escolar do(a) estudante " +
    "acima identificado(a), com finalidade pedagógica, de acompanhamento e de subsídio à tomada de decisão institucional, " +
    "nos termos do Art. 9º da " + RESOLUCAO_REF + ". A gestão da situação observou abordagem pedagógica, restaurativa e " +
    "formativa, vedado o caráter exclusivamente punitivo (Art. 1º, § 1º)."
  );

  writeBoxedText(ctx, "RELATO OBJETIVO DOS FATOS", incident.description, 45);

  writeReferralsSection(ctx, incident);

  if (incident.irregularities && incident.irregularities !== 'NENHUMA') {
    writeLabelValue(ctx, "Observações adicionais", incident.irregularities);
  }

  writeParagraph(ctx, `GUARULHOS, ${incident.date}.`);
  writeSignatureLines(ctx, ["Assinatura do Aluno", "Assinatura do Responsável"]);
  writeSignatureLines(ctx, ["Assinatura da Direção / Gestão"]);
  writeLegalFooterNote(ctx);
};

// ════════════════════════════════════════════════════════════════════════
// 2) ENCAMINHAMENTO PEDAGÓGICO (ESTUDO DIRIGIDO) — Art. 7º, IX e Art. 8º
// ════════════════════════════════════════════════════════════════════════
const ATIVIDADE_LABELS: Record<string, string> = {
  leitura_orientada: "Leitura orientada e reflexão sobre a situação ocorrida (Art. 8º, I)",
  producao_escrita_reflexiva: "Produção escrita reflexiva sobre a conduta, suas consequências e possibilidades de reparação (Art. 8º, II)",
  atividades_curriculares: "Atividades curriculares orientadas, inclusive com Plataformas Educacionais (Art. 8º, III)",
  acompanhamento_profissional: "Acompanhamento direto por profissional da equipe escolar designado (Art. 8º, IV)"
};

const buildEncaminhamentoPedagogico = (ctx: DocContext, incident: Incident) => {
  const d = incident.measureData?.encaminhamentoPedagogico;
  writeDocTitle(ctx, "ENCAMINHAMENTO PEDAGÓGICO — ESTUDO DIRIGIDO", "Art. 7º, inciso IX e Art. 8º da " + RESOLUCAO_REF);
  identificationBlock(ctx, incident);

  writeSectionTitle(ctx, "NATUREZA DA ESTRATÉGIA");
  writeParagraph(
    ctx,
    "Estratégia pedagógica intermediária, contextualizada e temporária, consistente na retirada pontual do(a) estudante da " +
    "sala de aula e em seu encaminhamento a outro espaço da unidade escolar para realização de atividades pedagógicas " +
    "diferenciadas, sob supervisão de integrante da equipe gestora, assegurada a continuidade do processo de aprendizagem. " +
    "Não se confunde com o afastamento preventivo temporário e é vedada sua utilização como castigo, mecanismo de " +
    "segregação ou substituição informal deste (Art. 7º, §§ 3º e 6º)."
  );

  writeLabelValue(ctx, "Espaço utilizado na unidade escolar", d?.espacoUtilizado);
  writeLabelValue(ctx, "Profissional responsável pela supervisão", d?.profissionalResponsavel);
  writeLabelValue(ctx, "Duração (dias)", d?.duracaoDias ? String(d.duracaoDias) : undefined);

  writeSectionTitle(ctx, "ATIVIDADES APLICADAS (ART. 8º)");
  (['leitura_orientada', 'producao_escrita_reflexiva', 'atividades_curriculares', 'acompanhamento_profissional'] as const)
    .forEach(key => writeChecklistItem(ctx, !!d?.atividades?.includes(key), ATIVIDADE_LABELS[key]));

  writeBoxedText(ctx, "DESCRIÇÃO DA SITUAÇÃO QUE MOTIVOU O ENCAMINHAMENTO", incident.description, 40);

  writeReferralsSection(ctx, incident);

  if (d?.reiterado) {
    writeParagraph(
      ctx,
      "ADOÇÃO REITERADA: nos termos do Art. 7º, § 5º, esta estratégia foi adotada de forma reiterada, sendo comunicada à " +
      "família ou responsáveis legais e integrada ao plano individual de acompanhamento do(a) estudante, com avaliação " +
      "periódica de sua efetividade.",
      { bold: true, color: [180, 90, 0] }
    );
  }

  writeParagraph(ctx, `GUARULHOS, ${incident.date}.`);
  writeSignatureLines(ctx, ["Profissional Responsável", "Assinatura da Direção / Gestão"]);
  writeLegalFooterNote(ctx);
};

// ════════════════════════════════════════════════════════════════════════
// 3) AFASTAMENTO PREVENTIVO TEMPORÁRIO — Art. 11 e 12
// ════════════════════════════════════════════════════════════════════════
const HIPOTESE_LABELS: Record<string, string> = {
  I: "Inciso I — permanência imediata do(a) estudante representa risco concreto, atual ou fundamentadamente previsível à integridade física, psíquica ou moral de outros estudantes, profissionais da educação, colaboradores ou demais integrantes da comunidade escolar.",
  II: "Inciso II — o(a) estudante está em risco no ambiente escolar, podendo sua permanência expô-lo(a) a retaliações, ameaças, intimidações, agravamento de conflitos ou outras situações de vulnerabilidade.",
  III: "Inciso III — recorrência grave de atos de indisciplina ou ruptura da convivência escolar, com esgotamento ou insuficiência das estratégias pedagógicas, restaurativas, mediadoras, protetivas e protocolares anteriormente adotadas."
};

const buildAfastamentoPreventivo = (ctx: DocContext, incident: Incident) => {
  const d = incident.measureData?.afastamentoPreventivo;
  writeDocTitle(ctx, "COMUNICADO DE AFASTAMENTO PREVENTIVO TEMPORÁRIO", "Art. 11 e Art. 12 da " + RESOLUCAO_REF);
  identificationBlock(ctx, incident);

  writeParagraph(
    ctx,
    "Comunicamos a adoção, em caráter cautelar, excepcional, motivado e pelo menor tempo necessário, do AFASTAMENTO " +
    "PREVENTIVO TEMPORÁRIO do(a) estudante acima identificado(a) das atividades presenciais, nos termos do Art. 11 da " +
    RESOLUCAO_REF + ". Esta medida não constitui punição, sanção definitiva ou decisão automática de transferência " +
    "cautelar, destinando-se à contenção imediata do risco, à organização dos registros, à escuta dos envolvidos, à " +
    "comunicação à família, à articulação com a Unidade Regional de Ensino e à definição dos encaminhamentos cabíveis " +
    "(Art. 11, § 2º).",
    { bold: false }
  );

  writeSectionTitle(ctx, "HIPÓTESE LEGAL (ART. 11, § 1º)");
  writeParagraph(ctx, d?.hipotese ? HIPOTESE_LABELS[d.hipotese] : "NÃO INFORMADO", { size: 9 });

  writeSectionTitle(ctx, "PRAZO DA MEDIDA");
  writeLabelValue(ctx, "Data de início", d?.dataInicio);
  writeLabelValue(ctx, "Prazo (dias letivos)", d?.prazoDiasLetivos ? String(d.prazoDiasLetivos) : "5 (Art. 11, § 5º)");
  writeLabelValue(ctx, "Data prevista de retorno", d?.dataPrevistaRetorno);
  if (d?.prorrogado) {
    writeParagraph(
      ctx,
      `PRORROGAÇÃO (Art. 11, §§ 6º e 7º): a medida foi prorrogada por igual período mediante reavaliação formal e ` +
      `fundamentada pela Direção, com acompanhamento da URE e apreciação do Conselho de Escola em ${d.dataAprovacaoConselhoProrrogacao || "data não informada"}. ` +
      `Justificativa: ${d.justificativaProrrogacao || "NÃO INFORMADA"}`,
      { bold: true, color: [180, 0, 0] }
    );
  }
  writeParagraph(
    ctx,
    "Encerrado o prazo da medida, não havendo deliberação fundamentada por sua prorrogação, pela transferência cautelar " +
    "ou por outra providência excepcional, o(a) estudante retornará às atividades presenciais, com plano de " +
    "acompanhamento, quando necessário (Art. 11, § 8º).",
    { size: 8.5, color: [90, 90, 90] }
  );

  writeBoxedText(ctx, "MOTIVAÇÃO E DESCRIÇÃO DOS FATOS", incident.description, 40);

  writeSectionTitle(ctx, "COMUNICAÇÃO FORMAL À FAMÍLIA (ART. 12, § 1º)");
  writeNumberedItem(ctx, "I", "Descrição objetiva da situação que motivou a medida: vide \"MOTIVAÇÃO E DESCRIÇÃO DOS FATOS\" acima e hipótese legal indicada neste documento.");
  writeNumberedItem(ctx, "II", "O AFASTAMENTO PREVENTIVO TEMPORÁRIO possui caráter cautelar, excepcional e temporário, não constituindo punição, sanção definitiva ou decisão automática de transferência cautelar (Art. 11, § 2º).");
  writeNumberedItem(
    ctx,
    "III",
    d?.planoContinuidadePedagogica
      ? `Continuidade das atividades pedagógicas: ${d.planoContinuidadePedagogica}`
      : "Será assegurada a continuidade das atividades pedagógicas por meio de plano de estudos, atividades orientadas ou outra estratégia compatível com a etapa de ensino do(a) estudante, conforme Art. 11, § 3º."
  );
  writeNumberedItem(
    ctx,
    "IV",
    "Próximos procedimentos: a Direção elaborará os registros e, se necessário, o relatório circunstanciado; ao término do prazo informado, " +
    "havendo deliberação fundamentada, a medida poderá ser prorrogada por igual período ou seguida de transferência cautelar; não havendo " +
    "tal deliberação, o(a) estudante retornará às atividades presenciais, com plano de acompanhamento quando necessário (Art. 11, §§ 6º a 8º)."
  );
  writeNumberedItem(
    ctx,
    "V",
    "Canais para manifestação: a família ou os responsáveis legais poderão se manifestar presencialmente na Direção da unidade escolar, " +
    "dentro do horário de funcionamento, por escrito protocolado na secretaria, ou pelo telefone institucional informado no cabeçalho deste " +
    "documento, em qualquer momento durante o prazo da medida (Art. 12, § 3º)."
  );

  writeSectionTitle(ctx, "OUTRAS COMUNICAÇÕES INSTITUCIONAIS (ART. 12, CAPUT)");
  writeChecklistItem(ctx, !!d?.comunicadoFamilia, "Comunicação formal à família ou aos responsáveis legais realizada");
  writeChecklistItem(ctx, !!d?.comunicadoURE, "Comunicação à Unidade Regional de Ensino (URE) realizada");
  writeChecklistItem(ctx, !!d?.comunicadoRedeProtetiva, "Comunicação aos órgãos da rede protetiva ou demais órgãos competentes (quando exigível)");
  writeChecklistItem(ctx, !!d?.oportunidadeManifestacaoAssegurada, "Oportunidade de manifestação assegurada ao(à) estudante e à família, com garantias análogas ao contraditório e à ampla defesa (Art. 12, § 3º)");

  writeParagraph(ctx, `GUARULHOS, ${incident.date}.`);
  writeSignatureLines(ctx, ["Ciência da Família / Responsável", "Assinatura da Direção / Gestão"]);
  writeLegalFooterNote(ctx);
};

// ════════════════════════════════════════════════════════════════════════
// 4) TRANSFERÊNCIA CAUTELAR — Art. 13 a 22
//    Dossiê único: Relatório Circunstanciado + Notificação + Ata do
//    Conselho de Escola + Declaração de Transferência.
// ════════════════════════════════════════════════════════════════════════
const DECISAO_CONSELHO_LABELS: Record<string, string> = {
  retorno_atividades: "Retorno do(a) estudante às atividades presenciais na unidade escolar de origem, com plano de acompanhamento (Art. 16, § 3º, I).",
  manutencao_intensificacao_medidas: "Manutenção ou intensificação das medidas pedagógicas, restaurativas, mediadoras ou protetivas (Art. 16, § 3º, II).",
  articulacao_ure_rede_protetiva: "Articulação com a URE e com a rede protetiva para adoção de providências complementares (Art. 16, § 3º, III).",
  transferencia_deliberada: "Deliberação pela transferência cautelar, demonstrada a excepcionalidade da medida e a insuficiência das alternativas anteriores (Art. 16, § 3º, IV)."
};

const buildRelatorioCircunstanciado = (ctx: DocContext, incident: Incident) => {
  const d = incident.measureData?.transferenciaCautelar;
  writeDocTitle(ctx, "RELATÓRIO CIRCUNSTANCIADO", "Art. 15 da " + RESOLUCAO_REF + " — documento técnico, objetivo, cronológico e fundamentado");
  identificationBlock(ctx, incident);

  writeNumberedItem(ctx, "I", `Unidade escolar: E.E. PROFª LYDIA KITZ MOREIRA. Equipe responsável pela elaboração: ${incident.professorName || "NÃO INFORMADO"}.`);
  writeNumberedItem(ctx, "II", `Estudante identificado(a) nos registros internos sob RA ${incident.ra || "NÃO INFORMADO"}, preservado o sigilo das informações pessoais neste e nos demais documentos do procedimento.`);
  writeNumberedItem(ctx, "III", d?.cronologiaFatos || incident.description);
  writeNumberedItem(ctx, "IV", d?.analiseRisco || "NÃO INFORMADO");
  writeNumberedItem(ctx, "V", d?.registrosPlataformaConviva || "Registros atualizados na Plataforma Conviva, ou sistema institucional equivalente, ao longo de todo o acompanhamento.");
  writeNumberedItem(ctx, "VI", d?.medidasAdotadasAnteriormente || "NÃO INFORMADO");
  writeNumberedItem(ctx, "VII", d?.comunicacoesFamilia || "NÃO INFORMADO");
  writeNumberedItem(ctx, "VIII", d?.registrosReunioesPactuacoes || "Sem registros adicionais de reuniões, orientações ou pactuações além dos já mencionados.");
  writeNumberedItem(ctx, "IX", d?.encaminhamentosRedeProtetiva || "Não houve encaminhamento à rede protetiva ou a outros órgãos competentes neste procedimento.");
  writeNumberedItem(ctx, "X", d?.justificativaTecnicaTransferencia || "NÃO INFORMADO");
  writeNumberedItem(ctx, "XI", d?.propostaContinuidadeAcompanhamento || "A continuidade do acompanhamento pedagógico e protetivo do(a) estudante será definida em conjunto com a URE e a unidade escolar de destino.");
  writeNumberedItem(
    ctx,
    "XII",
    d?.matriculaPorDecisaoJudicial
      ? `Matrícula decorrente de decisão judicial. Processo nº ${d?.numeroProcessoJudicial || "NÃO INFORMADO"}. Observância integral do conteúdo da ordem vigente, nos termos do Capítulo VII desta Resolução.`
      : "Não há matrícula decorrente de decisão judicial."
  );

  writeParagraph(
    ctx,
    "Este relatório evita juízos morais, expressões estigmatizantes, exposição indevida da vida privada do(a) estudante " +
    "e informações não verificadas, demonstrando o cumprimento das ações previstas no DOC - Documento Orientador para a " +
    "Convivência - Protocolo 179 e o esgotamento ou a insuficiência das estratégias anteriores (Art. 15, §§ 1º e 3º).",
    { size: 8.3, color: [90, 90, 90] }
  );

  writeParagraph(ctx, `GUARULHOS, ${incident.date}.`);
  writeSignatureLines(ctx, ["Direção da Unidade Escolar"]);
  writeLegalFooterNote(ctx);
};

const buildNotificacaoFamilia = (ctx: DocContext, incident: Incident) => {
  const d = incident.measureData?.transferenciaCautelar;
  writeDocTitle(ctx, "NOTIFICAÇÃO FORMAL — ESTUDANTE E FAMÍLIA", "Art. 17 da " + RESOLUCAO_REF);
  identificationBlock(ctx, incident);

  writeParagraph(
    ctx,
    "O(A) estudante e sua família ou responsáveis legais ficam formalmente notificados sobre os fatos, os fundamentos e a " +
    "possibilidade de adoção de TRANSFERÊNCIA CAUTELAR, assegurados o contraditório, a ampla defesa e a oportunidade de " +
    "manifestação durante todas as etapas do procedimento (Art. 17, caput)."
  );

  writeLabelValue(ctx, "Data da notificação", d?.dataNotificacaoFamilia);
  writeBoxedText(ctx, "FATOS E FUNDAMENTOS OBJETO DA NOTIFICAÇÃO", d?.justificativaTecnicaTransferencia || incident.description, 35);

  writeSectionTitle(ctx, "GARANTIAS ASSEGURADAS");
  writeChecklistItem(ctx, true, "Manifestação em ambiente adequado, com respeito à dignidade e proteção contra exposição indevida ou constrangimento (Art. 17, § 2º)");
  writeChecklistItem(ctx, true, "Possibilidade de apresentação de manifestação escrita ou oral, documentos e informações complementares (Art. 17, § 3º)");
  writeChecklistItem(ctx, !!d?.acompanhadoAdvogado, "Acompanhamento por advogado constituído, caso solicitado pela família (Art. 17, § 3º)");

  if (d?.manifestacaoEstudanteFamilia) {
    writeSectionTitle(ctx, "MANIFESTAÇÃO APRESENTADA");
    writeParagraph(ctx, d.manifestacaoEstudanteFamilia);
  } else {
    writeParagraph(
      ctx,
      "A ausência de manifestação registrada, desde que devidamente notificados a família ou os responsáveis legais, não " +
      "impede o prosseguimento do procedimento, devendo a unidade escolar registrar as tentativas de contato realizadas " +
      "(Art. 17, § 4º).",
      { size: 8.3, color: [90, 90, 90] }
    );
  }

  writeParagraph(ctx, `GUARULHOS, ${incident.date}.`);
  writeSignatureLines(ctx, ["Ciência do Estudante / Família", "Assinatura da Direção / Gestão"]);
  writeLegalFooterNote(ctx);
};

const buildAtaConselho = (ctx: DocContext, incident: Incident) => {
  const d = incident.measureData?.transferenciaCautelar;
  writeDocTitle(ctx, "ATA DE DELIBERAÇÃO DO CONSELHO DE ESCOLA", "Art. 16, § 3º da " + RESOLUCAO_REF);
  identificationBlock(ctx, incident);

  writeLabelValue(ctx, "Data da reunião", d?.dataReuniaoConselho);
  writeLabelValue(ctx, "Membros presentes", d?.membrosPresentesConselho);

  writeParagraph(
    ctx,
    "A convocação ocorreu de forma reservada, com preservação da imagem, da identidade, da dignidade e das informações " +
    "pessoais dos envolvidos, tendo os participantes sido previamente orientados quanto ao dever de sigilo (Art. 16, § 1º). " +
    "Na apreciação do caso foram consideradas a gravidade da situação, a existência de risco individual ou coletivo, as " +
    "medidas anteriormente adotadas, as alternativas ainda possíveis, a manifestação do(a) estudante e da família, a " +
    "compatibilidade com o Regimento Escolar e os encaminhamentos necessários à rede protetiva (Art. 16, § 2º)."
  );

  writeSectionTitle(ctx, "DECISÃO FUNDAMENTADA (ART. 16, § 3º)");
  writeParagraph(ctx, d?.decisaoConselho ? DECISAO_CONSELHO_LABELS[d.decisaoConselho] : "NÃO INFORMADO", { bold: true });

  writeBoxedText(ctx, "FUNDAMENTAÇÃO DA DECISÃO", d?.fundamentacaoDecisaoConselho || "NÃO INFORMADO", 35);

  writeParagraph(
    ctx,
    "Esta decisão será comunicada formalmente ao(à) estudante e à família ou aos responsáveis legais em documento próprio " +
    "(Art. 18). Todos os documentos e informações que subsidiaram a decisão, inclusive este relatório circunstanciado e a " +
    "presente ata, serão arquivados na unidade escolar em caráter reservado, à disposição das autoridades competentes " +
    "(Art. 18, § 1º).",
    { size: 8.3, color: [90, 90, 90] }
  );

  writeParagraph(ctx, `GUARULHOS, ${d?.dataReuniaoConselho || incident.date}.`);
  writeSignatureLines(ctx, ["Presidência do Conselho de Escola", "Secretaria / Registro da Ata"]);
  writeLegalFooterNote(ctx);
};

// Art. 18 — comunicação formal da decisão final, com fundamentos,
// encaminhamentos adotados e toda a cadeia de recurso.
const buildComunicacaoDecisaoFinal = (ctx: DocContext, incident: Incident) => {
  const d = incident.measureData?.transferenciaCautelar;
  writeDocTitle(ctx, "COMUNICAÇÃO FORMAL DA DECISÃO FINAL", "Art. 18 da " + RESOLUCAO_REF);
  identificationBlock(ctx, incident);

  writeParagraph(
    ctx,
    "Comunicamos formalmente ao(à) estudante e à família ou aos responsáveis legais a decisão final do Conselho de Escola " +
    "ou colegiado equivalente, proferida em " + (d?.dataReuniaoConselho || "data não informada") + ", nos termos do Art. 18 da " + RESOLUCAO_REF + "."
  );

  writeSectionTitle(ctx, "FUNDAMENTOS DA DECISÃO");
  writeParagraph(ctx, d?.fundamentacaoDecisaoConselho || "NÃO INFORMADO");

  writeSectionTitle(ctx, "ENCAMINHAMENTO ADOTADO");
  writeParagraph(ctx, d?.decisaoConselho ? DECISAO_CONSELHO_LABELS[d.decisaoConselho] : "NÃO INFORMADO", { bold: true });

  writeSectionTitle(ctx, "POSSIBILIDADE DE RECURSO");
  writeNumberedItem(ctx, "1", `Recurso à URE de circunscrição da unidade escolar de origem, no prazo de ${d?.prazoRecursoDias || 5} dias a contar desta comunicação (Art. 18, § 2º).`);
  writeNumberedItem(ctx, "2", "A URE analisará o procedimento no prazo de 5 (cinco) dias, considerando a excepcionalidade da situação, a regularidade das providências adotadas e o atendimento ao Regimento Escolar (Art. 18, § 3º).");
  writeNumberedItem(ctx, "3", "Da decisão da URE caberá recurso ao Conselho Estadual de Educação, no prazo de 10 (dez) dias, sem efeito suspensivo (Art. 18, § 4º).");

  writeParagraph(
    ctx,
    "Todos os documentos e informações que subsidiaram esta decisão, inclusive o relatório circunstanciado e a ata " +
    "deliberativa do Conselho de Escola, encontram-se arquivados na unidade escolar, em caráter reservado, à disposição " +
    "das autoridades competentes (Art. 18, § 1º).",
    { size: 8.3, color: [90, 90, 90] }
  );

  writeParagraph(ctx, `GUARULHOS, ${incident.date}.`);
  writeSignatureLines(ctx, ["Ciência do Estudante / Família", "Assinatura da Direção / Gestão"]);
  writeLegalFooterNote(ctx);
};

const buildDeclaracaoTransferencia = (ctx: DocContext, incident: Incident) => {
  const d = incident.measureData?.transferenciaCautelar;
  writeDocTitle(ctx, "DECLARAÇÃO DE TRANSFERÊNCIA CAUTELAR", "Art. 19 da " + RESOLUCAO_REF);
  identificationBlock(ctx, incident);

  writeParagraph(
    ctx,
    "A Direção da unidade escolar de origem declara, para os devidos fins, que foi deliberada a TRANSFERÊNCIA CAUTELAR do(a) " +
    "estudante acima identificado(a), nos termos do Art. 13 e seguintes da " + RESOLUCAO_REF + ", encaminhando o expediente " +
    "à Unidade Regional de Ensino para adoção das providências necessárias à continuidade dos estudos (Art. 19)."
  );

  writeLabelValue(ctx, "Unidade escolar de destino (sugerida/definida pela URE)", d?.unidadeEscolarDestino);
  writeLabelValue(ctx, "Data de efetivação", d?.dataEfetivacao);
  writeChecklistItem(ctx, !!d?.transporteEscolarNecessario, "Necessidade de transporte escolar / acessibilidade na unidade de destino (Art. 20, VII)");

  writeParagraph(
    ctx,
    "A transferência cautelar não interromperá o acompanhamento institucional do(a) estudante e não poderá acarretar " +
    "prejuízo à continuidade dos estudos (Art. 13, § 3º e Art. 22, parágrafo único). Compete à URE verificar a regularidade " +
    "documental, assegurar as condições de frequência na unidade de destino e planejar, em conjunto com as unidades " +
    "escolares de origem e de destino, o acolhimento e a continuidade do acompanhamento (Art. 20).",
    { size: 8.5 }
  );

  writeParagraph(ctx, `GUARULHOS, ${d?.dataEfetivacao || incident.date}.`);
  writeSignatureLines(ctx, ["Direção da Unidade Escolar de Origem"]);
  writeLegalFooterNote(ctx, "Arquivar cópia integral do dossiê (relatório, notificação, ata e declaração) na unidade escolar, em caráter reservado (Art. 18, § 1º).");
};

const buildTransferenciaCautelarDossier = (ctx: DocContext, incident: Incident) => {
  const d = incident.measureData?.transferenciaCautelar;

  // Capa do dossiê
  writeDocTitle(ctx, "DOSSIÊ DE TRANSFERÊNCIA CAUTELAR", RESOLUCAO_REF + " — Art. 13 a 22");
  identificationBlock(ctx, incident);
  writeLabelValue(ctx, "Etapa atual do procedimento (Art. 14)", d?.etapaAtual ? `Etapa ${d.etapaAtual} de 5` : "NÃO INFORMADO");
  writeParagraph(
    ctx,
    "Este dossiê reúne os documentos exigidos pela " + RESOLUCAO_REF + " para a instrução do procedimento de transferência " +
    "cautelar: (1) Relatório Circunstanciado, (2) Notificação Formal ao Estudante e Família, (3) Ata de Deliberação do " +
    "Conselho de Escola, (4) Comunicação Formal da Decisão Final e (5) Declaração de Transferência, quando deliberada. A " +
    "transferência cautelar somente poderá ser adotada em caráter excepcional e protetivo, vedada sua utilização como " +
    "punição automática ou mecanismo de exclusão (Art. 13, §§ 1º e 2º)."
  );
  writeLegalFooterNote(ctx);

  newPage(ctx);
  buildRelatorioCircunstanciado(ctx, incident);

  newPage(ctx);
  buildNotificacaoFamilia(ctx, incident);

  newPage(ctx);
  buildAtaConselho(ctx, incident);

  newPage(ctx);
  buildComunicacaoDecisaoFinal(ctx, incident);

  if (d?.decisaoConselho === 'transferencia_deliberada') {
    newPage(ctx);
    buildDeclaracaoTransferencia(ctx, incident);
  }
};

// ════════════════════════════════════════════════════════════════════════
// 5) MEDIDA EDUCATIVA — categoria legada (registros anteriores à adequação
//    à Resolução SEDUC nº 68/2026; mantida apenas para compatibilidade
//    com registros já existentes, removida do formulário de novos
//    lançamentos).
// ════════════════════════════════════════════════════════════════════════
const buildMedidaEducativaLegado = (ctx: DocContext, incident: Incident) => {
  writeDocTitle(ctx, "COMUNICADO DE MEDIDA EDUCATIVA", "Registro legado — reinterpretado à luz do Art. 1º, § 1º da " + RESOLUCAO_REF);
  identificationBlock(ctx, incident);

  writeParagraph(
    ctx,
    "Comunicamos que o(a) estudante acima identificado(a) foi acompanhado(a) pedagogicamente em razão de situação " +
    "relacionada à convivência escolar, com foco na compreensão das causas, na responsabilização ativa e na reparação de " +
    "danos, vedado o caráter exclusivamente punitivo. Ressaltamos a importância do convívio harmonioso e do respeito às " +
    "normas vigentes."
  );

  if (incident.returnDate) {
    writeParagraph(ctx, `DATA DE RETORNO ÀS ATIVIDADES: ${incident.returnDate}`, { bold: true, color: [200, 0, 0] });
  }

  writeBoxedText(ctx, "RELATO DETALHADO DOS FATOS", incident.description, 50);

  writeReferralsSection(ctx, incident);

  writeParagraph(ctx, `GUARULHOS, ${incident.date}.`);
  writeSignatureLines(ctx, ["Assinatura do Aluno", "Assinatura do Responsável"]);
  writeSignatureLines(ctx, ["Assinatura da Direção / Gestão"]);
  writeLegalFooterNote(ctx);
};

// ── Dispatcher principal ────────────────────────────────────────────────

const buildDoc = async (incident: Incident): Promise<jsPDF> => {
  const ctx = await createBaseDoc();
  drawPageFrame(ctx);
  ctx.y = drawHeaderBlock(ctx) + 10;

  switch (incident.category) {
    case 'ENCAMINHAMENTO PEDAGÓGICO (ESTUDO DIRIGIDO)':
      buildEncaminhamentoPedagogico(ctx, incident);
      break;
    case 'AFASTAMENTO PREVENTIVO TEMPORÁRIO':
      buildAfastamentoPreventivo(ctx, incident);
      break;
    case 'TRANSFERÊNCIA CAUTELAR':
      buildTransferenciaCautelarDossier(ctx, incident);
      break;
    case 'MEDIDA EDUCATIVA':
      buildMedidaEducativaLegado(ctx, incident);
      break;
    case 'OCORRÊNCIA PEDAGÓGICA':
      buildOcorrenciaGenerica(ctx, incident, "REGISTRO DE OCORRÊNCIA PEDAGÓGICA");
      break;
    case 'OCORRÊNCIA DISCIPLINAR':
    default:
      buildOcorrenciaGenerica(ctx, incident, "REGISTRO DE OCORRÊNCIA DISCIPLINAR");
      break;
  }

  return ctx.doc;
};

// ── API pública (compatível com o restante da plataforma) ──────────────

export const generateIncidentPDF = async (incident: Incident, action: 'view' | 'download' = 'download') => {
  const doc = await buildDoc(incident);
  if (action === 'view') {
    const blobUrl = doc.output('bloburl');
    window.open(blobUrl, '_blank');
  } else {
    const fileNameTag = incident.category === 'TRANSFERÊNCIA CAUTELAR' ? 'DOSSIE_TRANSFERENCIA' : 'REGISTRO_LKM';
    doc.save(`${fileNameTag}_${incident.studentName.replace(/\s+/g, '_')}.pdf`);
  }
};

/**
 * Gera um PDF e faz upload para o Supabase Storage.
 * Retorna a URL pública do PDF ou null em caso de erro.
 */
export const uploadPDFToStorage = async (incident: Incident): Promise<string | null> => {
  if (!isSupabaseConfigured || !supabase) {
    console.warn("Supabase não configurado. Upload de PDF cancelado.");
    return null;
  }

  try {
    const doc = await buildDoc(incident);
    const pdfBlob = doc.output('blob');

    const fileName = `${incident.id}_${incident.studentName.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
    const filePath = `${fileName}`;

    const { error } = await supabase.storage
      .from('incident-pdfs')
      .upload(filePath, pdfBlob, {
        contentType: 'application/pdf',
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error("Erro ao fazer upload do PDF:", error);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from('incident-pdfs')
      .getPublicUrl(filePath);

    if (!publicUrlData?.publicUrl) {
      console.error('❌ Erro: URL pública não foi gerada');
      return null;
    }

    console.log('✅ URL pública gerada:', publicUrlData.publicUrl);
    return publicUrlData.publicUrl;

  } catch (error) {
    console.error('❌ Erro ao gerar/enviar PDF:', error);
    return null;
  }
};
