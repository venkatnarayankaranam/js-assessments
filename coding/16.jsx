import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const images = [
  'https://via.placeholder.com/600x400?text=Slide+1',
  'https://via.placeholder.com/600x400?text=Slide+2',
  'https://via.placeholder.com/600x400?text=Slide+3',
  'https://via.placeholder.com/600x400?text=Slide+4',
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <h1>React Carousel</h1>
      <Carousel />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
