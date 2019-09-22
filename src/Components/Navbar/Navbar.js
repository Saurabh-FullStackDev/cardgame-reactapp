import React from "react";
import "./navbar.css";

export default function Navbar(props) {
  return (
    <ul className="navbar">
      <li>
        <h2 className="title"> React Emoji Game App </h2>
      </li>
      <li>
        <h1 className="developer"> Developed by Saurabh </h1>
      </li>
      <li>
        <span role="img" className="good-score-bar" aria-label="goodscore">
          {" "}
          😍 {props.goodScore}{" "}
        </span>
      </li>
      <li>
        <span role="img" aria-label="badscore">
          {" "}
          😈 {props.badScore}{" "}
        </span>
      </li>
      <li>
        <span role="img" aria-label="coins">
          {" "}
          🤑 {props.coins}{" "}
        </span>
      </li>
    </ul>
  );
}
