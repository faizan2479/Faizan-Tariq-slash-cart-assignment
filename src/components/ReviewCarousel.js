import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewCarousel.css";

import r1 from "../assets/images/r1.png";
import r2 from "../assets/images/r2.png";
import r3 from "../assets/images/r3.png";
import r4 from "../assets/images/r4.png";
import r5 from "../assets/images/r5.png";

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

const ReviewCarousel = () => {
  const reviews = [r1, r2, r3, r4, r5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Only 3 at a time
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
      <h2 className="favorites-title">Thousands of 5 Star Reviews</h2>
      <Slider {...settings}>
        {reviews.map((img, idx) => (
          <div key={idx} className="favorite-card">
            <img src={img} alt={`review-${idx}`} className="favorite-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
