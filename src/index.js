import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/app';
import registerServiceWorker from './registerServiceWorker';

const APP_ROOT = document.querySelector("#root");

ReactDOM.render(<App />, APP_ROOT);
registerServiceWorker();
