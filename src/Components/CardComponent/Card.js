import React, { useState } from "react";

export default function Card(props) {
  let [styleFront, setStyleFront] = useState({
    transform: `rotateY(360deg)`
  });

  // Fliping the Card
  let [styleBack, setStyleBack] = useState({
    transform: `rotateY(180deg)`
  });

  // On click flip the Card
  function clickFront() {
    setStyleFront({ transform: `rotateY(180deg)` });
    setStyleBack({
      transform: `rotateY(0deg)`,
      backgroundColor: props.index === 0 ? "#7CFFCB" : "#FE4A49"
    });

    if (props.isFlipped) {
      setStyleFront({ transform: `rotateY(180deg)` });
      setStyleBack({
        transform: `rotateY(0deg)`,
        backgroundColor: props.index === 0 ? "#7CFFCB" : "#FE4A49"
      });
    }

  }

  return (
    <div
      className="flip-card"
      data-emojitype={props.emojiType}
      data-index={props.index}
      data-isflipped={props.isFlipped}
      data-id={props.id}
    >
      <div
        className="flip-card-front"
        style={styleFront}
        onClick={clickFront}
      />
      <div className="flip-card-back" style={styleBack}>
        <h1 className="emoji-class">{props.emoji}</h1>
      </div>
    </div>
  );
}
