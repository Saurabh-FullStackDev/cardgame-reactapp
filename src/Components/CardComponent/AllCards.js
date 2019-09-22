import React from "react";
import Card from "./Card";

// No of Cards to Render
let noCards = [];

// Data of All Cards

let allCardsData;

function noOfCards() {
  for (let i = 0; i < 30; i++) {
    noCards[i] = i;
  }
}

// RETURNING TYPE OF EMOJI FOR SCORE

const typeOfEmoji = emojiClas => {
  if (emojiClas === 0) {
    return "goodEmoji";
  } else if (emojiClas === 1) {
    return "badEmoji";
  } else if (emojiClas === 2) {
    return "coins";
  }
};

const allEmojis = [
  [
    "😀",
    "😊",
    "😍",
    "🤗",
    "😉",
    "😚",
    "🙂",
    "🤩",
    "😎",
    "😁",
    "🤣",
    "😙",
    "😜",
    "😝"
  ],
  [
    "😫",
    "☠",
    "👺",
    "😱",
    "😡",
    "🤬",
    "👿",
    "😈",
    "💀",
    "👻",
    "😨",
    "😭",
    "😤",
    "🤢"
  ],
  ["👁", "👀"]
];

// RETURNING RANDOM NO. FOR EMOJIS

const randomEmoji = () => {
  return {
    emojiClass: Math.round(Math.random()),
    emoji: Math.floor(Math.random() * allEmojis[0].length)
  };
};

noOfCards();

// Defining Data for all Cards

allCardsData = noCards.map((el, i) => {
  let { emojiClass, emoji } = randomEmoji();
  let emoj = allEmojis[emojiClass][emoji];
  let emojClass = typeOfEmoji(emojiClass);

  // Random Card for Secret Seek
  let seekCard = allEmojis[2][Math.round(Math.random())];

  // Any random Position for Seek Card
  let positionSeekCard = Math.round(Math.random() * noCards.length);

  if (i !== positionSeekCard) {
    // Returning Simple Card
    return {
      key: i,
      emoji: emoj,
      emojiType: emojClass,
      index: emojiClass,
      isFlipped: false,
      styleFront: { transform: " rotateY(360deg)" },
      styleBack: { transform: " rotateY(180deg)" }
    };
  } else {
    // Returning Single Secret Seeker Card (SSSC)
    return {
      key: 100,
      emoji: seekCard,
      emojiType: "SeekerCard",
      index: 2,
      isFlipped: false
    };
  }
});


function AllCards(props) {
  return (
    <>
      {allCardsData.map((el, i) => (
        <Card
          key={i}
          emoji={el.emoji}
          emojiType={el.emojiType}
          index={el.index}
          isFlipped={el.isFlipped}
          id={i}
          playing={true}
          data-tip="hello world"
        />
      ))}
    </>
  );
}

export { allCardsData, AllCards };
