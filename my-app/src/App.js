import logo from './logo.svg';
import './App.css';
import { Componente3 } from './Componente3.js';
import { EventosComponente } from './EventosComponente.js';



function App() {

  let medica ={
    nombre :"a",
    tipo_sanguineo: "o+",
    salud: "Shido",
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         {/*Esto te permite meter codigo JS como un comentario*/}
      <div className='Componentes'>
      
      <Componente3 
        nombre = "alan" 
        apellido = "apellido"
        ficha = {medica}
        />
      <EventosComponente/>
      
      </div>
      </header>

     

    </div>
  );
}

export default App;
