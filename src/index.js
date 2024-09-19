//Wrap your app with HashtagProvider in index.js:
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { HashtagProvider } from './context/HashtagContext';

ReactDOM.render(
  <HashtagProvider>
    <App />
  </HashtagProvider>,
  document.getElementById('root')
);
