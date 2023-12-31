import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import './styles/privacy_terms.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
