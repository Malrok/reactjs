import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import firebase from 'firebase';
 
firebase.initializeApp(config);
 
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

