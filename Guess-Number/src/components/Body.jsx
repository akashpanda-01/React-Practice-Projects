import React from "react";
import { useState } from "react";
import "./Body.css";
import 'typeface-press-start-2p';

const Body = () => {
    const [number, setNumber] = useState("");
    const [textChange, setTextChange] = useState();

    function handleChange(e) {

        if(!number){
            setTextChange("Enter a Number ")
        } 
    }

    return(
        <>
        <div className="container">
            <button className="btn-reset">Again</button>
            <h1 className="heading">Guess My Number ?</h1>
            <div className="number-box">{number}</div>
            <div className="submit-info">
                <input onChange={(e) => setNumber(e.target.value)} className="input-num" type="Number"/>
                <button onClick={handleChange} className="check-num">Check</button>
            </div>
            <p className="message">🎉 Correct Number ?</p>
            <div className="score-board">
                <span>💯Score</span>
                <span>🥇Highscore</span>
            </div>
        </div>
        </>
    )
};

export default Body;