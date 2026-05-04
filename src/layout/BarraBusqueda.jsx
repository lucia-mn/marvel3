import React from 'react';
import "../styles/BarraBusqueda.css";
import { useState } from "react";
import lupa from "../assets/lupa.png";

export const BarraBusqueda = ({onBuscar, total}) => {

  const [texto, setTexto] = useState("");

  const cambioTexto = (e) => {
    setTexto(e.target.value);
    onBuscar(e.target.value);
  }

  return (

    <div className='buscador'>
      <div className='barra-busqueda'> 
        <div className='grupo'>
          <img src={lupa} alt='lupa' className='icono-lupa' />

          <input type='text' 
                  placeholder='BUSCAR PERSONAJES...'
                  value={texto}
                  onChange={cambioTexto}
          />
        </div>

        <div className='resultados'>
          {total} resultados
        </div>

      </div>
    </div>
  )
}
