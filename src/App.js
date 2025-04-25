import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Make sure to create or update this CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
  '/images/image8.jpg',
  '/images/image9.jpg',
  '/images/image10.jpg',
  '/images/image11.jpg',
  '/images/image12.jpg',
  '/images/image13.jpg',
  '/images/image14.jpg',
  '/images/image15.jpg',
];

const cols = 3; // Number of columns in the gallery

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (event.key === 'ArrowDown') {
        setSelectedIndex((prev) => (prev + cols) % images.length);
      } else if (event.key === 'ArrowUp') {
        setSelectedIndex((prev) => (prev - cols + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-tile ${selectedIndex === index ? 'selected' : ''}`}
        >
          <img src={image} alt={`Description for item ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="home">  <marquee>
      <h1 className="animated-heading">Web-Based Image Gallery</h1></marquee>
      <Link to="/gallery">
     <center>
     <button className="btn btn-primary">Go to Gallery</button>
        </center>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;



