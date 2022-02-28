import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//     <Auth0Provider
//         domain="YOUR_DOMAIN"
//         clientId="YOUR_CLIENT_ID"
//         redirectUri={window.location.origin}
//     >
//         <App />
//     </Auth0Provider>,
//     document.getElementById("root")
// );