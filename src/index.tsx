import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './views/App';
// import reportWebVitals from './utils/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// *** Commented out web vitals to exclude it from the build until we use it ***
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
