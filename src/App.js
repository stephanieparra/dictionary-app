import logo from "./dictionary-app-img.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-img img-fluid" alt="dictionary-logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded and designed by Stephanie Parra.
        </footer>
      </div>
    </div>
  );
}

export default App;
