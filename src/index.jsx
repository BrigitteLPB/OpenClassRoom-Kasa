import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'style/index.scss';
import App from 'app';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
