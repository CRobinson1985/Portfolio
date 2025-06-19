import pointingHand from "../assets/pics/pointing-hand.png";
import myself from "../assets/pics/Myself.jpg";
import coolGuy from "../assets/pics/cool-guy.jpg";


export default function Hero(props) {
  // state to track whether we are showing the "original" or "cool guy"
  

  const handleClick = () => {
    props.setIsCoolGuy((prev) => !prev);
  };

  return (
    <div className="pic-div hero">
      <img
        src={pointingHand}
        alt="cartoon-sized hand pointing left"
        className={`pointing-left hand ${props.isCoolGuy ? '' : 'hidden'}`}
      />
      <img
        onClick={handleClick}
        src={props.isCoolGuy ? coolGuy : myself}
        alt="A cool guy's picture"
        id="bust"
        className="bust"
      />
      <img
        src={pointingHand}
        alt="cartoon-sized hand pointing right"
        className={`pointing-right hand ${props.isCoolGuy ? '' : 'hidden'}`}
      />
      
      <h2>{props.isCoolGuy ? "Innovative. Bold. Slightly Ridiculous." : "Building the future through creativity, technology, and a little fun!"}</h2>
    </div>
  )
}