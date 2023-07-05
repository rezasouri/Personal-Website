import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/fontiran.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getDirections } from './localization/index'

document.getElementsByTagName('body')[0].setAttribute('dir', getDirections())
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
