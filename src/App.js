import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "img/helmet-1.png" },
  { src: "img/potion-1.png" },
  { src: "img/ring-1.png" },
  { src: "img/scroll-1.png" },
  { src: "img/shield-1.png" },
  { src: "img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(0);
  const [choiceTwo, setChoiceTwo] = useState(0);


  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0)
  };
  

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card}/>
        ))}
      </div>
      <div className="turn">
        <p>Turns: {turns}</p>
      </div>
    </div>
  );
}
export default App;
