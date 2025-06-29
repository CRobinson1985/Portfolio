import myself from '../../assets/pics/Myself.jpg';
import './about.css';

export default function About() {
  return (
    <div id="about" className="about">
      <img
        id="my-portrait"
        src={myself}
        alt="A Picture of the creator of this website, Christopher"
      />

      <h2>About Me</h2>
      <p>
        As a kid, I always had a love for computers. They blew my mind with how
        much you could do with them. When I grew ino my mid teens, I taught
        myself how to code in HTML with a guide to programming. I consumed it
        and enjoyed every moment of it. Eventually, I also acquired a guide for
        Visual Basic and C, and started the process learning them on my own.
      </p>
      <p>
        My career life as a young adult had gone a different route from coding,
        however. When I was young, I had figured I would need a degree to ever
        get into coding, but the time to get a degree, as younger me, seemed too
        far away. I wish I could have slapped my younger self, honestly! Life
        took me into the realm of cars. I fell in love with them and wanted to
        know the in's and outs of them. So, I became an automotive mechanic. I
        fixed cars for a number years. Eventually, I found an opportunity to go
        into Sales, and jumped at the chance. I've sold automotive service, then
        brand new Automobiles, and finally mattresses.
      </p>
      <p>
        Now, 25+ years after I initially found that love for coding, my passion
        has been reignited. I have completed a number of great courses on
        Full-stack Web Development, JavaScript, TypeScript, and Responsive Web
        Design. My Journey has been a long and winding road. But it's
        interesting how things can come back around eventually to where you are
        meant to be. And, Coding is 100% where I am meant to be.
      </p>
    </div>
  );
}
