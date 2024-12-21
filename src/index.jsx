import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';
import Header from './Header';
import Footer from './Footer';


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
