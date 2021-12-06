import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
console.log(App)
console.log(document.body)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

