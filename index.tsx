import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// React.StrictMode removido intencionalmente.
// Em modo strict, o useEffect roda duas vezes, causando race condition
// no onAuthStateChange do Supabase que sobrescreve o role de gestores.
root.render(<App />);

// Registra o Service Worker e força atualização automática quando nova versão disponível
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    // Verifica atualização a cada 60 segundos enquanto o app está aberto
    setInterval(function () { registration.update(); }, 60000);

    // Quando um novo SW está esperando, manda ele assumir imediatamente
    registration.addEventListener('updatefound', function () {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', function () {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            newWorker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      }
    });
  });

  // Quando o SW assumir o controle, recarrega a página para pegar versão nova
  navigator.serviceWorker.addEventListener('message', function (event) {
    if (event.data && event.data.type === 'SW_UPDATED') {
      window.location.reload();
    }
  });
}
