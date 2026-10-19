import { supabase } from './supabaseClient';

// A chave do Gemini fica no servidor (/api/gemini). O navegador envia só o texto
// e o token de login.
export async function analyzeIncident(description: string) {
  try {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return null;

    const res = await fetch('/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ description }),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error('Erro ao analisar com Gemini:', error);
    return null;
  }
}
