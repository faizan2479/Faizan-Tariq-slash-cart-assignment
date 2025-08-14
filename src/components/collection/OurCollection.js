import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurCollection.css";

// Import images
import c1 from "../../assests/images/c1.png";
import c2 from "../../assests/images/c2.png";
import c3 from "../../assests/images/c3.png";
import c4 from "../../assests/images/c4.png";
import c5 from "../../assests/images/c5.png";
import c6 from "../../assests/images/c6.png";

// Custom Arrow Components
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

const OurCollection = () => {
  const collections = [
    { image: c1, title: "All Coffee" },
    { image: c2, title: "Clifton Tea" },
    { image: c3, title: "Clifton Merchandise" },
    { image: c4, title: "Premium Coffee" },
    { image: c5, title: "Special Tea Blends" },
    { image: c6, title: "Gift Packs" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="collection-container">
      <h2 className="collection-title">Our New Collection</h2>
      <Slider {...settings}>
        {collections.map((item, index) => (
          <div key={index} className="collection-card">
            <img src={item.image} alt={item.title} className="collection-image" />
            <h3 className="collection-name">{item.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurCollection;
