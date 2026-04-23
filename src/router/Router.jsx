import {Routes, Route, BrowserRouter, Navigate, Link} from 'react-router-dom';

import { Layout } from '../layout/Layout';
import { DetalleHeroe } from '../pages/DetalleHeroe';
import { Favoritos } from '../pages/Favoritos';
import { Inicio } from '../pages/Inicio';


export const Router = () => {
    
    return (
        <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Layout />} >

                        <Route index element={<Inicio />} />
                        <Route path='characters/:id' element={< DetalleHeroe />} />
                        <Route path='favoritos' element={< Favoritos />} />
                    </Route>

                    <Route path='*' element= {
                        <>
                            <div className='error'>
                                <h1>Error 404 :(</h1>
                                <Link to="/">Volver al inicio</Link>
                            </div>
                        </>
                    }></Route>

                </Routes>
        </BrowserRouter>
    );
}