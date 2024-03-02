import { useState } from "react";
import "./App.css";

export default function App() {
  const pestañas = [
    { label: "Pestaña 1", contenido: "Esta es la pestaña 1" },
    { label: "Pestaña 2", contenido: "Esta es la pestaña 2" },
    { label: "Pestaña 3", contenido: "Esta es la pestaña 3" },
  ];

  const [pestañaActiva, setPestañaActiva] = useState(0);

  function handleClick(index) {
    setPestañaActiva(index);
  }

  return (
    <div>
      <div>
        {pestañas.map(function (pestaña, index) {
          return (
            <span
              className={`pestañas ${index === pestañaActiva ? "active" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {pestaña.label}
            </span>
          );
        })}
      </div>
      <div>
        {pestañas.map(function (pestaña, index) {
          return (
            <div
              key={index}
              className={`content  ${
                index === pestañaActiva ? "active" : "hidden"
              }`}
            >
              {pestaña.contenido}
            </div>
          );
        })}
      </div>
    </div>
  );
}
