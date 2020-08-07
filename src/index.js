import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home'
import * as serviceWorker from './serviceWorker';

// import $ from 'jquery'
import './assets/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import './assets/css/responsive.css'
import './assets/css/animate.css'
import './assets/css/style.css'
import './assets/css/colorbox.css'
import './assets/css/font-awesome.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
