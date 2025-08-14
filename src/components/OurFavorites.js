import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurFavorites.css";

import f1 from "../assets/images/f1.png";
import f2 from "../assets/images/f2.png";
import f3 from "../assets/images/f3.png";
import f4 from "../assets/images/f4.png";
import f5 from "../assets/images/f5.png";
import f6 from "../assets/images/f6.png";

import buyImg from "../assets/images/buy.png"; // buy.png ka path

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    &#60;
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    &#62;
  </div>
);

const OurFavorites = () => {
  const favorites = [f1, f2, f3, f4, f5, f6];
  const [hoverIndex, setHoverIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Our Favorites</h2>
      <Slider {...settings}>
        {favorites.map((img, idx) => (
          <div
            key={idx}
            className="favorite-card"
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src={hoverIndex === idx ? buyImg : img}
              alt={`favorite-${idx}`}
              className="favorite-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurFavorites;
