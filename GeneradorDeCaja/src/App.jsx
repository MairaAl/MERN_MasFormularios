import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [boxColor, setBoxColor] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (color) {
      setBoxColor([...boxColor, color]);
      setColor("");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Color</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Ingrese un color (red, blue, green)"
        />
        <input type="submit" value="Add" />
      </form>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {boxColor.map((boxColor, index) => (
          <div
            key={index}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: boxColor,
              margin: "10px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
