import myself from '../../assets/pics/myself.jpg';
import './about.css';

export default function About() {
  return (
    <div id="about" className="about">
      <div>
        <img
          id="my-portrait"
          src={myself}
          alt="A Picture of the creator of this website, Christopher"
        />
      </div>
      <div className='about-text'>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae
          aliquam culpa perspiciatis quibusdam, iure ex ullam, provident
          corporis sapiente pariatur consequatur fugit possimus, neque enim
          totam. Neque, quos explicabo.
        </p>
      </div>
    </div>
  );
}
