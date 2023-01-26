import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './App';
import { NombreCompleto as Name } from './components/NombreCompleto';
import { Mascota } from './components/Mascota';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <Name name="Sergio" age={30} />
    <Mascota name="Solovino" age={8}/>
    <Name name="Pax" age={31} />
    <Name name="Adrii" age={24} />
  </React.StrictMode>
);
