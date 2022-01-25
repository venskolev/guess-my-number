import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [rate, setRate] = useState("");
  const [zehler, setZehler] = useState(0);
  const [randomZahl, setRandomZahl] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [mesage, setMesage] = useState("Bitte geben Sie ein Zahl");

  return (
    <div className="App">
      <header>
        <h1>Rate ein Zahl zwichen 1 und 10</h1>
        <input
          value={rate}
          onChange={(event) => {
            setRate(event.target.value);
          }}
        ></input>
        <button onClick={() => {
          if(isNaN(rate)){
            setMesage("Geben Sie ein Zahl!")
          }else if(parseInt(rate) === randomZahl){
            setMesage(`Das ist richtig! Mein Zahl war ${randomZahl}`);
            setZehler(zehler+1);
          } else {
            setMesage("Das ist falsch!")
          }
        }}>Raten</button>
        <p>{mesage}</p>
        <p>Versuche: {zehler}</p>
      </header>
    </div>
  );
}

export default App;
