import React from 'react';
import { Header } from './Header';
// import { Navigate, Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { BarraBusqueda } from './BarraBusqueda';

export const Layout = ({children}) => {

  return (
    <>
        <Header />
        <BarraBusqueda />

        {/* contenido principal */}
        <main>{children}</main>

        <Footer />
    </>
  )
}

