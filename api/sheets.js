import { getAuthorizedEmail } from '../lib/server/auth.js';

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;
const PROXY_SECRET = process.env.SHEETS_PROXY_SECRET;

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método não permitido.' });
  }
  if (!APPS_SCRIPT_URL || !PROXY_SECRET) {
    return res.status(500).json({ success: false, error: 'Proxy não configurado.' });
  }

  const email = await getAuthorizedEmail(req);
  if (!email) {
    return res.status(401).json({ success: false, error: 'Não autorizado.' });
  }

  try {
    let upstream;
    if (req.method === 'GET') {
      const url = new URL(APPS_SCRIPT_URL);
      for (const [key, value] of Object.entries(req.query || {})) {
        if (key === 'callback' || key === 'jsonp' || key === 'secret') continue;
        url.searchParams.set(key, String(value));
      }
      url.searchParams.set('secret', PROXY_SECRET);
      upstream = await fetch(url, { redirect: 'follow' });
    } else {
      const payload = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
      payload.secret = PROXY_SECRET;
      upstream = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        redirect: 'follow',
      });
    }

    const text = await upstream.text();
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(upstream.ok ? 200 : 502).send(text);
  } catch (err) {
    console.error('Erro no proxy do Sheets:', err);
    return res.status(502).json({ success: false, error: 'Falha ao contatar a planilha.' });
  }
}
