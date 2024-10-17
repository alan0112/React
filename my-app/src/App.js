import logo from './logo.svg';
import './App.css';
//Importacion por default
import MiComponente, { MiComponente3 } from './MiComponente.js';
//Importación por nombre en este caso Fragment
import { MiComponente2 } from './MiComponente.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         {/*Esto te permite meter codigo JS como un comentario*/}
      <MiComponente/>
      <MiComponente2/>
      <MiComponente3/>
      </header>

     

    </div>
  );
}

export default App;
