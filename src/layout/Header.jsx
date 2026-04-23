import React from 'react';
import "../styles/Header.css";
import logo2 from "../assets/logo2.png";
import corazon from "../assets/corazon.png";
import {Link} from "react-router-dom";

export const Header = () => {

  return (

  <header className="header">
    <Link to="/">
      <img src={logo2} alt="logo-marvel" className="logo2" />
    </Link>

    <Link to="/favoritos">
      <img src={corazon} alt="icono-corazon" className="favoritos" />
    </Link>
  </header>

  )
}

