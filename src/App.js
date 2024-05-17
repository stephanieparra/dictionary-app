import logo from "./title-dictionary-app.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            className="App-img img-fluid"
            alt="dictionary-title"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://stephanie-parra-portfolio.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stephanie Parra
          </a>{" "}
          •{" "}
          <a
            href="https://github.com/stephanieparra/dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
