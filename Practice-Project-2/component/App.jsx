import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="main" style={{ backgroundColor: color }}>
        <div className="btn-list">
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => setColor("red")}
          >
            RED
          </button>
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => setColor("blue")}
          >
            BLUE
          </button>
          <button
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => setColor("green")}
          >
            GREEN
          </button>
          <button
          className=""
            style={{ backgroundColor: "yellow", color: "white" }}
            onClick={() => setColor("yellow")}
          >
            YELLOW
          </button>
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => setColor("black")}
          >
            BLACK
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
