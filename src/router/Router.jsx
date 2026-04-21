import {Routes, Route, BrowserRouter, Navigate, Link} from 'react-router-dom';
// import { AuthProvider } from '../context/AuthProvider';
import { Layout } from '../layout/Layout';
import { DetalleHeroe } from '../pages/DetalleHeroe';
import { Favoritos } from '../pages/Favoritos';
import { Inicio } from '../pages/Inicio';


export const Router = () => {
  return (

    <BrowserRouter>
        {/* <AuthProvider> */}
            <Routes>

                <Route path='/' element={<Layout />} >

                    <Route index element={<Inicio />} />
                    <Route path='characters' element={< DetalleHeroe />} />
                    <Route path='favoritos' element={< Favoritos />} />
                </Route>

                <Route path='*' element= {
                    <>
                        <p>
                            <h1>Error 404 :(</h1>
                            <Link to="/">Volver al inicio</Link>
                        </p>
                    </>
                }></Route>

            </Routes>
        {/* </AuthProvider> */}
    </BrowserRouter>
  )
}