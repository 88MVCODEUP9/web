import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { SiteConfigProvider } from './context/SiteConfigContext.jsx';
import './styles/palette.css';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <SiteConfigProvider><App /></SiteConfigProvider>
);
