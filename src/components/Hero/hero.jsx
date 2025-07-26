/* eslint-disable react-hooks/exhaustive-deps */
import './hero.css';
import React, { useState, useEffect } from 'react';
import reviews from '../reviews';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <RandomTitle />
      </div>
    </div>
  );
}

const RandomTitle = () => {
  const titles = [
    'The Bug Stops Here',
    'Clean Code, Clear Vision',
    'Building the Web, Bit by Bit',
    'Code Without Borders',
    'Your Future Site Starts Here',
    'Code That Clicks',
    'Interfaces with Intent',
    'A Better Web, One Line at a Time',
    'Your Website, Expertly Built',
    'Modern Sites. Clean Code. Real Results',
    'From Idea to Online',
    'Your Business Deserves Better Code',
    'Functional, Beautiful, On Time',
  ];

  const [title, setTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set random title on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * titles.length);
    setTitle(titles[randomIndex]);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const { review, name } = reviews[currentIndex];

  return (
    <div>
      <h1>{title}</h1>
      <div className="card review-carousel">
        <button className="nav-button left" onClick={handlePrev}>
          ‹
        </button>

        <div className="review-content">
          <h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-quote quote-icon"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
            </svg>

            {review}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-quote flip quote-icon"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
            </svg>
          </h4>
          <h5>--{name}</h5>
        </div>

        <button className="nav-button right" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
};
