import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './stores/store.ts';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <div className="bg-neutral-50 min-h-screen">
        <App />
      </div>
    </Provider>
  </StrictMode>
);
