import myself from '../../assets/pics/Me.jpg';
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
        As a kid, I'd always loved computers. They blew my mind, how much you
        could do with them! From gaming to communicating with others, to
        performing math and writing, it fascinated me. When I grew into my
        teens, I took a deeper dive into computers by teaching myself how to
        code in HTML with just an HTML guide book. I consumed it and enjoyed
        every moment of it. Eventually, I also acquired a guide for Visual Basic
        and C, and started the devouring them, as well.
      </p>
      <br />
      <p>
        My career life as a young adult had gone a different route from coding,
        however. When I was young, I had figured I would need a degree to ever
        get into coding, but the time to get a degree, as younger me, seemed too
        far away. I wish I could have slapped my younger self, honestly! If only
        I knew what I was capable of doing at the time! After that, life took me
        into the realm of cars. I fell in love with them and wanted to know the
        in's and outs of them. So, I became an automotive mechanic and fixed cars
        for a number years. Eventually, I found an opportunity to go into sales,
        and jumped at the chance. I've sold automotive service, then brand new
        Automobiles. Ultimately, ending my sales journey in mattress sales.
      </p>
      <br />
      <p>
        Now, 25+ years after I initially found that love for coding, my passion
        has been reignited. I have completed a number of great courses on
        Full-stack Web Development, JavaScript, TypeScript, and Responsive Web
        Design. I have also been working hard on some great real-world projects.
        One of my projects that I am most proud of being the first in my gallery
        for an amazing Italian and Biology teacher. My Journey has been a long
        and winding road. But it's interesting how things can come back around
        eventually to where you are meant to be. And, Coding is 100% where I am
        meant to be.
      </p>
    </div>
  );
}
