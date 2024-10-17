import logo from './logo.svg';
import './App.css';
//Importacion por default
import MiComponente, { MiComponente3 } from './MiComponente.js';
//Importación por nombre en este caso Fragment
import { MiComponente2 } from './MiComponente.js';
import { Componente2 } from './Componente2.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         {/*Esto te permite meter codigo JS como un comentario*/}
      <div className='Componentes'>
      <MiComponente/>
      <MiComponente2/>
      <MiComponente3/>
      <hr/>
      <Componente2/>
      </div>
      </header>

     

    </div>
  );
}

export default App;
