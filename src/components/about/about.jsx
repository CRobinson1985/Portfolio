import myself from "../../assets/pics/myself.jpg";
import "./about.css";

export default function About() {
  return (
    <div id="about" className="about">
      <img id="my-portrait" src={myself} alt="A Picture of the creator of this website, Christopher" />
      <h2>About Me</h2>
      <p>I am a man. And that is all that I am.</p>
    </div>
  );
}