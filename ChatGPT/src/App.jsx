// import { useState } from 'react'
import logo from "./assets/ChatGPT-Logo.jpg";
import plusLogo from "./assets/add-30.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="sideBar">
          <div className="upperSide">
            <div className="flex">
              <img className="logo" src={logo} alt="" />
              <span className="">ChatGPT</span>
            </div>
            <button className="midBtn"><img className="addBtn" src={plusLogo} />New Chat</button>
            <div className="upperSideBottom"></div>
          </div>
          <div className="lowerSide"></div>
        </div>
        <div className="main"></div>
      </div>
    </>
  );
}

export default App;
