import { createRoot } from 'react-dom/client';
import Header from "./components/Header/header.jsx";
import Hero from "./components/Hero/hero.jsx";
import About from "./components/about/about.jsx";
import Gallery, { GalleryHeader } from "./components/Gallery/gallery.jsx";
import Services from "./components/services/services.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";
import { useState, useEffect } from 'react';
import data from "./components/data.js";
import oceanWaves from "./assets/pics/Ocean-Waves.mp4";

function LoaderBackdrop({ animateOut }) {
  return (
    <div id="loader-backdrop" className={animateOut ? "slide-down" : ""}>
      <video src={oceanWaves} autoPlay loop muted />
      <h3>Loading, Please Wait...</h3>
    </div>
  );
}

export default function App() {
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOut(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <LoaderBackdrop animateOut={animateOut} />

      <main className={animateOut ? "slide-in" : ""}>
        <Header />
        <Hero />
        <About />
        <GalleryHeader />
        {data.map((item, index) => (
          <Gallery
            key={index + item.name}
            name={item.name}
            link={item.link}
            alt={item.alt}
            description={item.description}
            img={item.img}
          />
        ))}
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
