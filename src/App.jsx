import './App.css';
import { BarraBusqueda } from './layout/BarraBusqueda';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Router } from './router/Router';

function App() {

  return (
    <>
      <div className='layout'>

        <Router />  

      </div> 
    </>
  )
}

export default App
