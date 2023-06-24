import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import {Boton} from './componentes/Boton'
import Contador  from './componentes/Contador';
import { useState } from 'react';




function App() {
  const [numClics, setNumClics]= useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador=() =>{
    setNumClics(0);
  }
  
  
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freecodecamp'></img>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}>

        </Contador>

        <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic}>

        </Boton>
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador}>
          
        </Boton>
      </div>
    
    </div>
  );
}

export default App;
