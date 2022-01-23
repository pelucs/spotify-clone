import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Rotas from './Rotas';

export default () => {
  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  )
}