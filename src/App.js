import image from "./dictionary-app-img.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={image} className="App-img img-fluid" alt="image" />
    </div>
  );
}

export default App;
