import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Logup } from './logup/logup';
import { Inicio } from './inicio/inicioIndex';
import { Home } from './home/home';
import { Api } from './apiPokemon/llamadaFetch';
import { AdminProy } from './adminProy/adminProy';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 
      <Routes>
         <Route path="/" element={<App/>}></Route>
         <Route path="login" element={<Login/>}></Route>
         <Route path="logup" element={<Logup/>}></Route>
         <Route path="inicio" element={<Inicio/>}></Route>
         <Route path="home" element={<Home/>}></Route>
         <Route path="Api" element={<Api/>}></Route>
         <Route path="adminProy" element={<AdminProy/>}></Route>  
      </Routes> 
    
  </BrowserRouter>
);
//<React.StrictMode></React.StrictMode>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
