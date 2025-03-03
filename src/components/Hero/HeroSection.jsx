import React, { useState, useEffect } from "react";
import "./HeroSection.css";

// Import images
import Hero1 from "../../assets/Hero1.png";
import Hero2 from "../../assets/Hero2.png";
import Hero3 from "../../assets/Hero3.png";
import Hero4 from "../../assets/Hero4.png";
import Hero5 from "../../assets/Hero5.png";

const HeroSection = () => {
  const images = [Hero1, Hero2, Hero3, Hero4, Hero5];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [exitingSlide, setExitingSlide] = useState(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setExitingSlide(currentSlide);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide, images.length]);

  return (
    <div className="HeroSection">
      <div className="HeroSlider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${
              index === currentSlide
                ? "active"
                : index === exitingSlide
                ? "exiting"
                : ""
            }`}
          />
        ))}
      </div>
      <div className="HeroContent">
        <p className="hero-subtitle">EDUKIT FOUNDATION</p>
        <h1 className="hero-title">
          BRIDGING GAPS, <br />
          BUILDING FUTURES!
        </h1>
        <p className="hero-small-text">
          Equipping students with essential resources today for a brighter
          future.
        </p>
        <div className="hero-buttons">
          <button className="donation">Make a Donation</button>
          <button className="request">Make a Request</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
