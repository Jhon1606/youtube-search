import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Welcome message="Hola desde la consola props"/>
      </header>
    </div>
  );
}

export default App;
