import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewProducts.css";

// Import images
import np1 from "../../assets/images/np1.png";
import np2 from "../../assets/images/np2.png";
import np3 from "../../assets/images/np3.png";
import np4 from "../../assets/images/np4.png";
import viewIcon from "../../assets/images/view.png";

// Coffee
import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";
import c4 from "../../assets/images/c4.png";
import c5 from "../../assets/images/c5.png";
import c6 from "../../assets/images/c6.png";

// Capsule
import cap1 from "../../assets/images/cap1.png";
import cap2 from "../../assets/images/cap2.png";
import cap3 from "../../assets/images/cap3.png";
import cap4 from "../../assets/images/cap4.png";

const NewProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const coffeeProducts = [
    { id: 1, img: c1, title: "Clifton", desc: "Premium Arabica blend", price: "£15.50" },
    { id: 2, img: c2, title: "Panama Coffee", desc: "From El Vergni Estate", price: "£18.00" },
    { id: 3, img: c3, title: "Ethiopian Blend", desc: "Single origin beans", price: "£16.75" },
    { id: 4, img: c4, title: "Colombian Roast", desc: "Medium-dark roast", price: "£14.50" },
    { id: 5, img: c5, title: "Brazilian Gold", desc: "Smooth and balanced", price: "£13.99" },
    { id: 6, img: c6, title: "Kenyan AA", desc: "Bright and fruity", price: "£17.25" }
  ];

  const capsuleProducts = [
    { id: 1, img: cap1, title: "Espresso Capsule", desc: "Strong and intense", price: "£12.50" },
    { id: 2, img: cap2, title: "Lungo Capsule", desc: "Long and aromatic", price: "£13.00" },
    { id: 3, img: cap3, title: "Decaf Capsule", desc: "Full flavor without caffeine", price: "£11.75" },
    { id: 4, img: cap4, title: "Special Blend", desc: "Limited edition", price: "£14.50" }
  ];

  const allProducts = [...coffeeProducts, ...capsuleProducts];

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : activeCategory === "Coffee"
      ? coffeeProducts
      : capsuleProducts;

  const leftImage =
    activeCategory === "Coffee"
      ? c6
      : activeCategory === "Capsule"
      ? cap3
      : np1;

  const PrevArrow = ({ onClick }) => (
    <button className="custom-arrow prev" onClick={onClick}>
      &lt;
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button className="custom-arrow next" onClick={onClick}>
      &gt;
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    rtl: false, // LTR auto-scroll
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="new-products-container">
      <div className="new-products-header">
        <h2>New Products</h2>
        <p>Discover our premium coffee collections crafted for every taste!</p>
      </div>

      <div className="new-products-content">
        {/* Left Section */}
        <div className="left-image-section">
          {activeCategory === "All" ? (
            <div className="image-grid">
              {[np1, np2, np3, np4].map((img, index) => (
                <div key={index} className="image-container">
                  <img src={img} alt={`Product ${index + 1}`} />
                  <div className="image-overlay">
                    <img src={viewIcon} alt="View" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="single-image-container">
              <img src={leftImage} alt="Featured Product" />
              <div className="image-overlay">
                <img src={viewIcon} alt="View" />
              </div>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="right-content-section">
          <div className="category-nav">
            {["Coffee", "Capsule", "All"].map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="products-slider">
            <Slider {...settings}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.img} alt={product.title} />
                  </div>
                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <p>{product.desc}</p>
                    <div className="product-price">{product.price}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
