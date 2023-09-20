import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';

interface RootWithHTMLElement extends ReturnType<typeof createRoot> {
  render(element: React.ReactNode): void;
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root: RootWithHTMLElement = createRoot(rootElement);

  root.render(
    <React.StrictMode>
          <App />
    </React.StrictMode>
  );
} else {
  console.error('Element with id "root" not found.');
}