import React from "react";
import "../stylesheets/Boton.css";
function Button({ texto, esBotonClic, manejarClic }) {
  return (
    <button
      className={esBotonClic ? "btn-clic" : "btn-reset"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}

export default Button;
