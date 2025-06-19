import { createRoot } from 'react-dom/client';
import Header from "./components/header";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import { useState, useEffect } from 'react';
import data from "./components/data.js";
import lightSpeed from './assets/pics/light-speed.gif';

function LoaderBackdrop() {
  return (
    <div id="loader-backdrop">
      <img src={lightSpeed} alt="Light Speed Travel" />
      <h3>Loading, Please Wait...</h3>
    </div>
  );
}

export default function App() {
  const [isCoolGuy, setIsCoolGuy] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoaderBackdrop />;
  }

  return (
    <div>
      <Header isCoolGuy={isCoolGuy} />
      <Hero isCoolGuy={isCoolGuy} setIsCoolGuy={setIsCoolGuy} />
      <h2>Check out some of my recent projects:</h2>
      
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
      
      <Footer />
    </div>
  );
}

const container = document.getElementById('root'); 
const root = createRoot(container);

root.render(<App />);