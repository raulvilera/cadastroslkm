/**
 * ============================================================
 *  Google Apps Script — AVALIAÇÕES DA PLATAFORMA LKM
 *  Portal Lydia Kitz Moreira — Script Dedicado de Avaliações
 *  Versão: 1.0
 * ============================================================
 *
 *  FINALIDADE:
 *    Receber e registrar as avaliações dos usuários (gestores
 *    e professores) na aba "AVALIAÇÃO DOS USUÁRIOS" da planilha.
 *
 *  CRITÉRIOS COLETADOS:
 *    1. Facilidade de Uso (Usabilidade) ................. 1 a 5 ⭐
 *    2. Utilidade Pedagógica ............................ 1 a 5 ⭐
 *    3. Desempenho e Velocidade ......................... 1 a 5 ⭐
 *    4. Satisfação Geral ................................ 1 a 5 ⭐
 *    5. Comentários / Sugestões ......................... Texto livre
 *
 *  ENDPOINTS:
 *    POST → Registra nova avaliação
 *    GET  → Retorna resumo estatístico das avaliações
 *
 *  INSTRUÇÕES DE DEPLOY:
 *    1. Acesse: https://script.google.com
 *    2. Crie um NOVO projeto (separado do script principal)
 *    3. Cole TODO este código
 *    4. Clique em "Implantar" → "Nova implantação"
 *    5. Tipo: "App da Web"
 *    6. Executar como: "Eu mesmo"
 *    7. Acesso: "Qualquer pessoa" (sem autenticação)
 *    8. Clique em "Implantar" e copie a URL gerada
 *    9. Cole a URL no arquivo sheetsService.ts (variável RATING_SCRIPT_URL)
 * ============================================================
 */

// ─── CONFIGURAÇÃO ────────────────────────────────────────────
// ID da sua planilha Google Sheets (mesmo ID do script principal)
var SPREADSHEET_ID = '1u7qMsMHkZT47OZdar5qvshQDRA8XJrLgDjAZVOViAio';

// Nome exato da aba onde as avaliações serão registradas
var SHEET_NAME = 'AVALIAÇÃO DOS USUÁRIOS';

// Cabeçalhos das colunas
var HEADERS = [
  'Data/Hora',
  'E-mail do Usuário',
  'Perfil (Cargo)',
  'Facilidade de Uso ⭐',
  'Utilidade Pedagógica ⭐',
  'Desempenho e Velocidade ⭐',
  'Satisfação Geral ⭐',
  'Média Geral ⭐',
  'Comentários / Sugestões'
];


// ─── CORS: CABEÇALHOS DE RESPOSTA ────────────────────────────
/**
 * Retorna uma resposta JSON com cabeçalhos CORS.
 */
function jsonResponse(data, statusCode) {
  var output = ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}


// ─── CONFIGURAR ABA ──────────────────────────────────────────
/**
 * Garante que a aba existe e tem o cabeçalho correto.
 * Se não existir, cria com cabeçalhos formatados.
 */
function getOrCreateSheet() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);

    // Inserir cabeçalho na linha 1
    sheet.appendRow(HEADERS);

    // Formatar cabeçalho: negrito, cor de fundo azul escuro, texto branco
    var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#002b5c');
    headerRange.setFontColor('#ffffff');
    headerRange.setHorizontalAlignment('center');
    headerRange.setFontSize(10);

    // Congelar linha de cabeçalho
    sheet.setFrozenRows(1);

    // Ajustar larguras das colunas
    sheet.setColumnWidth(1, 160);  // Data/Hora
    sheet.setColumnWidth(2, 230);  // E-mail
    sheet.setColumnWidth(3, 120);  // Perfil
    sheet.setColumnWidth(4, 160);  // Facilidade de Uso
    sheet.setColumnWidth(5, 180);  // Utilidade Pedagógica
    sheet.setColumnWidth(6, 200);  // Desempenho e Velocidade
    sheet.setColumnWidth(7, 160);  // Satisfação Geral
    sheet.setColumnWidth(8, 130);  // Média Geral
    sheet.setColumnWidth(9, 320);  // Comentários
  }

  return sheet;
}


