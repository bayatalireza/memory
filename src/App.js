import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disable, setDisable] = useState(false);
 

  //Doubling and shuffling the order of items

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()})) 
    console.log(shuffledCards)
    setCards(shuffledCards)
  }

  // Choose the first and second card

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)   
    console.log(card);
    
  }

  useEffect(() => {
    if(choiceOne && choiceTwo){
      setDisable(true)
      if(choiceOne.src === choiceTwo.src){
        setCards((prevCard)=> prevCard.map((card)=>{
          if(card.src === choiceOne.src){
            return {...card, matched : true}
          }else{
            return card
          }
        }))
        console.log(cards);
        
        console.log('match');
        resetCard()
      }else{
        console.log('not match');
        setTimeout(()=>resetCard(), 1000)

      }
    }
  },[choiceOne, choiceTwo])

  // Reset the game

  const resetCard = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((pevTurns) => pevTurns + 1)
    setDisable(false)
  }

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards} >New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} handleChoice={handleChoice} disable={disable} key={card.id} />
        ))}
      </div>
      <div className="turns">
        <p>Turns: {turns}</p>
      </div>
    </div>
  );
}

export default App;
