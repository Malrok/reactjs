import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCJhO9SPTit2418hkttbpn_KFxL-G3yyPM",
  authDomain: "cross-platform-test.firebaseapp.com",
  databaseURL: "https://cross-platform-test.firebaseio.com",
  projectId: "cross-platform-test",
  storageBucket: "cross-platform-test.appspot.com",
  messagingSenderId: "734028203665",
  appId: "1:734028203665:web:b11deb7aaf2b0998c52130"
};
 
firebase.initializeApp(config);
 
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

