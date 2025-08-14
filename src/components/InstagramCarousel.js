import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./InstagramCarousel.css";

import i1 from "../assets/images/i1.png";
import i2 from "../assets/images/i2.png";
import i3 from "../assets/images/i3.png";
import i4 from "../assets/images/i4.png";
import i5 from "../assets/images/i5.png";
import i6 from "../assets/images/i6.png";
import i7 from "../assets/images/i7.png";

const InstagramCarousel = () => {
  const images = [i1, i2, i3, i4, i5, i6, i7];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="insta-container">
      <h2 className="insta-title">@cliftoncoffee</h2>
      <p className="insta-subtitle">
        Follow us on Instagram for the latest updates!
      </p>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="insta-card">
            <img src={img} alt={`insta-${index}`} className="insta-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramCarousel;
