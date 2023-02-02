import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 
import { createRoot } from 'react-dom/client';
createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
*/

/* import { createRoot } from 'react-dom/client';
const root = createRoot(document.querySelector('#root'));

const el = (
  <div>
    <div>Ура</div>
    <div>Ура</div>
    <div>Ура</div>
  </div>
);

root.render(el); */
