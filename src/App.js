import "./App.css";
import "../src/stylesheets/ContenedorPrincipal.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const resetContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="contenedor-principal">
        <Counter numClics={numClics} />
        <Button texto="Clic" esBotonClic={true} manejarClic={manejarClic} />
        <Button
          texto="Reiniciar"
          esBotonClic={false}
          manejarClic={resetContador}
        />
      </div>
    </div>
  );
}

export default App;
