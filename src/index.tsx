import React from 'react';
import ReactDOM from 'react-dom';

import { Calculator } from './features/Calculator';

import reportWebVitals from './reportWebVitals';

import './_assets/css/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
