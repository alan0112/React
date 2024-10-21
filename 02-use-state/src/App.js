import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './component/MiPrimerEstado';
import { Ejercicio } from './component/Ejercicio';

function App() {

  const fecha = new Date().getFullYear();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>El estado en react. Hook useState</h1>
        <MiPrimerEstado/>    
        <br/>
        <Ejercicio year = {fecha} />
      </header>
    </div>
  );
}

export default App;
