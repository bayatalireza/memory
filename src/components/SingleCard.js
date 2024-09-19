import "./SingleCard.css";

function SingleCard({ card, handleChoice, disable, flipped}) {

  const handleClick = () => {
    if(!disable){
      handleChoice(card)
    }
  }

  return (
    <div className="card" >
      <div className={flipped ? "flipped" : ''}>
        <img src={card.src} alt="Front Card" className="front" />
        <img
          src="/img/cover.png"
          alt="Back Card"
          className="Back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingleCard;
