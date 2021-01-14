import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if ((import.meta as any).hot) {
  (import.meta as any).hot.accept();
}

// <script src="/socket.io/socket.io.js"></script>
// <script>var socket = io();</script>
