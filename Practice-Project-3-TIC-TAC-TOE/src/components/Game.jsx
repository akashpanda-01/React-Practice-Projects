import React, { useState } from "react";
import "./Game.css";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";
// import Board from "./Board.jsx";
// import Head from "./Head.jsx";
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [3, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

const TicTacToe = () => {
  const [count, setCount] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  function checkWinner(updateBoard) {
    for (let pattern of wins) {
      const [a, b, c] = pattern;

      if (
        updateBoard[a] &&
        updateBoard[a] === updateBoard[b] &&
        updateBoard[b] === updateBoard[c]
      ) {
        return updateBoard[a];
      }
    }
    return null;
  }

  function btnClick(e) {
    if (count[e] !== "" || winner !== "") return;

    const updateBoard = [...count];
    updateBoard[e] = turn;
    setCount(updateBoard);

    const win = checkWinner(updateBoard);
    if (win) {
      setWinner(win);
      return;
    }
    setTurn(turn === "X" ? "O" : "X");
  }

  function resetGame() {
    setCount(["", "", "", "", "", "", "", "", ""]);
    setTurn("X");
    setWinner("");
  }

  return (
    <>
      <div className="container">
        <h1 className="title">
          TIC-TAC-TOE <span>REACT</span>
        </h1>
        <h2>{winner}</h2>
        <div className="board">
          {count.map((value, index) => (
            <div
              key={index}
              className="boxes"
              onClick={() => btnClick(index)}
            >
              {value === "X" && <img src={cross} style={{width: "70px", height: "70px"}} />}
              {value === "O" && <img src={circle} style={{width: "70px", height: "70px"}} />}
            </div>
          ))}
        </div>
        <button className="reset" onClick={resetGame}>
          Reset
        </button>
      </div>
    </>
  );
};
export default TicTacToe;
