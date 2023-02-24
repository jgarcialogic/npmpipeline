import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [contador, setContador] = useState(0);

  function incrementarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Hola, mundo!</h1>
      <p>Esta es mi primera página con React.</p>
      <Contador valor={contador} incrementar={incrementarContador} />
    </div>
  );
}

function Contador(props) {
  return (
    <div>
      <p>El valor del contador es: {props.valor}</p>
      <button onClick={props.incrementar}>Incrementar</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
