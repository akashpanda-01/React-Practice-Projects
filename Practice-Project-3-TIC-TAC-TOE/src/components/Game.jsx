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
    if(win){
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
          <div className="row1">
            <div className="boxes" onClick={() => btnClick(0)}>
              {count[0] === "X" && <img src={cross} />}
              {count[0] === "O" && <img src={circle} />}
            </div>
            <div className="boxes" onClick={() => btnClick(1)}>
              {count[1] === "X" && <img src={cross} />}
              {count[1] === "O" && <img src={circle} />}
            </div>
            <div className="boxes" onClick={() => btnClick(2)}>
              {count[2] === "X" && <img src={cross} />}
              {count[2] === "O" && <img src={circle} />}
            </div>
          </div>
          <div className="row2">
            <div className="boxes" onClick={() => btnClick(3)}>
              {count[3] === "X" && <img src={cross} />}
              {count[3] === "O" && <img src={circle} />}
            </div>
            <div className="boxes" onClick={() => btnClick(4)}>
              {count[4] === "X" && <img src={cross} />}
              {count[4] === "O" && <img src={circle} />}
            </div>
            <div className="boxes" onClick={() => btnClick(5)}>
              {count[5] === "X" && <img src={cross} />}
              {count[5] === "O" && <img src={circle} />}
            </div>
          </div>
          <div className="row3">
            <div className="boxes" onClick={() => btnClick(6)}>
              {count[6] === "X" && <img src={cross} />}
              {count[6] === "O" && <img src={circle} />}
            </div>
            <div className="boxes" onClick={() => btnClick(7)}>
              {count[7] === "X" && <img src={cross} />}
              {count[7] === "O" && <img src={circle} />}
            </div>
            <div className="boxes" onClick={() => btnClick(8)}>
              {count[8] === "X" && <img src={cross} />}
              {count[8] === "O" && <img src={circle} />}
            </div>
          </div>
        </div>
        <button className="reset" onClick={resetGame}>
          Reset
        </button>
      </div>
    </>
  );
};
export default TicTacToe;
