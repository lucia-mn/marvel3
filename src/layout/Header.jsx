import React from 'react';
import "../styles/Header.css";
import logo2 from "../assets/logo2.png";
import corazon from "../assets/corazon.png";
import {Link} from "react-router-dom";
import { useFavoritos } from '../context/FavoritosProvider';


export const Header = () => {
  
  const {favoritos} = useFavoritos();

  return (

  <header className="header">
    <Link to="/">
      <img src={logo2} alt="logo-marvel" className="logo2" />
    </Link>

    <Link to="/favoritos" className='icono-fav'>
      <img src={corazon} alt="icono-corazon" className="favoritos" />
      <span className="contador">{favoritos.length}</span>
    </Link>
  </header>

  )
}

