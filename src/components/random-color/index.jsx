import React from "react";
import { useState } from "react";
function RandomColor() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#93f501");

  function Generate() {
    console.log(type);
    if (type === "hex") {
      const HEX = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += HEX[Math.floor(Math.random() * 16)];
      }
      setColor(color);
    } else if (type === "rgb") {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setColor(`rgb(${r},${g},${b})`);
    }
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setType("hex")}>HEX Color</button>
      <button onClick={() => setType("rgb")}>RGB Color</button>
          <button onClick={() => Generate(type)}>Generate Random Color</button>

          <h1 style={{ color: "#000000" }}>{type}:{color}</h1>
    </div>
  );
}

export default RandomColor;
