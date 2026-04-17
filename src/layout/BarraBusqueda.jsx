import React from 'react';
import "../styles/BarraBusqueda.css";
import { useState } from "react";
import lupa from "../assets/lupa.png";

export const BarraBusqueda = () => {

  const [texto, setTexto] = useState("");

  return (

    <div className='buscador'>
      <div className='barra-busqueda'> 
        <div className='grupo'>
          <img src={lupa} alt='lupa' className='icono-lupa' />

          <input type='text' 
                  placeholder='buscar personajes...'
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
          />
        </div>

        <div className='resultados'>
          resultados
        </div>

      </div>
    </div>
  )
}
