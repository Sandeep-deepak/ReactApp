// eslint-disable-next-line
import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";

//import Navbar from './navbar';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <Navbar></Navbar> */}
//     <Router>
//     <App />
//     </Router>
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();


