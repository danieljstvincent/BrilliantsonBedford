import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BrilliantsLanding from './BrilliantsLanding';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrilliantsLanding />
  </React.StrictMode>
);