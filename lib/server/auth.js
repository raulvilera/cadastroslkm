// Valida o JWT do Supabase enviado pelo navegador e confere se o e-mail
// está em authorized_professors. Roda somente no servidor (Vercel).
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const ANON_KEY = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function getAuthorizedEmail(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token || !SUPABASE_URL || !ANON_KEY) return null;

  const userRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: ANON_KEY, Authorization: `Bearer ${token}` },
  });
  if (!userRes.ok) return null;
  const user = await userRes.json();
  const email = (user.email || '').toLowerCase();
  if (!email || !SERVICE_KEY) return null;

  const listRes = await fetch(
    `${SUPABASE_URL}/rest/v1/authorized_professors?select=email&email=eq.${encodeURIComponent(email)}`,
    { headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}` } }
  );
  if (!listRes.ok) return null;
  const rows = await listRes.json();
  return rows.length > 0 ? email : null;
}
