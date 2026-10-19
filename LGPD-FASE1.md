# LGPD — Fase 1 (mudanças técnicas)

## O que mudou
- **Chave do Gemini** saiu do bundle (`vite.config.ts`). A chamada agora passa por `api/gemini.js`, que exige login autorizado.
- **Planilha/Apps Script**: o navegador não fala mais com o Apps Script. Tudo passa por `api/sheets.js`, que valida o login e a lista `authorized_professors`, e então chama o Apps Script com um segredo (`SHEETS_PROXY_SECRET`). O Apps Script recusa chamadas sem esse segredo.
- **Dados de alunos** removidos do código (`studentsData.ts` agora é vazio) e dos arquivos do repositório (`students_*.json`, `sql_chunk_*.sql`).
- **Rewrite do Vercel** não captura mais `/api/*`.

## Configurar no Vercel (Environment Variables)
| Variável | Onde é usada |
|---|---|
| `GEMINI_API_KEY` | `api/gemini.js` (servidor) |
| `SUPABASE_URL` | `lib/server/auth.js` (servidor) |
| `SUPABASE_SERVICE_ROLE_KEY` | `lib/server/auth.js` (servidor) — **nunca** com `VITE_` |
| `APPS_SCRIPT_URL` | `api/sheets.js` (servidor) |
| `SHEETS_PROXY_SECRET` | `api/sheets.js` e Apps Script (mesmo valor) |

## Configurar no Apps Script
1. Cole o `google-apps-script.js` atualizado e publique uma **nova versão** da implantação.
2. Em **Configurações do projeto → Propriedades do script**, crie `PROXY_SECRET` com o mesmo valor de `SHEETS_PROXY_SECRET`.

## Pendências (não são código)
- Aplicar `migrations/0002_lgpd_rls_students.sql` em um projeto de teste e validar com contas de duas escolas/perfis.
- Regra de RLS para `incidents` (ver item 4 da migração).
- Contrato de tratamento de dados com a escola, base legal (art. 14 para menores), encarregado (DPO), relatório de impacto e plano de resposta a incidentes.
- Revogar e rotacionar a chave do Gemini que já esteve no bundle e no repositório.
- Se o repositório já foi público, avaliar o histórico do git (`git filter-repo`).
