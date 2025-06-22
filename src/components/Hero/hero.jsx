/* eslint-disable react-hooks/exhaustive-deps */
import './hero.css';
import React, { useState, useEffect } from 'react';



export default function Hero() {
  return (
    <div className="hero">
      <RandomTitle />
    </div>
  );
}

const RandomTitle = () => {
  const titles = [
    'The Bug Stops Here',
    'Clean Code, Clear Vision',
    'Building the Web, Bit by Bit',
    "Code Without Borders",
    'Your Future Site Starts Here',
    "Code That Clicks",
    "Interfaces with Intent",
    "A Better Web, One Line at a Time",
    "Your Website, Expertly Built",
    "Modern Sites. Clean Code. Real Results",
    "From Idea to Online",
    "Your Business Deserves Better Code",
    "Functional, Beautiful, On Time"
  ];

  const [title, setTitle] = useState('');

  useEffect(() => {
    // Pick a random title when the component mounts
    const randomIndex = Math.floor(Math.random() * titles.length);
    setTitle(titles[randomIndex]);
  }, [titles]);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
