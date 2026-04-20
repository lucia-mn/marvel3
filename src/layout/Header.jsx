import React from 'react';
import "../styles/Header.css";
import logo from "../assets/logo.png";

export const Header = () => {

  return (

    <header className="header">
      <img src={logo} alt="logo-marvel" className="logo" />

      <div className="favoritos">♡</div>
    </header>

    
  )
}
