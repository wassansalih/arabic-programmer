import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Javascript from './routes/Javascript';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/arabic-programmer" element={<App />} />
      <Route path="/arabic-programmer/home" element={<Home />} />
      <Route path="/arabic-programmer/javascript" element={<Javascript />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
