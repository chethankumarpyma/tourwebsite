/*Bootstrap Files & fontawesome files*/
import '@fortawesome/fontawesome-free/css/all.css';
import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import 'mdbootstrap/js/jquery';
import 'mdbootstrap/js/popper';
// import 'mdbootstrap/js/bootstrap';
// import 'mdbootstrap/js/mdb';
import './style.css'; // customized bootstrap styles


// ---------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
    <React.StrictMode >
    <App / >
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();