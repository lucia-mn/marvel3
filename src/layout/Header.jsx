import React from 'react';
import "../styles/Header.css";
import logo from "../assets/logo.png";
import corazon from "../assets/corazon.png";

export const Header = () => {

  return (

    <header className="header">
      <img src={logo} alt="logo-marvel" className="logo" />

      <img src={corazon} alt='icono-corazon' className='favoritos' />
    </header>

  )
}
