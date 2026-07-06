import { Incident, Student } from '../types';
import { normalizeClassName } from '../utils/formatters';

/**
 * URL do script principal — Ocorrências e leitura de alunos.
 */
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyIJ6aotlvx3dHjixi5OgwLOWQGhQ6TThEW1eBqsnUMEBNK1lrFoA1EVPUAYiSqJAGR/exec';

/**
 * URL do script DEDICADO para avaliações da plataforma.
 * Após implantar o arquivo google-apps-script-avaliacoes.js no Google Apps Script,
 * substitua o valor abaixo pela URL gerada (termina em /exec).
 */
const RATING_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwpikGx909rRAu8jxz7ucZzWQdB9AlHNwdQS9UOfp5Is9VJUTGaUVreAmTZDH_69Xsr/exec';

/**
 * Carrega a lista de alunos da planilha Google Sheets.
 * Aba: BANCODEDADOSGERAL
 */
export const loadStudentsFromSheets = async (): Promise<Student[]> => {
  try {
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?sheetName=BANCODEDADOSGERAL`, {
      method: 'GET',
      cache: 'no-cache',
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && Array.isArray(data.students)) {
      console.log(`✅ Google Sheets: Carregados ${data.students.length} alunos`);

      // Log detalhado de debug
      if (data.debug) {
        const d = data.debug;
        console.log(`📋 Sheets debug:`, {
          aba: d.sheetUsed,
          linhaHeader: d.headerRow,
          totalLinhas: d.totalRows,
          totalColunas: d.totalCols,
          blocosDetectados: d.classBlocksDetected?.length,
          blocos: d.classBlocksDetected
        });
      }

      // Log turmas encontradas
      const turmasUnicas = [...new Set(data.students.map((s: any) => s.turma))].sort();
      console.log(`📚 Turmas retornadas (${turmasUnicas.length}):`, turmasUnicas);

      // Contagem por turma
      const contagemPorTurma: Record<string, number> = {};
      data.students.forEach((s: any) => {
        contagemPorTurma[s.turma] = (contagemPorTurma[s.turma] || 0) + 1;
      });
      console.log('👥 Alunos por turma:', contagemPorTurma);

      // Salvar turmas detectadas pelo script (mesmo sem alunos) para o dropdown
      if (data.debug?.classBlocksDetected && Array.isArray(data.debug.classBlocksDetected)) {
        // Extrai apenas o nome da turma antes do " (nome:..."
        const detectedClasses: string[] = data.debug.classBlocksDetected.map(
          (entry: string) => normalizeClassName(entry.split(' (')[0].trim())
        );
        (window as any).__allDetectedClasses = detectedClasses;
        console.log(`📋 Turmas detectadas na planilha: ${detectedClasses.join(', ')}`);
      }

      return data.students;
    }

    throw new Error('Formato de resposta inválido do Google Sheets');
  } catch (error) {
    console.error('❌ Erro ao carregar alunos do Google Sheets:', error);
    return [];
  }
};

export const saveToGoogleSheets = async (incident: Incident) => {
  try {
    const isGestao = incident.source === 'gestao';
    const sheetName = isGestao ? 'BANCODEALUNOS' : 'OCORRENCIASDOSPROFESSORES';

    /**
     * Usa a URL pública do PDF armazenado no Supabase Storage.
     * Se não houver URL (upload falhou), mostra mensagem de erro.
     */
    console.log(`📋 Google Sheets - Aluno: ${incident.studentName}, PDF URL:`, incident.pdfUrl || 'não disponível');

    const pdfLinkFormula = incident.pdfUrl
      ? `=HYPERLINK("${incident.pdfUrl}"; "📄 ABRIR PDF")`
      : "❌ PDF não gerado";

    const values = isGestao ? [
      incident.date,                           // 1. Data
      incident.studentName.toUpperCase(),      // 2. Aluno
      incident.classRoom || '---',             // 3. Turma
      incident.professorName?.toUpperCase() || 'GESTAO', // 4. Responsável
      incident.ra || '---',                    // 5. RA
      incident.category || 'OCORRÊNCIA',       // 6. Categoria
      incident.description.toUpperCase(),      // 7. Relato
      incident.registerDate || incident.date,  // 8. Registro
      incident.returnDate || 'N/A',            // 9. Retorno
      pdfLinkFormula                           // 10. Link PDF
    ] : [
      incident.date,                           // 1. Data
      incident.professorName?.toUpperCase() || '---', // 2. Professor
      incident.classRoom || '---',             // 3. Turma
      incident.studentName.toUpperCase(),      // 4. Aluno
      incident.ra || '---',                    // 5. RA
      incident.discipline?.toUpperCase() || 'N/A', // 6. Disciplina
      incident.irregularities?.toUpperCase() || 'NENHUMA', // 7. Irregularidades
      incident.description.toUpperCase(),      // 8. Relato
      incident.time || '---',                  // 9. Horário
      pdfLinkFormula                           // 10. Link PDF
    ];

    const payload = {
      sheetName: sheetName,
      values: values
    };

    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return true;
  } catch (error) {
    console.error('Erro ao sincronizar com Google Sheets:', error);
    return false;
  }
};

/**
 * Envia uma avaliação de usuário para o script DEDICADO de avaliações.
 * Script: google-apps-script-avaliacoes.js
 * Aba:    AVALIAÇÃO DOS USUÁRIOS
 *
 * O payload é enviado para RATING_SCRIPT_URL (script separado).
 * A nota, média e formatação das estrelas são feitas pelo próprio script.
 */
export const saveRatingToGoogleSheets = async (ratingData: {
  userEmail: string;
  userRole: string;
  facilidadeUso: number;
  utilidadePedagogica: number;
  desempenhoVelocidade: number;
  satisfacaoGeral: number;
  comentarios: string;
}): Promise<boolean> => {
  try {
    // Verifica se a URL do script de avaliações foi configurada
    if (!RATING_SCRIPT_URL || RATING_SCRIPT_URL === 'COLE_AQUI_A_URL_DO_SCRIPT_DE_AVALIACOES') {
      console.warn('⚠️ URL do script de avaliações não configurada. Configure RATING_SCRIPT_URL em sheetsService.ts.');
      // Fallback: envia pelo script principal enquanto o dedicado não está configurado
      const fallbackPayload = {
        sheetName: 'AVALIAÇÃO DOS USUÁRIOS',
        values: [
          new Date().toLocaleString('pt-BR'),
          ratingData.userEmail.toLowerCase().trim(),
          ratingData.userRole === 'gestor' ? 'GESTÃO' : 'PROFESSOR(A)',
          ratingData.facilidadeUso,
          ratingData.utilidadePedagogica,
          ratingData.desempenhoVelocidade,
          ratingData.satisfacaoGeral,
          ((ratingData.facilidadeUso + ratingData.utilidadePedagogica + ratingData.desempenhoVelocidade + ratingData.satisfacaoGeral) / 4).toFixed(1) + '/5',
          ratingData.comentarios.trim().toUpperCase() || 'SEM COMENTÁRIOS'
        ]
      };
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(fallbackPayload),
      });
      return true;
    }

    // Envia para o script dedicado de avaliações
    const payload = {
      userEmail:            ratingData.userEmail,
      userRole:             ratingData.userRole,
      facilidadeUso:        ratingData.facilidadeUso,
      utilidadePedagogica:  ratingData.utilidadePedagogica,
      desempenhoVelocidade: ratingData.desempenhoVelocidade,
      satisfacaoGeral:      ratingData.satisfacaoGeral,
      comentarios:          ratingData.comentarios,
    };

    await fetch(RATING_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });

    console.log('✅ Avaliação enviada para o script dedicado.');
    return true;
  } catch (error) {
    console.error('❌ Erro ao salvar avaliação:', error);
    return false;
  }
};
