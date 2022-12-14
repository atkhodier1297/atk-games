import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from './Navbar';
import "./index.css"

ReactDOM.render(
  <BrowserRouter>
    <Navbar/>
    <App/>
  </BrowserRouter>
  , document.getElementById('root')
);
