// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'; 
import App from './App';
import { Flip, ToastContainer } from 'react-toastify';
import { EmployeeProvider } from "./Components/EmployeeContext";

import '../src/index.css'
ReactDOM.render(
  <EmployeeProvider>
  <BrowserRouter>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      transition={Flip}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />

  </BrowserRouter>,
  </EmployeeProvider>,
  document.getElementById('root')
);
