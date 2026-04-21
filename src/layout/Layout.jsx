import React from 'react';
import { Header } from './Header';
import { Navigate, Outlet } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
import { Footer } from './Footer';
import { BarraBusqueda } from './BarraBusqueda';

export const Layout = () => {

  // const {auth} = useAuth();

  return (
    <>
        {/* LAYOUT */}
        <Header />
        <BarraBusqueda />

        {/* contenido principal */}
        <section className='layout__content'>
            <Outlet />
        </section>

        <Footer />
    </>
  )
}

