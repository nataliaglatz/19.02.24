import logo from './logo.svg';
import './App.css';
import{exibirHorario} from './components/Horario.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          id="lnk"
        >
          Learning React
        </a>
        <button
        onClick={exibirHorario}
        >Ver Horário </button>
      </header>
    </div>
  );
}

exibirHorario();

export default App;
