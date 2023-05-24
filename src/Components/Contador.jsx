import React, { useState } from "react";
import "./Contador.css";

function Contador() {
  const [valor, setValor] = useState(0);

  const Sumar = () => {
    setValor(valor + 1);
  };
  const Reestablecer = () => {
    setValor(0);
  };
  const Disminuir = () => {
    if (valor > 0) {
      setValor(valor - 1);
    }
  };
  return (
    <div className="Fondo">
      <div className="Contenedor">
        <h1 className="Titulo">CONTADOR</h1>
        <h2 className="valor">{valor}</h2>
        <div className="Botones">
          <button className="boton" onClick={Sumar}>
            AUMENTAR
          </button>
          <button className="boton" onClick={Reestablecer}>
            REESTABLECER
          </button>
          <button className="boton" onClick={Disminuir}>
            DISMINUIR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contador;
