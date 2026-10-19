import { getAuthorizedEmail } from '../lib/server/auth.js';

const GEMINI_KEY = process.env.GEMINI_API_KEY;
const MODEL = 'gemini-3-flash-preview';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }
  const email = await getAuthorizedEmail(req);
  if (!email) {
    return res.status(401).json({ error: 'Não autorizado.' });
  }
  if (!GEMINI_KEY) {
    return res.status(503).json({ error: 'IA não configurada.' });
  }

  const description = typeof req.body?.description === 'string' ? req.body.description : '';
  if (!description || description.length > 4000) {
    return res.status(400).json({ error: 'Descrição inválida.' });
  }

  try {
    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': GEMINI_KEY },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Analise a seguinte ocorrência escolar e forneça uma classificação de gravidade (Baixa, Média, Alta, Crítica) e uma breve sugestão de conduta: "${description}"`,
            }],
          }],
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: 'OBJECT',
              properties: {
                severity: { type: 'STRING', description: 'A gravidade calculada (Baixa, Média, Alta ou Crítica)' },
                recommendation: { type: 'STRING', description: 'Uma breve sugestão de como proceder' },
              },
              required: ['severity', 'recommendation'],
            },
          },
        }),
      }
    );
    if (!upstream.ok) return res.status(502).json({ error: 'Falha na IA.' });
    const data = await upstream.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return res.status(200).json(text ? JSON.parse(text) : null);
  } catch (err) {
    console.error('Erro no proxy do Gemini:', err);
    return res.status(502).json({ error: 'Falha na IA.' });
  }
}
