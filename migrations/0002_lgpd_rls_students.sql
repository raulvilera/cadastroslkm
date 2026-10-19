-- ============================================================
-- 0002 — LGPD: controle de acesso aos dados de alunos (RASCUNHO)
-- NÃO APLICADO. Revise e teste em um projeto de teste antes de rodar em produção.
-- Pré-requisito: função public.is_gestor() e tabela authorized_professors(email, role)
-- já existentes (ver setup_supabase_access.sql).
-- ============================================================

-- 1) Quem é professor autorizado (usa o e-mail do login)
CREATE OR REPLACE FUNCTION public.is_authorized_professor()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.authorized_professors
    WHERE lower(email) = lower(auth.jwt() ->> 'email')
  );
$$;

-- 2) Tabela de alunos: leitura só para autorizados; escrita só para gestor
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Universal students sync" ON public.students;
DROP POLICY IF EXISTS "Allow read access for authenticated users" ON public.students;
DROP POLICY IF EXISTS "Allow write access for managers" ON public.students;
DROP POLICY IF EXISTS "Allow write access for all authorized users" ON public.students;
DROP POLICY IF EXISTS "Managers can manage students" ON public.students;

CREATE POLICY "students_select_authorized"
  ON public.students FOR SELECT
  TO authenticated
  USING (public.is_authorized_professor());

CREATE POLICY "students_write_gestor"
  ON public.students FOR ALL
  TO authenticated
  USING (public.is_gestor())
  WITH CHECK (public.is_gestor());

-- 3) Lista de autorizados: cada usuário vê só a própria linha; gestor vê e gerencia tudo
ALTER TABLE public.authorized_professors ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "authorized_self_read" ON public.authorized_professors;
DROP POLICY IF EXISTS "authorized_gestor_manage" ON public.authorized_professors;

CREATE POLICY "authorized_self_read"
  ON public.authorized_professors FOR SELECT
  TO authenticated
  USING (lower(email) = lower(auth.jwt() ->> 'email'));

CREATE POLICY "authorized_gestor_manage"
  ON public.authorized_professors FOR ALL
  TO authenticated
  USING (public.is_gestor())
  WITH CHECK (public.is_gestor());

-- 4) PENDENTE — tabela incidents:
-- Antes de ativar RLS em incidents, confirme as colunas que identificam o professor
-- (ex.: professor_email) e escreva a regra: gestor vê tudo; professor vê e cria só as próprias ocorrências.
-- Sem essa regra, o cadastro de ocorrências pelos professores deixa de funcionar.