// ─── POST: REGISTRAR AVALIAÇÃO ───────────────────────────────
/**
 * Recebe avaliação via POST e registra na planilha.
 *
 * Payload esperado (JSON):
 * {
 *   "userEmail": "professor@escola.com",
 *   "userRole": "professor",
 *   "facilidadeUso": 5,
 *   "utilidadePedagogica": 4,
 *   "desempenhoVelocidade": 5,
 *   "satisfacaoGeral": 5,
 *   "comentarios": "Plataforma excelente!"
 * }
 */
function doPost(e) {
  try {
    // Parsear body
    var payload;
    try {
      var body = e.postData ? e.postData.contents : '';
      payload = JSON.parse(body);
    } catch (parseErr) {
      return jsonResponse({ success: false, error: 'JSON inválido: ' + parseErr.toString() });
    }

    // Validar campos obrigatórios
    var required = ['userEmail', 'userRole', 'facilidadeUso', 'utilidadePedagogica', 'desempenhoVelocidade', 'satisfacaoGeral'];
    for (var i = 0; i < required.length; i++) {
      if (payload[required[i]] === undefined || payload[required[i]] === null) {
        return jsonResponse({ success: false, error: 'Campo obrigatório ausente: ' + required[i] });
      }
    }

    // Validar notas (devem ser entre 1 e 5)
    var notas = [payload.facilidadeUso, payload.utilidadePedagogica, payload.desempenhoVelocidade, payload.satisfacaoGeral];
    for (var j = 0; j < notas.length; j++) {
      var nota = Number(notas[j]);
      if (isNaN(nota) || nota < 1 || nota > 5) {
        return jsonResponse({ success: false, error: 'Notas devem ser inteiros entre 1 e 5.' });
      }
    }

    // Calcular média geral (com 1 casa decimal)
    var mediaGeral = (
      Number(payload.facilidadeUso) +
      Number(payload.utilidadePedagogica) +
      Number(payload.desempenhoVelocidade) +
      Number(payload.satisfacaoGeral)
    ) / 4;
    var mediaArredondada = Math.round(mediaGeral * 10) / 10;

    // Formatar data/hora no padrão brasileiro
    var agora = new Date();
    var dataHora = Utilities.formatDate(agora, 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm:ss');

    // Formatar perfil em português
    var perfilFormatado = payload.userRole === 'gestor' ? 'GESTÃO' : 'PROFESSOR(A)';

    // Formatar comentários
    var comentarios = (payload.comentarios || '').toString().trim().toUpperCase() || 'SEM COMENTÁRIOS';

    // Representar notas com estrelas
    function estrelas(nota) {
      var n = Number(nota);
      var s = '';
      for (var k = 0; k < 5; k++) { s += k < n ? '★' : '☆'; }
      return s + ' (' + n + '/5)';
    }

    // Montar linha de dados
    var linha = [
      dataHora,
      payload.userEmail.toLowerCase().trim(),
      perfilFormatado,
      estrelas(payload.facilidadeUso),
      estrelas(payload.utilidadePedagogica),
      estrelas(payload.desempenhoVelocidade),
      estrelas(payload.satisfacaoGeral),
      mediaArredondada + '/5',
      comentarios
    ];

    // Obter ou criar aba e inserir linha
    var sheet = getOrCreateSheet();
    sheet.appendRow(linha);

    // Formatar a nova linha inserida
    var lastRow = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRow, 1, 1, HEADERS.length);
    rowRange.setHorizontalAlignment('center');

    // Coluna de comentários alinha à esquerda
    sheet.getRange(lastRow, 9).setHorizontalAlignment('left');

    // Cor de fundo alternada por linha (zebra)
    if (lastRow % 2 === 0) {
      rowRange.setBackground('#eaf4fb');
    } else {
      rowRange.setBackground('#ffffff');
    }

    // Destacar média em vermelho se < 3, amarelo se < 4, verde se >= 4
    var mediaCell = sheet.getRange(lastRow, 8);
    if (mediaArredondada >= 4) {
      mediaCell.setBackground('#d4edda').setFontColor('#155724').setFontWeight('bold');
    } else if (mediaArredondada >= 3) {
      mediaCell.setBackground('#fff3cd').setFontColor('#856404').setFontWeight('bold');
    } else {
      mediaCell.setBackground('#f8d7da').setFontColor('#721c24').setFontWeight('bold');
    }

    return jsonResponse({
      success: true,
      message: 'Avaliação registrada com sucesso!',
      media: mediaArredondada,
      linha: lastRow
    });

  } catch (err) {
    return jsonResponse({
      success: false,
      error: 'Erro interno no doPost: ' + err.toString()
    });
  }
}


