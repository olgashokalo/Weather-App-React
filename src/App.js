import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          <a href="https://github.com/olgashokalo/Weather-App-React">
            Open-source code
          </a>{" "}
          by Olga Shokalo and{" "}
          <a href="https://willowy-lamington-f3210b.netlify.app/">
            {" "}
            hosted on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
