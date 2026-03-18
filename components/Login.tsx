import React, { useState, useEffect, useMemo } from 'react';
import { User } from '../types';
import { supabase } from '../services/supabaseClient';
import { PROFESSORS_DB, isProfessorRegistered, getProfessorNameFromEmail, getRoleFromLocalDB, EXCLUSIVE_MANAGEMENT_EMAILS } from '../professorsData';

// ✅ LISTA HARDCODED — independente de qualquer import externo.
// Garante que mesmo se professorsData.ts tiver problema no build,
// esses e-mails SEMPRE entram como gestor.
const GESTAO_EMAILS_HARDCODED = [
  'cadastroslkm@gmail.com',
  'erineidearagao@prof.educacao.sp.gov.br',
  'patriciag@prof.educacao.sp.gov.br',
  'regianecurti@prof.educacao.sp.gov.br',
  'michellemoraes@prof.educacao.sp.gov.br',
  'vilera@prof.educacao.sp.gov.br',
  'deizylaura@prof.educacao.sp.gov.br',
  'aline.gestao@prof.educacao.sp.gov.br',
  'gestao@escola.com',
  'anaosouza@prof.educacao.sp.gov.br',
];

interface LoginProps {
  onLogin: (user: User) => void;
}

type AuthMode = 'login' | 'register' | 'forgot' | 'admin_register';

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // ── Estados do cadastro pela gestão ──────────────────────────────────────
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminStep, setAdminStep] = useState<'auth' | 'form'>('auth');
  const [newProfEmail, setNewProfEmail] = useState('');
  const [newProfNome, setNewProfNome] = useState('');
  const [tempPassword, setTempPassword] = useState('');

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Gera senha temporária aleatória de 8 caracteres
  const generateTempPassword = () => {
    const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  // Mapeamento de aliases de e-mail para contas reais
  const EMAIL_ALIASES: Record<string, string> = {
    'alinecardoso1@prof.educacao.sp.gov.br': 'aline.gestao@prof.educacao.sp.gov.br',
    'alinecardoso1@professor.educacao.sp.gov.br': 'aline.gestao@prof.educacao.sp.gov.br'
  };

  const resolveEmailAlias = (email: string): string => {
    const lowerEmail = email.toLowerCase().trim();
    return EMAIL_ALIASES[lowerEmail] || lowerEmail;
  };

  const validateInstitutionalEmail = (email: string) => {
    const lowerEmail = email.toLowerCase().trim();
    const SPECIAL_MANAGEMENT = ['gestao@escola.com', 'cadastroslkm@gmail.com'];
    if (SPECIAL_MANAGEMENT.includes(lowerEmail)) return true;
    return lowerEmail.endsWith('@prof.educacao.sp.gov.br') ||
      lowerEmail.endsWith('@professor.educacao.sp.gov.br');
  };

  const registeredName = useMemo(() => {
    if (authMode === 'register' && email.includes('@')) {
      return getProfessorNameFromEmail(email);
    }
    return '';
  }, [email, authMode]);

  const resetAdminForm = () => {
    setAdminEmail('');
    setAdminPassword('');
    setAdminStep('auth');
    setNewProfEmail('');
    setNewProfNome('');
    setTempPassword('');
    setError('');
    setMessage('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);

    const loginTimeout = setTimeout(() => {
      setIsLoading(false);
      setError('TEMPO LIMITE EXCEDIDO. VERIFIQUE SUA CONEXÃO OU TENTE NOVAMENTE.');
    }, 15000);

    try {
      const lowerEmail = email.toLowerCase().trim();
      const displayEmail = lowerEmail;
      const authEmail = resolveEmailAlias(lowerEmail);

      console.log('🔐 [LOGIN] Tentando login com:', displayEmail);
      if (displayEmail !== authEmail) {
        console.log('🔄 [LOGIN] Usando alias: ' + displayEmail + ' → ' + authEmail);
      }

      if (!validateInstitutionalEmail(lowerEmail)) {
        throw new Error('ACESSO NEGADO: UTILIZE SEU E-MAIL INSTITUCIONAL (@PROF).');
      }

      console.log('✅ [LOGIN] E-mail validado como institucional');
      console.log('🔗 [LOGIN] Conectando ao Supabase Auth...');

      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: authEmail,
        password
      });

      if (authError) {
        console.error('❌ [LOGIN] Erro de autenticação Supabase:', authError);
        if (authError.message.includes('Invalid login credentials')) {
          throw new Error('CREDENCIAIS INVÁLIDAS. VERIFIQUE SEUS DADOS OU SE JÁ CONFIRMOU SEU E-MAIL NO LINK ENVIADO.');
        }
        throw new Error(authError.message.toUpperCase());
      }

      if (data.user) {
        console.log('✅ [LOGIN] Autenticado! Buscando autorização para:', displayEmail);

        const fetchRoleWithTimeout = async () => {
          const query = supabase
            .from('authorized_professors')
            .select('role')
            .eq('email', displayEmail)
            .eq('escola', 'lkm')
            .maybeSingle();

          const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('TIMEOUT_DB')), 4000)
          );

          try {
            const result: any = await Promise.race([query, timeoutPromise]);
            return result.data?.role || null;
          } catch (e) {
            console.warn('⚠️ [LOGIN] Consulta ao banco falhou ou deu timeout, usando fallback local.');
            return null;
          }
        };

        let userRole: 'gestor' | 'professor' | null = null;

        if (GESTAO_EMAILS_HARDCODED.includes(displayEmail)) {
          userRole = 'gestor';
          console.log('✅ [LOGIN] Gestor identificado via lista hardcoded:', displayEmail);
        }

        // Só consulta o banco se ainda não definiu como gestor hardcoded
        if (!userRole) {
          const dbRole = await fetchRoleWithTimeout();
          if (dbRole) {
            userRole = dbRole as any;
            console.log('✅ [LOGIN] Role do banco:', userRole);
          }
        }

        if (!userRole) {
          userRole = getRoleFromLocalDB(displayEmail);
          console.log('🔍 [LOGIN] Role da lista local (fallback):', userRole, '| email:', displayEmail);
        }

        if (userRole) {
          console.log('🚀 [LOGIN] Entrando com role:', userRole);
          onLogin({ email: displayEmail, role: userRole });
        } else {
          console.error('❌ [LOGIN] Acesso negado para:', displayEmail);
          await supabase.auth.signOut();
          throw new Error('ACESSO NEGADO: SEU E-MAIL NÃO CONSTA NA LISTA DE AUTORIZADOS.');
        }
      }

    } catch (err: any) {
      clearTimeout(loginTimeout);
      console.error('❌ [LOGIN] Erro capturado:', err);
      const message = err.message === 'TIMEOUT_DB'
        ? 'A CONEXÃO COM O BANCO ESTÁ LENTA. TENTE NOVAMENTE EM ALGUNS INSTANTES.'
        : (err.message.toUpperCase() || 'ERRO DESCONHECIDO AO TENTAR ENTRAR.');
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);

    try {
      const lowerEmail = email.toLowerCase().trim();

      if (!validateInstitutionalEmail(lowerEmail)) {
        throw new Error('APENAS E-MAILS INSTITUCIONAIS (@PROF) SÃO PERMITIDOS.');
      }

      if (password !== confirmPassword) {
        throw new Error('AS SENHAS NÃO CONFEREM.');
      }

      if (password.length < 6) {
        throw new Error('A SENHA DEVE TER NO MÍNIMO 6 CARACTERES.');
      }

      const { data, error: signUpError } = await supabase.auth.signUp({
        email: lowerEmail,
        password,
      });

      if (signUpError) {
        if (signUpError.message.includes('User already registered')) {
          throw new Error('ESTE E-MAIL JÁ POSSUI CADASTRO NO SISTEMA.');
        }
        throw signUpError;
      }

      if (data.user) {
        const emailBase = lowerEmail.split('@')[0];
        const isInstitutionalReg = lowerEmail.endsWith('@prof.educacao.sp.gov.br') ||
          lowerEmail.endsWith('@professor.educacao.sp.gov.br');
        const orFilterReg = isInstitutionalReg
          ? `email.eq.${lowerEmail},email.eq.${emailBase}@prof.educacao.sp.gov.br,email.eq.${emailBase}@professor.educacao.sp.gov.br`
          : `email.eq.${lowerEmail}`;
        const { data: authData } = await supabase
          .from('authorized_professors')
          .select('role')
          .or(orFilterReg)
          .eq('escola', 'lkm')
          .maybeSingle();

        let userRole: 'gestor' | 'professor' | null = null;
        if (authData) {
          userRole = authData.role as 'gestor' | 'professor';
        } else {
          userRole = getRoleFromLocalDB(lowerEmail);
        }

        if (!userRole) {
          console.error('❌ [CADASTRO] E-mail não autorizado:', lowerEmail);
          await supabase.auth.signOut();
          throw new Error('ACESSO NEGADO: SEU E-MAIL NÃO ESTÁ AUTORIZADO. CONTATE A GESTÃO.');
        }

        if (!data.session) {
          console.warn('⚠️ [CADASTRO] Supabase com confirmação de e-mail ATIVADA. Sessão não criada.');
          setMessage('CADASTRO REALIZADO! VERIFIQUE SEU E-MAIL E CLIQUE NO LINK DE CONFIRMAÇÃO PARA ATIVAR SUA CONTA.');
          return;
        }

        console.log('✅ [CADASTRO] Usuário criado e autenticado automaticamente. Role:', userRole);
        setMessage('CADASTRO REALIZADO! ENTRANDO NO SISTEMA...');
        setTimeout(() => onLogin({ email: data.user!.email!, role: userRole! }), 1000);
      }

    } catch (err: any) {
      setError(err.message.toUpperCase());
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);

    try {
      const lowerEmail = email.toLowerCase().trim();
      const authEmail = resolveEmailAlias(lowerEmail);

      if (!validateInstitutionalEmail(lowerEmail)) {
        throw new Error('E-MAIL INVÁLIDO OU NÃO INSTITUCIONAL.');
      }

      if (!isProfessorRegistered(lowerEmail)) {
        const emailBase = lowerEmail.split('@')[0];
        const { data: authorized } = await supabase
          .from('authorized_professors')
          .select('email')
          .or(`email.eq.${emailBase}@prof.educacao.sp.gov.br,email.eq.${emailBase}@professor.educacao.sp.gov.br`)
          .maybeSingle();

        if (!authorized) {
          throw new Error('E-MAIL NÃO CADASTRADO NO SISTEMA. CONTATE A GESTÃO.');
        }
      }

      console.log('🔄 [RESET] Enviando redefinição de senha para:', authEmail);
      if (lowerEmail !== authEmail) {
        console.log('📧 [RESET] Alias detectado: ' + lowerEmail + ' → ' + authEmail);
      }

      const { error: resetError } = await supabase.auth.resetPasswordForEmail(authEmail, {
        redirectTo: `https://cadastroslkm.vercel.app/`,
      });

      if (resetError) {
        console.error('❌ [RESET] Erro ao enviar e-mail:', resetError);
        if (resetError.message.includes('450') || resetError.message.includes('testing emails')) {
          throw new Error('O SERVIÇO DE E-MAIL ESTÁ EM MODO DE TESTE. O DOMÍNIO PRECISA SER VERIFICADO NO RESEND.');
        }
        throw new Error('ERRO AO PROCESSAR SOLICITAÇÃO. VERIFIQUE A CONFIGURAÇÃO SMTP NO SUPABASE OU TENTE NOVAMENTE.');
      }

      setMessage('SE O E-MAIL EXISTIR NO SISTEMA, VOCÊ RECEBERÁ AS INSTRUÇÕES EM BREVE.');
      console.log('✅ [RESET] Solicitação processada para:', lowerEmail);

    } catch (err: any) {
      setError(err.message.toUpperCase());
    } finally {
      setIsLoading(false);
    }
  };

  // ── PASSO 1: Gestor autentica antes de cadastrar ──────────────────────────
  const handleAdminAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const lowerEmail = adminEmail.toLowerCase().trim();

      if (!GESTAO_EMAILS_HARDCODED.includes(lowerEmail)) {
        throw new Error('APENAS GESTORES PODEM USAR ESTA FUNÇÃO.');
      }

      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: resolveEmailAlias(lowerEmail),
        password: adminPassword,
      });

      if (authError || !data.user) {
        throw new Error('CREDENCIAIS INVÁLIDAS. CONFIRME SEU E-MAIL E SENHA DE GESTOR.');
      }

      await supabase.auth.signOut();

      const generated = generateTempPassword();
      setTempPassword(generated);
      setAdminStep('form');
      setError('');

    } catch (err: any) {
      setError(err.message.toUpperCase());
    } finally {
      setIsLoading(false);
    }
  };

  // ── PASSO 2: Cadastrar o professor com senha temporária ───────────────────
  const handleAdminRegisterProfessor = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);

    try {
      const lowerEmail = newProfEmail.toLowerCase().trim();
      const nome = newProfNome.toUpperCase().trim();

      if (!lowerEmail || !nome) {
        throw new Error('PREENCHA O E-MAIL E O NOME DO PROFESSOR.');
      }

      if (!validateInstitutionalEmail(lowerEmail)) {
        throw new Error('UTILIZE UM E-MAIL INSTITUCIONAL (@PROF OU @PROFESSOR).');
      }

      if (!tempPassword || tempPassword.length < 6) {
        throw new Error('ERRO NA GERAÇÃO DA SENHA. VOLTE E TENTE NOVAMENTE.');
      }

      // 1. Criar conta no Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: lowerEmail,
        password: tempPassword,
      });

      if (signUpError) {
        if (signUpError.message.includes('User already registered')) {
          throw new Error('ESTE E-MAIL JÁ POSSUI CADASTRO NO SISTEMA.');
        }
        throw new Error(signUpError.message.toUpperCase());
      }

      // 2. Garantir que está na tabela authorized_professors
      await supabase.from('authorized_professors').upsert([
        { email: lowerEmail, nome, escola: 'lkm', role: 'professor' }
      ], { onConflict: 'email' });

      // 3. Enviar link de redefinição para o e-mail do professor
      await supabase.auth.resetPasswordForEmail(lowerEmail, {
        redirectTo: `https://cadastroslkm.vercel.app/`,
      });

      setMessage(
        `✅ CONTA CRIADA!\n\nPROFESSOR: ${nome}\nE-MAIL: ${lowerEmail}\nSENHA TEMPORÁRIA: ${tempPassword}\n\nAnote e repasse ao professor.\nUm link de redefinição foi enviado ao e-mail dele.`
      );

      setNewProfEmail('');
      setNewProfNome('');
      setTempPassword(generateTempPassword());

    } catch (err: any) {
      setError(err.message.toUpperCase());
    } finally {
      setIsLoading(false);
    }
  };

  const LOGO_LKM_CIRCULAR = "/logo.png";

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#000d1a] p-4 font-sans relative overflow-hidden fixed inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#000d1a] via-[#001a35] to-[#002b5c] opacity-100"></div>

      <div className="w-full max-w-[440px] bg-white rounded-[60px] shadow-[0_40px_80px_rgba(0,0,0,0.7)] flex flex-col items-center z-10 relative py-10 px-10 border border-white/10 animate-fade-in overflow-y-auto max-h-[95vh] custom-scrollbar">

        <div className="mb-4 mt-2 relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
          <img src={LOGO_LKM_CIRCULAR} alt="LKM Logo" className="w-20 h-20 object-contain relative z-10 drop-shadow-2xl" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-[#002b5c] text-lg font-black uppercase tracking-tight">
            {authMode === 'login' ? 'PORTAL LYDIA KITZ' :
             authMode === 'register' ? 'CRIAR NOVA CONTA' :
             authMode === 'forgot' ? 'RECUPERAR ACESSO' :
             'CADASTRO PELA GESTÃO'}
          </h1>
          <div className="h-1.5 w-10 bg-teal-500 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-400 text-[8px] font-black uppercase tracking-[0.4em] mt-3">
            SISTEMA DE GESTÃO 2026
          </p>
        </div>

        {/* ── LOGIN ──────────────────────────────────────────────────────── */}
        {authMode === 'login' && (
          <form onSubmit={handleLogin} className="w-full space-y-4 flex flex-col items-center animate-fade-in">
            <div className="space-y-1 w-full text-left">
              <label className="text-[9px] font-black text-[#002b5c] uppercase ml-6 tracking-widest opacity-70">E-mail Institucional</label>
              <input
                required type="email" placeholder="nome@prof.educacao.sp.gov.br"
                value={email} onChange={e => setEmail(e.target.value)}
                className="w-full h-12 px-6 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#002b5c] outline-none focus:ring-2 focus:ring-teal-500 transition-all lowercase"
              />
            </div>

            <div className="space-y-1 w-full text-left">
              <div className="flex justify-between items-center px-6">
                <label className="text-[9px] font-black text-[#002b5c] uppercase tracking-widest opacity-70">Senha</label>
                <button type="button" onClick={() => setAuthMode('forgot')} className="text-[8px] font-black text-teal-600 uppercase hover:underline">Esqueci a senha</button>
              </div>
              <input
                required type="password" placeholder="••••••••"
                value={password} onChange={e => setPassword(e.target.value)}
                className="w-full h-12 px-6 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#002b5c] outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </div>

            {error && <div className="p-3 w-full bg-red-50 text-red-600 rounded-[24px] text-[8.5px] font-black text-center uppercase border border-red-100 animate-shake leading-tight">{error}</div>}
            {message && <div className="p-3 w-full bg-teal-50 text-teal-600 rounded-[24px] text-[8.5px] font-black text-center uppercase border border-teal-100 leading-tight">{message}</div>}

            <button type="submit" disabled={isLoading}
              className="w-full h-14 bg-gradient-to-r from-blue-400 to-blue-900 hover:scale-[1.02] text-white rounded-full font-black text-[10px] uppercase tracking-[0.25em] shadow-xl transition-all active:scale-95 disabled:opacity-50 mt-4">
              {isLoading ? 'VERIFICANDO...' : 'ENTRAR NO PORTAL'}
            </button>

            <button type="button" onClick={() => { setAuthMode('register'); setError(''); setMessage(''); }}
              className="mt-4 text-[9px] font-black text-gray-400 uppercase tracking-widest hover:text-[#002b5c] transition-colors">
              Primeiro acesso? <span className="text-teal-600">Cadastre-se aqui</span>
            </button>

            {/* Botão discreto — visível apenas para gestores que sabem que existe */}
            <button type="button" onClick={() => { resetAdminForm(); setAuthMode('admin_register'); }}
              className="mt-1 text-[8px] font-bold text-gray-300 uppercase tracking-widest hover:text-teal-500 transition-colors">
              🔑 Cadastro pela gestão
            </button>
          </form>
        )}

        {/* ── AUTOCADASTRO DO PROFESSOR ──────────────────────────────────── */}
        {authMode === 'register' && (
          <form onSubmit={handleRegister} className="w-full space-y-3 flex flex-col items-center animate-fade-in">
            <div className="space-y-1 w-full text-left">
              <label className="text-[9px] font-black text-[#002b5c] uppercase ml-6 tracking-widest opacity-70">E-mail Institucional</label>
              <input required type="email" placeholder="nome@prof.educacao.sp.gov.br" value={email} onChange={e => setEmail(e.target.value)} className="w-full h-11 px-6 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#002b5c] outline-none focus:ring-2 focus:ring-teal-500 transition-all lowercase" />
            </div>
            <div className="space-y-1 w-full text-left">
              <label className="text-[9px] font-black text-[#002b5c] uppercase ml-6 tracking-widest opacity-70">Criar Senha</label>
              <input required type="password" placeholder="Mínimo 6 caracteres" value={password} onChange={e => setPassword(e.target.value)} className="w-full h-11 px-6 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#002b5c] outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
            </div>
            <div className="space-y-1 w-full text-left">
              <label className="text-[9px] font-black text-[#002b5c] uppercase ml-6 tracking-widest opacity-70">Confirmar Senha</label>
              <input required type="password" placeholder="••••••••" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full h-11 px-6 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#002b5c] outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
            </div>

            {error && <div className="p-3 w-full bg-red-50 text-red-600 rounded-[24px] text-[8.5px] font-black text-center uppercase border border-red-100 leading-tight">{error}</div>}
            {message && <div className="p-3 w-full bg-teal-50 text-teal-600 rounded-[24px] text-[8.5px] font-black text-center uppercase border border-teal-100 leading-tight">{message}</div>}

            <button type="submit" disabled={isLoading} className="w-full h-14 bg-gradient-to-r from-teal-400 to-teal-700 hover:scale-[1.02] text-white rounded-full font-black text-[10px] uppercase tracking-[0.25em] shadow-xl transition-all active:scale-95 disabled:opacity-50 mt-4">
              {isLoading ? 'CRIANDO CONTA...' : 'CRIAR MINHA CONTA'}
            </button>

            <button type="button" onClick={() => { setAuthMode('login'); setError(''); setMessage(''); }} className="mt-4 text-[9px] font-black text-gray-400 uppercase tracking-widest hover:text-[#002b5c] transition-colors">
              Já tem conta? <span className="text-teal-600">Voltar para o Login</span>
            </button>
          </form>
        )}

        {/* ── RECUPERAR SENHA ───────────────────────────────────────────── */}
        {authMode === 'forgot' && (
          <form onSubmit={handleResetPassword} className="w-full space-y-6 flex flex-col items-center animate-fade-in">
            <div className="text-center px-4">
              <p className="text-[9px] font-bold text-gray-400 uppercase leading-relaxed">Insira seu e-mail institucional abaixo para receber as instruções de redefinição.</p>
            </div>
            <div className="space-y-1 w-full text-left">
              <label className="text-[9px] font-black text-[#002b5c] uppercase ml-6 tracking-widest opacity-70">E-mail Institucional</label>
              <input required type="email" placeholder="nome@prof.educacao.sp.gov.br" value={email} onChange={e => setEmail(e.target.value)} className="w-full h-12 px-6 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#002b5c] outline-none focus:ring-2 focus:ring-teal-500 transition-all lowercase" />
            </div>

            {error && <div className="p-3 w-full bg-red-50 text-red-600 rounded-[24px] text-[8.5px] font-black text-center uppercase border border-red-100 leading-tight">{error}</div>}
            {message && <div className="p-3 w-full bg-teal-50 text-teal-600 rounded-[24px] text-[8.5px] font-black text-center uppercase border border-teal-100 leading-tight">{message}</div>}

            <button type="submit" disabled={isLoading} className="w-full h-14 bg-gradient-to-r from-orange-400 to-orange-700 hover:scale-[1.02] text-white rounded-full font-black text-[10px] uppercase tracking-[0.25em] shadow-xl transition-all active:scale-95 disabled:opacity-50 mt-4">
              {isLoading ? 'ENVIANDO...' : 'ENVIAR INSTRUÇÕES'}
            </button>

            <button type="button" onClick={() => { setAuthMode('login'); setError(''); setMessage(''); }} className="mt-4 text-[9px] font-black text-gray-400 uppercase tracking-widest hover:text-[#002b5c] transition-colors">
              Lembrei a senha! <span className="text-teal-600">Voltar</span>
            </button>
          </form>
        )}

        {/* ── CADASTRO PELA GESTÃO ──────────────────────────────────────── */}
        {authMode === 'admin_register' && (
          <div className="w-full animate-fade-in">

            {/* PASSO 1 — Confirmar identidade do gestor */}
            {adminStep === 'auth' && (
              <form onSubmit={handleAdminAuth} className="w-full space-y-4 flex flex-col items-center">
                <div className="w-full p-4 bg-blue-50 border border-blue-100 rounded-2xl text-center">
                  <p className="text-[9px] font-black text-blue-700 uppercase tracking-wide">
                    🔐 Confirme sua identidade de gestor para continuar
                  </p>
                </div>

                <div className="space-y-1 w-full text-left">
                  <label className="text-[9px] font-black text-[#002b5c] uppercase ml-6 tracking-widest opacity-70">Seu e-mail de Gestor</label>
                  <input
                    required type="email" placeholder="seu@prof.educacao.sp.gov.br"
                    value={adminEmail} onChange={e => setAdminEmail(e.target.value)}
                    className="w-full h-11 px-6 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#002b5c] outline-none focus:ring-2 focus:ring-blue-500 transition-all lowercase"
                  />
                </div>
                <div className="space-y-1 w-full text-left">
                  <label className="text-[9px] font-black text-[#002b5c] uppercase ml-6 tracking-widest opacity-70">Sua Senha</label>
                  <input
                    required type="password" placeholder="••••••••"
                    value={adminPassword} onChange={e => setAdminPassword(e.target.value)}
                    className="w-full h-11 px-6 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#002b5c] outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                {error && <div className="p-3 w-full bg-red-50 text-red-600 rounded-[24px] text-[8.5px] font-black text-center uppercase border border-red-100 leading-tight">{error}</div>}

                <button type="submit" disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg transition-all active:scale-95 disabled:opacity-50 mt-2">
                  {isLoading ? 'VERIFICANDO...' : 'CONFIRMAR IDENTIDADE'}
                </button>
                <button type="button" onClick={() => { resetAdminForm(); setAuthMode('login'); }}
                  className="mt-2 text-[9px] font-black text-gray-400 uppercase tracking-widest hover:text-[#002b5c] transition-colors">
                  ← Voltar para o Login
                </button>
              </form>
            )}

            {/* PASSO 2 — Formulário de cadastro */}
            {adminStep === 'form' && (
              <form onSubmit={handleAdminRegisterProfessor} className="w-full space-y-4 flex flex-col items-center">
                <div className="w-full p-4 bg-teal-50 border border-teal-100 rounded-2xl text-center">
                  <p className="text-[9px] font-black text-teal-700 uppercase tracking-wide">
                    ✅ Identidade confirmada — cadastre o professor abaixo
                  </p>
                </div>

                <div className="space-y-1 w-full text-left">
                  <label className="text-[9px] font-black text-[#002b5c] uppercase ml-6 tracking-widest opacity-70">E-mail do Professor</label>
                  <input
                    required type="email" placeholder="professor@prof.educacao.sp.gov.br"
                    value={newProfEmail} onChange={e => setNewProfEmail(e.target.value)}
                    className="w-full h-11 px-6 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#002b5c] outline-none focus:ring-2 focus:ring-teal-500 transition-all lowercase"
                  />
                </div>

                <div className="space-y-1 w-full text-left">
                  <label className="text-[9px] font-black text-[#002b5c] uppercase ml-6 tracking-widest opacity-70">Nome Completo do Professor</label>
                  <input
                    required type="text" placeholder="NOME COMPLETO"
                    value={newProfNome} onChange={e => setNewProfNome(e.target.value.toUpperCase())}
                    className="w-full h-11 px-6 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#002b5c] outline-none focus:ring-2 focus:ring-teal-500 transition-all uppercase"
                  />
                </div>

                {/* Senha temporária gerada automaticamente */}
                <div className="w-full p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl">
                  <p className="text-[8px] font-black text-amber-600 uppercase tracking-widest mb-1">Senha temporária:</p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xl font-black text-amber-800 tracking-widest">{tempPassword}</span>
                    <button type="button" onClick={() => setTempPassword(generateTempPassword())}
                      className="text-[8px] font-black text-amber-600 uppercase hover:text-amber-800 underline whitespace-nowrap">
                      Nova senha
                    </button>
                  </div>
                  <p className="text-[8px] font-bold text-amber-500 uppercase mt-2 leading-relaxed">
                    ⚠️ Anote e repasse ao professor para o primeiro acesso.
                  </p>
                </div>

                {error && <div className="p-3 w-full bg-red-50 text-red-600 rounded-[24px] text-[8.5px] font-black text-center uppercase border border-red-100 leading-tight">{error}</div>}
                {message && (
                  <div className="p-4 w-full bg-teal-50 border border-teal-200 rounded-2xl">
                    <pre className="text-[9px] font-black text-teal-700 uppercase leading-relaxed whitespace-pre-wrap text-center">{message}</pre>
                  </div>
                )}

                <button type="submit" disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg transition-all active:scale-95 disabled:opacity-50 mt-2">
                  {isLoading ? 'CADASTRANDO...' : 'CADASTRAR PROFESSOR'}
                </button>

                <button type="button" onClick={() => { resetAdminForm(); setAuthMode('login'); }}
                  className="mt-2 text-[9px] font-black text-gray-400 uppercase tracking-widest hover:text-[#002b5c] transition-colors">
                  ← Voltar para o Login
                </button>
              </form>
            )}
          </div>
        )}

        <div className="mt-8 text-center w-full">
          <p className="text-[8px] font-bold text-gray-300 uppercase tracking-widest leading-relaxed">
            ESTE PORTAL É DE USO EXCLUSIVO DOS<br />PROFISSIONAIS DA EE LYDIA KITZ MOREIRA
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-50 w-full text-center">
          <p className="text-[9px] font-bold text-gray-200 uppercase tracking-widest">SECRETARIA DA EDUCAÇÃO DO ESTADO DE SÃO PAULO</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default Login;
