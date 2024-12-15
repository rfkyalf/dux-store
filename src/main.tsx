import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <div className="bg-neutral-50 min-h-screen">
      <App />
    </div>
  </StrictMode>
);
