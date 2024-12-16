import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { persistor, store } from './stores/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from './components/ui/toaster.tsx';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="bg-neutral-50 min-h-screen">
          <App />
          <Toaster />
        </div>
      </PersistGate>
    </Provider>
  </StrictMode>
);
