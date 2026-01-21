import React from "react";
import { useState } from "react";
// import Board from "./Board";
import "./App.css";
import crossImg from "../assets/cross.png";
import circleImg from "../assets/circle.png";


const App = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner(newBoard) {
    for (let patterns of wins) {
      const [a, b, c] = patterns;

      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[b] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    if (board[index] !== "" || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
      return;
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function handleReset(){
    setBoard(["", "", "", "", "", "", "", "", "",]);
    setWinner("");
    setCurrentPlayer("X");
  }

  return (
    <>
      <div className="container">
        <h1 className="title">
          TIC-TAC-TOE <span>React</span>
        </h1>
        {winner ? <h2>Congrats {winner} Wins 🎉</h2> : ""}
        <div className="board">
          {board.map((value, index) => (
            <div className="box" onClick={() => handleClick(index)} key={index}>
              {value === "X" && <img src={crossImg} style={{width: "60px", height: "60px"}} />}
              {value === "O" && <img src={circleImg} style={{width: "80px", height: "80px"}} />}
            </div>
            // <Board key={index} value={value} onClick />
          ))}
        </div>
        <button onClick={handleReset} className="btn-reset">Reset</button>
      </div>
    </>
  );
};

export default App;
