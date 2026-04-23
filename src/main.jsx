import './index.css';
// import App from './App.jsx';

import React from "react";
import ReactDOM from "react-dom/client";
import {Router} from "./router/Router.jsx";
import { FavoritosProvider } from './context/FavoritosProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  <FavoritosProvider>
    <Router />
  </FavoritosProvider>
);
