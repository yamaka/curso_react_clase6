import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Calculadora from './components/Calculadora/Calculadora';
 
import CiclosDeVida from  './components/CiclosDeVida/CiclosDeVida';
import ComponenteHook from './components/Hook/ComponenteHook'

import './index.css'
ReactDOM.render(<ComponenteHook titulo="componente hook1" />, document.getElementById('app'));