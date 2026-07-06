import React, { useState, useEffect } from 'react';
import { saveRatingToGoogleSheets } from '../services/sheetsService';

interface AppRatingPopupProps {
  user: { email: string; role: 'gestor' | 'professor' } | null;
  isOpen?: boolean;
  onClose?: () => void;
}

const AppRatingPopup: React.FC<AppRatingPopupProps> = ({ user, isOpen, onClose }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [facilidadeUso, setFacilidadeUso] = useState(0);
  const [utilidadePedagogica, setUtilidadePedagogica] = useState(0);
  const [desempenhoVelocidade, setDesempenhoVelocidade] = useState(0);
  const [satisfacaoGeral, setSatisfacaoGeral] = useState(0);
  const [comentarios, setComentarios] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Se o modal for controlado externamente
    if (isOpen !== undefined) {
      setShowPopup(isOpen);
      if (isOpen) {
        // Resetar estados ao abrir
        setFacilidadeUso(0);
        setUtilidadePedagogica(0);
        setDesempenhoVelocidade(0);
        setSatisfacaoGeral(0);
        setComentarios('');
        setIsSuccess(false);
      }
    } else {
      // Se não for controlado externamente, checa o localStorage
      const hasRated = localStorage.getItem('lkm_has_rated_app');
      if (!hasRated && user) {
        // Exibe o popup 5 segundos após a montagem do app para não ser intrusivo
        const timer = setTimeout(() => {
          setShowPopup(true);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, user]);

  // Se o usuário não estiver logado ou não estivermos mostrando o popup, retorna null
  if (!user || !showPopup) return null;

  const handleClose = () => {
    setShowPopup(false);
    if (onClose) onClose();
  };

  const handleDismissForever = () => {
    localStorage.setItem('lkm_has_rated_app', 'true');
    handleClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (facilidadeUso === 0 || utilidadePedagogica === 0 || desempenhoVelocidade === 0 || satisfacaoGeral === 0) {
      alert("Por favor, atribua uma nota para todos os critérios de avaliação.");
      return;
    }

    setIsSubmitting(true);
    try {
      const success = await saveRatingToGoogleSheets({
        userEmail: user.email,
        userRole: user.role,
        facilidadeUso,
        utilidadePedagogica,
        desempenhoVelocidade,
        satisfacaoGeral,
        comentarios
      });

      if (success) {
        setIsSuccess(true);
        localStorage.setItem('lkm_has_rated_app', 'true');
        setTimeout(() => {
          handleClose();
        }, 2500);
      } else {
        alert("Ocorreu um erro ao enviar sua avaliação para o servidor. Tente novamente.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar avaliação.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number, setRating: (val: number) => void) => {
    return (
      <div className="flex gap-2 justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className="text-3xl transition-transform duration-150 hover:scale-125 focus:outline-none"
          >
            <span className={star <= rating ? "text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" : "text-gray-300"}>
              ★
            </span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[300] flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300">
      <div className="bg-[#0b1b3d] border border-blue-500/20 text-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col transform transition-all scale-100 animate-fade-in-up">
        {/* Header com Gradiente Premium */}
        <div className="bg-gradient-to-r from-blue-900 via-[#002b5c] to-blue-950 px-6 py-6 flex flex-col items-center text-center relative border-b border-white/10">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="text-4xl mb-2 drop-shadow-md">✨</div>
          <h2 className="text-white font-black text-lg uppercase tracking-wider">Avaliar Plataforma LKM</h2>
          <p className="text-blue-200/60 text-[10px] font-bold uppercase tracking-widest mt-1">Sua opinião é fundamental para nós</p>
        </div>

        {/* Corpo do Modal */}
        <div className="p-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
          {isSuccess ? (
            <div className="py-12 text-center flex flex-col items-center justify-center animate-pulse">
              <div className="text-6xl mb-4 text-emerald-400">🎉</div>
              <h3 className="text-lg font-black uppercase text-emerald-400">Avaliação Enviada!</h3>
              <p className="text-gray-300 text-xs mt-2 max-w-xs font-semibold leading-relaxed">
                Muito obrigado por nos ajudar a melhorar o Portal Lydia Kitz Moreira. Seu feedback foi registrado!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Info do Usuário */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-3 flex justify-between items-center text-[10px] uppercase font-bold text-gray-300">
                <div>
                  <span className="text-blue-400">Usuário:</span> {user.email}
                </div>
                <div>
                  <span className="text-orange-400">Perfil:</span> {user.role === 'gestor' ? 'GESTÃO' : 'PROFESSOR'}
                </div>
              </div>

              {/* Critério 1 */}
              <div className="bg-black/20 rounded-2xl p-4 border border-white/5 space-y-2 text-center">
                <label className="block text-[10px] font-black uppercase tracking-wider text-blue-300">
                  1. Facilidade de Uso (Usabilidade)
                </label>
                <p className="text-[10px] text-gray-400 mb-1">
                  Como você avalia a facilidade de navegar, criar e gerenciar ocorrências?
                </p>
                {renderStars(facilidadeUso, setFacilidadeUso)}
              </div>

              {/* Critério 2 */}
              <div className="bg-black/20 rounded-2xl p-4 border border-white/5 space-y-2 text-center">
                <label className="block text-[10px] font-black uppercase tracking-wider text-blue-300">
                  2. Utilidade Pedagógica
                </label>
                <p className="text-[10px] text-gray-400 mb-1">
                  Como avalia a aderência do app à Resolução 68/2026 e o suporte pedagógico?
                </p>
                {renderStars(utilidadePedagogica, setUtilidadePedagogica)}
              </div>

              {/* Critério 3 */}
              <div className="bg-black/20 rounded-2xl p-4 border border-white/5 space-y-2 text-center">
                <label className="block text-[10px] font-black uppercase tracking-wider text-blue-300">
                  3. Desempenho e Velocidade
                </label>
                <p className="text-[10px] text-gray-400 mb-1">
                  O aplicativo é rápido para carregar, salvar e gerar os PDFs?
                </p>
                {renderStars(desempenhoVelocidade, setDesempenhoVelocidade)}
              </div>

              {/* Critério 4 */}
              <div className="bg-black/20 rounded-2xl p-4 border border-white/5 space-y-2 text-center">
                <label className="block text-[10px] font-black uppercase tracking-wider text-blue-300">
                  4. Satisfação Geral
                </label>
                <p className="text-[10px] text-gray-400 mb-1">
                  Qual o seu nível geral de satisfação com o ecossistema Portal Lydia Kitz?
                </p>
                {renderStars(satisfacaoGeral, setSatisfacaoGeral)}
              </div>

              {/* Sugestões/Comentários */}
              <div className="space-y-1">
                <label className="block text-[10px] font-black uppercase tracking-wider text-blue-300">
                  Comentários ou Sugestões de Melhoria
                </label>
                <textarea
                  value={comentarios}
                  onChange={(e) => setComentarios(e.target.value)}
                  placeholder="Escreva aqui suas críticas construtivas, sugestões ou elogios..."
                  rows={3}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>

              {/* Botões de Ação */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg shadow-teal-500/20 active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? 'Gravando Avaliação...' : 'Enviar Avaliação'}
                </button>
                <div className="flex gap-2 justify-between">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-1/2 bg-white/5 hover:bg-white/10 text-gray-300 font-bold text-[9px] uppercase tracking-wider py-2 rounded-xl transition-all"
                  >
                    Talvez mais tarde
                  </button>
                  <button
                    type="button"
                    onClick={handleDismissForever}
                    className="w-1/2 bg-red-950/20 hover:bg-red-950/40 text-red-400 font-bold text-[9px] uppercase tracking-wider py-2 rounded-xl transition-all border border-red-500/10"
                  >
                    Não perguntar novamente
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppRatingPopup;
