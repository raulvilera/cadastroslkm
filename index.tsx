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
