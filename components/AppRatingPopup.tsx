import React, { useState } from 'react';
import { saveAppRatingToSheets } from '../services/sheetsService';

interface AppRatingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
  onRated?: () => void;
}

interface Criterio {
  key: 'facilidadeUso' | 'velocidade' | 'design' | 'utilidade';
  label: string;
  icon: string;
}

const CRITERIOS: Criterio[] = [
  { key: 'facilidadeUso', label: 'Facilidade de Uso', icon: '🧭' },
  { key: 'velocidade',    label: 'Velocidade',         icon: '⚡' },
  { key: 'design',        label: 'Design',              icon: '🎨' },
  { key: 'utilidade',     label: 'Utilidade no Dia a Dia', icon: '✅' },
];

const StarRow: React.FC<{ value: number; onChange: (v: number) => void }> = ({ value, onChange }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((n) => (
      <button
        key={n}
        type="button"
        onClick={() => onChange(n)}
        className="transition-transform active:scale-90"
        aria-label={`${n} estrela(s)`}
      >
        <svg
          className={`w-7 h-7 ${n <= value ? 'text-yellow-400' : 'text-gray-200'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </button>
    ))}
  </div>
);

const AppRatingPopup: React.FC<AppRatingPopupProps> = ({ isOpen, onClose, userEmail, onRated }) => {
  const [ratings, setRatings] = useState<Record<Criterio['key'], number>>({
    facilidadeUso: 0,
    velocidade: 0,
    design: 0,
    utilidade: 0,
  });
  const [comentario, setComentario] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setNota = (key: Criterio['key'], value: number) => {
    setRatings(prev => ({ ...prev, [key]: value }));
  };

  const allRated = CRITERIOS.every(c => ratings[c.key] > 0);

  const handleClose = () => {
    onClose();
    // Reseta o formulário após fechar, com pequeno atraso pra não "piscar" durante a transição
    setTimeout(() => {
      setRatings({ facilidadeUso: 0, velocidade: 0, design: 0, utilidade: 0 });
      setComentario('');
      setSubmitted(false);
    }, 300);
  };

  const handleSubmit = async () => {
    if (!allRated || submitting) return;
    setSubmitting(true);
    try {
      await saveAppRatingToSheets({
        userEmail: userEmail || '---',
        facilidadeUso: ratings.facilidadeUso,
        velocidade: ratings.velocidade,
        design: ratings.design,
        utilidade: ratings.utilidade,
        comentario,
      });
      localStorage.setItem('lkm_has_rated_app', 'true');
      setSubmitted(true);
      onRated?.();
    } catch (err) {
      console.error('Erro ao enviar avaliação:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[300] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col transform transition-all animate-fade-in-up max-h-[90vh]">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-7 flex flex-col items-center text-center relative flex-shrink-0">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="text-5xl mb-3 drop-shadow-md">⭐</div>
          <h2 className="text-white font-black text-lg uppercase tracking-widest drop-shadow-sm">Avalie o App</h2>
        </div>

        <div className="overflow-y-auto custom-scrollbar">
          {submitted ? (
            <div className="p-8 flex flex-col items-center text-center gap-4">
              <div className="text-5xl">🎉</div>
              <p className="text-gray-700 font-bold text-sm">Obrigado por avaliar o Portal Lydia Kitz!</p>
              <p className="text-gray-400 text-[11px]">Sua opinião ajuda a melhorar o app para todos os professores.</p>
              <button
                onClick={handleClose}
                className="mt-2 w-full bg-teal-500 hover:bg-teal-600 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg"
              >
                Fechar
              </button>
            </div>
          ) : (
            <div className="p-6 flex flex-col gap-5">
              <p className="text-gray-600 text-[12px] text-center font-medium leading-relaxed">
                Dê uma nota de 1 a 5 estrelas para cada critério abaixo:
              </p>

              {CRITERIOS.map((c) => (
                <div key={c.key} className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-black text-gray-700 uppercase tracking-wide flex items-center gap-1.5">
                    <span className="text-base">{c.icon}</span> {c.label}
                  </span>
                  <StarRow value={ratings[c.key]} onChange={(v) => setNota(c.key, v)} />
                </div>
              ))}

              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Comentário (opcional)
                </label>
                <textarea
                  rows={3}
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  placeholder="Sugestões, elogios ou problemas encontrados..."
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-black outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <button
                  onClick={handleSubmit}
                  disabled={!allRated || submitting}
                  className="w-full bg-teal-500 hover:bg-teal-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg hover:shadow-teal-500/30"
                >
                  {submitting ? 'Enviando...' : 'Enviar Avaliação'}
                </button>
                <button
                  onClick={handleClose}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all"
                >
                  Agora Não
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppRatingPopup;
