import React from "react";
import "./Header.css";
import Undraw from "../../imgs/undraw.svg";
export default function Header(props) {
  return (
    <div className="nav">
      <div>
        <img src={Undraw} alt="undraw" className="nav-image"></img>
      </div>
      <div className="nav-title">
        <span className="nav-title-main">Your favourite tunes</span>
        <span className="nav-title-sub">All ☀️ and all 🌙</span>
      </div>
    </div>
  );
}
