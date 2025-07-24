import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from "./components/Header/header.jsx";
import Hero from "./components/Hero/hero.jsx";
import About from "./components/about/about.jsx";
import Gallery, { GalleryHeader } from "./components/Gallery/gallery.jsx";
import Services from "./components/services/services.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";

import BlogPage from "./components/blog/Blog.jsx";
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

function HomePage({ animateOut }) {
  return (
    <main className={animateOut ? "slide-in" : ""}>
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
    </main>
  );
}

function AppContent({ animateOut }) {
  const location = useLocation();
  const isBlog = location.pathname.startsWith('/blog');

  return (
    <>
      <Header isBlog={isBlog} />
      <Routes>
        <Route path="/" element={<HomePage animateOut={animateOut} />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (hasSeenLoader) {
      setAnimateOut(true);
      setShowLoader(false);
    } else {
      sessionStorage.setItem("hasSeenLoader", "true");

      const timer = setTimeout(() => {
        setAnimateOut(true);
      }, 2000);

      const loaderTimeout = setTimeout(() => {
        setShowLoader(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearTimeout(loaderTimeout);
      };
    }
  }, []);

  return (
    <Router>
      {showLoader && <LoaderBackdrop animateOut={animateOut} />}
      {!showLoader && <AppContent animateOut={animateOut} />}
    </Router>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
