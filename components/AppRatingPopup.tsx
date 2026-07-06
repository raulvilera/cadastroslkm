import React, { useState, useEffect } from 'react';

const AppRatingPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Lógica desativada para forçar o teste
  }, []);

  const handleClose = () => {
    localStorage.setItem('lkm_has_rated_app', 'true');
    setShowPopup(false);
  };

  const handleRate = () => {
    localStorage.setItem('lkm_has_rated_app', 'true');
    setShowPopup(false);
    // TODO: Adicionar o link real do Google Play/App Store ou Forms
    alert("Obrigado por avaliar nosso aplicativo!");
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[300] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col transform transition-all animate-fade-in-up">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-8 flex flex-col items-center text-center relative">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="text-6xl mb-4 drop-shadow-md">⭐</div>
          <h2 className="text-white font-black text-xl uppercase tracking-widest drop-shadow-sm">Avalie o App</h2>
        </div>
        <div className="p-6 text-center flex flex-col items-center">
          <p className="text-gray-600 text-[13px] mb-6 font-medium leading-relaxed">
            Gostando de usar o Portal Lydia Kitz (ocorrências)? Avalie nosso app para nos ajudar a melhorar!
          </p>
          <div className="w-full flex flex-col gap-3">
            <button
              onClick={handleRate}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg hover:shadow-teal-500/30"
            >
              Avaliar Agora
            </button>
            <button
              onClick={handleClose}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all"
            >
              Não, Obrigado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppRatingPopup;
