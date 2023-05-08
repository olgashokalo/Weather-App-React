import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a href="https://github.com/olgashokalo/Weather-App-React">
            Open-source code
          </a>
          by Olga Shokalo
        </footer>
      </div>
    </div>
  );
}

export default App;
