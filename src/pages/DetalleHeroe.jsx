import React from 'react';
import { useParams } from 'react-router-dom';

export const DetalleHeroe = () => {

  const {id} = useParams();

  return (
    <>
      <h2>Detalle del heroe {id}</h2>
    </>
  )
}
