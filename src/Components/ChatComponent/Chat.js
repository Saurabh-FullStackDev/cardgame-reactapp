import React from "react";
import "./chat.css";

export default function Chat(props) {
  return (
    <div className="chat">
      <p> {props.chat} </p>
    </div>
  );
}
