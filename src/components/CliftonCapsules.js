import React, { useState, useEffect } from "react";
import "./CliftonCapsules.css";

import vsb1 from "../assets/images/vsb1.png";
import vsb2 from "../assets/images/vsb2.png";
import vsb3 from "../assets/images/vsb3.png";
import vsb4 from "../assets/images/vsb4.png";
import vsb5 from "../assets/images/vsb5.png";
import vsb6 from "../assets/images/vsb6.png";

const CliftonCapsules = () => {
  const images = [vsb1, vsb2, vsb3, vsb4, vsb5, vsb6];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="vertical-slider-wrapper">
      {/* Left side: images */}
      <div className="vertical-slider-container">
        <div
          className="vertical-slider-track"
          style={{
            transform: `translateY(-${current * 500}px)`,
          }}
        >
          {images.map((img, index) => (
            <div className="vertical-slide" key={index}>
              <img src={img} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Right side: dots */}
      <div className="vertical-dots-column">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CliftonCapsules;
