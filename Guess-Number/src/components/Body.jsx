import React from "react";
import { useState } from "react";
import "./Body.css";
import "typeface-press-start-2p";

const Body = () => {
  const [number, setNumber] = useState("");
  const [play, setPlay] = useState("Play");
  const [correctNum, setCorrectNum] = useState("?");
  const [textChange, setTextChange] = useState("Enter Number");
  const [win, setWin] = useState(false);
  const [attempts, setAttempts] = useState(20);

  const [createNum, setCreateNum] = useState(() => {
    Math.floor(Math.random() * 50);
  });

  console.log(createNum);

  const attemptsUsed = 20 - attempts;

  function handleReset() {
    setWin(false);
    setCreateNum(Math.floor(Math.random() * 20) + 1);
    setNumber("");
    setTextChange("Enter Number");
    setPlay("Again");
    setCorrectNum("?")
    setAttempts(20);
  }

  function handleChange() {
    if(number !== createNum) {
        setAttempts(attempts - 1);
    };

    if(win == true && win === ""){
        setWin(true);
    }

    if (number > createNum) {
      setTextChange("Gussing Higher..");
    } else if (number < createNum) {
      setTextChange("Guessing Lower");
    } else if (number === createNum) {
      setWin(true);
      setCorrectNum(createNum);
      setTextChange("🎉 Congrats You Guess The Correct Number..");
    }
  }

  return (
    <>
      <div className={`container  ${win ? "correct-bg" : ""}`}>
        <button className="btn-reset" onClick={handleReset}>
          {play}
        </button>
        <h3> Between 1 To 20 </h3>
        <h1 className="heading">Guess My Number ?</h1>
        <div className="number-box">{correctNum}</div>
        <div className="submit-info">
          <input
            onChange={(e) => setNumber(Number(e.target.value))}
            className="input-num"
            type="Number"
          />
          <button onClick={handleChange} className="check-num">
            Check
          </button>
        </div>
        <p className="message">{textChange}</p>
        <div className="score-board">
          <span>💯Score : {attempts} </span>
          <span>🥇Highscore : {attemptsUsed}</span>
        </div>
      </div>
    </>
  );
};

export default Body;
