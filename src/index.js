import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import buttonEndIcon from "./game-datas/icons/icons8-circle-100.png";
import buttonChatIcon from "./game-datas/icons/icons8-chat-100.png";
import Chat from "./Components/ChatComponent/Chat";
import chats from "./game-datas/pcChats";
import { allCardsData, AllCards } from "./Components/CardComponent/AllCards";
import Navbar from "./Components/Navbar/Navbar";
import ReactTooltip from "react-tooltip";

function App() {
  let [goodScore, setGoodScore] = useState(0);
  let [badScore, setBadScore] = useState(0);
  let [coins, setCoins] = useState(1);

  let [chatRoomBlockWidth, setChatRoomBlockWidth] = useState(5);
  let [allCardsBlockWidth, setAllCardsBlockWidth] = useState(
    window.innerWidth - 50
  );

  // Toogle Chat Tab
  let [isChatClosed, setIsChatClosed] = useState(false);

  // All Chats
  let [allChats] = useState(["Lets Play"]);

  // MAIN APPLICATION FUNCTION
  function onCardClick(card, cardType, isFlip, cardId) {
    if (cardType === "goodEmoji") {
      setGoodScore(goodScore++);
    } else if (cardType === "badEmoji") {
      setBadScore(badScore++);
    } else if (cardType === "SeekerCard") {
      setCoins(coins++);
    }

    // Deploying Chats

    // HACK TO PREVENT ERROR
    if (isFlip.className === 'flip-card-back' || isFlip.className === 'main') {
      return;
    } else {
      if (isFlip.dataset.isflipped) {
        allChats.push(
          chats[cardType][
            Math.round(Math.random() * (chats[cardType].length - 1))
          ]
        );
      }
    }

    

    // SMALL HACK 
    if (!isFlip.dataset.isflipped) {
      isFlip.dataset.isflipped = true;
    }

    // Changing Flipping State of Clicked Card
    isFlip.dataset.isflipped = true;

    //Changing Flippig State of AllCardsData
    if (!isFlip) {
      allCardsData[cardId].isFlipped = true;
    }


    if (isFlip.dataset.isflipped === undefined) {
      isFlip.dataset.isflipped = true;
    }

    return;
  }

  // End Button Function
  const endButton = () => {
    let isAllCardsFlipped = true;

    if (isAllCardsFlipped) {
      alert("Game over!");
      window.location.reload();
    } else {
      alert("Nope! Not all Cards get Flipped");
    }
  };

  // Open or Close Chat Room
  const chatButton = () => {
    if (isChatClosed) {
      setChatRoomBlockWidth(5);
      setAllCardsBlockWidth(window.innerWidth - 50);
    } else {
      setChatRoomBlockWidth(400);
      setAllCardsBlockWidth(window.innerWidth - 400);
    }

    setIsChatClosed(!isChatClosed);
  };

  useEffect(() => {
    setGoodScore(goodScore++);
    setBadScore(badScore++);
  });

  return (
    <div className="App">
      <div>
        <Navbar goodScore={goodScore} badScore={badScore} coins={coins} />
      </div>

      <div className="main">
        <div
          className="allCards-block"
          style={{ width: `${allCardsBlockWidth}px` }}
          onClick={e => {
            onCardClick(
              e.target,
              e.target.parentNode.dataset.emojitype,
              e.target.parentNode,
              e.target.parentNode.dataset.id
            );
          }}
        >
          <ReactTooltip />
          <AllCards />
        </div>

        <div
          className="chat-block"
          style={{ width: `${chatRoomBlockWidth}px` }}
        >
          {allChats.map((el, i) => (
            <Chat chat={el} key={i} />
          ))}
        </div>
      </div>

      <div>
        <img
          src={buttonEndIcon}
          alt="End"
          onClick={endButton}
          className="end-button"
        />
        <img
          src={buttonChatIcon}
          alt="Chat"
          onClick={chatButton}
          className="chat-button"
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