// ─── GET: RESUMO ESTATÍSTICO ──────────────────────────────────
/**
 * Retorna um resumo das avaliações:
 * - Total de avaliações
 * - Média por critério
 * - Média geral global
 * - Última avaliação registrada
 *
 * Acesso: GET https://<URL_DO_SCRIPT>
 */
function doGet(e) {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet || sheet.getLastRow() <= 1) {
      return jsonResponse({
        success: true,
        totalAvaliacoes: 0,
        medias: {
          facilidadeUso: 0,
          utilidadePedagogica: 0,
          desempenhoVelocidade: 0,
          satisfacaoGeral: 0,
          global: 0
        },
        ultimaAvaliacao: null,
        mensagem: 'Nenhuma avaliação registrada ainda.'
      });
    }

    // Ler todos os dados (pular cabeçalho na linha 1)
    var dados = sheet.getDataRange().getValues();
    var totalLinhas = dados.length - 1; // descontar cabeçalho

    // Função auxiliar para extrair nota numérica do formato "★★★★☆ (4/5)"
    function extrairNota(celula) {
      var str = celula.toString();
      var match = str.match(/\((\d)\/5\)/);
      return match ? parseInt(match[1]) : 0;
    }

    var somaFacilidade = 0;
    var somaUtilidade = 0;
    var somaDesempenho = 0;
    var somaSatisfacao = 0;
    var contagem = 0;

    for (var i = 1; i < dados.length; i++) {
      var row = dados[i];
      var f = extrairNota(row[3]);
      var u = extrairNota(row[4]);
      var d = extrairNota(row[5]);
      var s = extrairNota(row[6]);
      if (f > 0 && u > 0 && d > 0 && s > 0) {
        somaFacilidade += f;
        somaUtilidade += u;
        somaDesempenho += d;
        somaSatisfacao += s;
        contagem++;
      }
    }

    var mediaFacilidade   = contagem > 0 ? Math.round((somaFacilidade / contagem) * 10) / 10 : 0;
    var mediaUtilidade    = contagem > 0 ? Math.round((somaUtilidade / contagem) * 10) / 10 : 0;
    var mediaDesempenho   = contagem > 0 ? Math.round((somaDesempenho / contagem) * 10) / 10 : 0;
    var mediaSatisfacao   = contagem > 0 ? Math.round((somaSatisfacao / contagem) * 10) / 10 : 0;
    var mediaGlobal       = contagem > 0 ? Math.round(((somaFacilidade + somaUtilidade + somaDesempenho + somaSatisfacao) / (contagem * 4)) * 10) / 10 : 0;

    // Última avaliação (última linha)
    var ultimaLinha = dados[dados.length - 1];
    var ultimaAvaliacao = {
      dataHora:  ultimaLinha[0].toString(),
      usuario:   ultimaLinha[1].toString(),
      perfil:    ultimaLinha[2].toString(),
      media:     ultimaLinha[7].toString(),
      comentario: ultimaLinha[8].toString()
    };

    return jsonResponse({
      success: true,
      totalAvaliacoes: totalLinhas,
      medias: {
        facilidadeUso:       mediaFacilidade,
        utilidadePedagogica: mediaUtilidade,
        desempenhoVelocidade: mediaDesempenho,
        satisfacaoGeral:     mediaSatisfacao,
        global:              mediaGlobal
      },
      ultimaAvaliacao: ultimaAvaliacao
    });

  } catch (err) {
    return jsonResponse({
      success: false,
      error: 'Erro interno no doGet: ' + err.toString()
    });
  }
}
