import React from 'react';
import ReactDOM from 'react-dom/client';
import { MoralisProvider } from "react-moralis";
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MoralisProvider appId="wlzRrvHDWBuWvZhmBD1zIelwKOuIHHqppirPd3VA" serverUrl="https://s2ni7eolynpx.usemoralis.com:2053/server">
      
    <Navbar2 />
    <Footer />
    </MoralisProvider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

