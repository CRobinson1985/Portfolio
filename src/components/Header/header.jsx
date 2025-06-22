import "./header.css"

export default function Header() {
  return (
<header>
  <nav className="navbar">
    <a href="#about"><button>About Me</button></a>
    <a href="#gallery"><button>Gallery</button></a>
    <a href="#services"><button>Services</button></a>
    <a href="#contact"><button className="contact-btn">Contact Me</button></a>
  </nav>
</header>
  );

}