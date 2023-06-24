import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'></div>
      <img className='freecodecamp-logo'
      src={freeCodeCampLogo}
      alt='Logo de freecodecamp'></img>
    
    </div>
  );
}

export default App;
