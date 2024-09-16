import "./SingleCard.css";

function SingleCard({card}){
    return(
        <div className="card" >
        <div>
          <img src={card.src} alt="Card Front" className="front" />
          <img src="img/cover.png" alt="Card Back" className="back" />
        </div>
      </div>
    )
}

export default SingleCard;