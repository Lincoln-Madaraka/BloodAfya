import React, { useState, useEffect } from 'react';
import './BackgroundSlider.css'; // Assuming you add styles here

const images = [
  'Blood Donation campaign.jpeg',
  'Blood3.jpeg',
  'Blogotoo.jpeg',
  'Bdona.jpeg'
];

const BackgroundSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-slider" style={{ backgroundImage: `url(${images[current]})` }}></div>
  );
};

export default BackgroundSlider;