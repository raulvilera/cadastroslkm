import { Incident, Student } from '../types';
import { normalizeClassName } from '../utils/formatters';

/**
 * URL do seu Google Apps Script implantado como Web App.
 */
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzDCvttoBq03jYdUL3VEGNBSBfsEs3dbERJ96zjCxXetK7vQriheJOkPStzSRIpptsw/exec';

/**
 * Carrega dados da URL do Apps Script via JSONP.
 * JSONP contorna bloqueio de CORS porque a resposta é carregada
 * como uma tag <script>, não como uma requisição fetch/XHR.
 */
const jsonpRequest = (url: string, timeoutMs = 15000): Promise<any> => {
  return new Promise((resolve, reject) => {
    const callbackName = `__jsonp_cb_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    const script = document.createElement('script');
    let settled = false;

    const cleanup = () => {
      delete (window as any)[callbackName];
      if (script.parentNode) script.parentNode.removeChild(script);
      clearTimeout(timer);
    };

    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error('JSONP: tempo limite excedido ao contatar o Google Apps Script.'));
    }, timeoutMs);

    (window as any)[callbackName] = (data: any) => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(data);
    };

    script.onerror = () => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error('JSONP: falha ao carregar o script do Google Apps Script.'));
    };

    const separator = url.includes('?') ? '&' : '?';
    script.src = `${url}${separator}callback=${callbackName}`;
    document.body.appendChild(script);
  });
};

/**
 * Carrega a lista de alunos da planilha Google Sheets.
 * Aba: BANCODEDADOSGERAL
 */
export const loadStudentsFromSheets = async (): Promise<Student[]> => {
  try {
    const data = await jsonpRequest(`${GOOGLE_SCRIPT_URL}?sheetName=BANCODEDADOSGERAL`);

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
 * Avaliação do App por critérios (1 a 5 estrelas cada).
 * Salva na aba AVALIACOESAPP da mesma planilha.
 */
export interface AppRatingPayload {
  userEmail: string;
  facilidadeUso: number;
  velocidade: number;
  design: number;
  utilidade: number;
  comentario?: string;
}

export const saveAppRatingToSheets = async (rating: AppRatingPayload) => {
  try {
    const now = new Date();
    const dateStr = now.toLocaleDateString('pt-BR');
    const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const media = (
      (rating.facilidadeUso + rating.velocidade + rating.design + rating.utilidade) / 4
    ).toFixed(1);

    const values = [
      dateStr,                                  // 1. Data
      timeStr,                                  // 2. Hora
      rating.userEmail || '---',                // 3. E-mail do professor
      rating.facilidadeUso,                     // 4. Facilidade de Uso
      rating.velocidade,                         // 5. Velocidade
      rating.design,                             // 6. Design
      rating.utilidade,                          // 7. Utilidade no dia a dia
      media,                                     // 8. Média Geral
      (rating.comentario || '').toUpperCase(),  // 9. Comentário
    ];

    const payload = {
      sheetName: 'AVALIACOESAPP',
      values: values,
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
    console.error('Erro ao enviar avaliação do app para o Google Sheets:', error);
    return false;
  }
};
