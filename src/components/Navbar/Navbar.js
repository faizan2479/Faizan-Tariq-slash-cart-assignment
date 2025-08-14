import React, { useState } from "react";
import { FaUser, FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import bgn from "../../assests/images/bgn.png";
import shopcris from "../../assests/images/shopcris.png";
import coffee from "../../assests/images/cofee.png";
import subs from "../../assests/images/subs.png";
import accessories from "../../assests/images/ascr.png";
import searchImg from "../../assests/images/search.png";

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (item, img) => {
    if (activeItem?.name === item) {
      setActiveItem(null);
    } else {
      setActiveItem({ name: item, image: img });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className="header-container"
      style={{
        backgroundImage: `url(${bgn})`,
      }}
    >
      {/* Mobile Menu Button */}
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navbar */}
      <nav className={`navbar ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        {/* Left Menu */}
        <ul className="nav-left">
          <li onClick={() => handleClick("shop", shopcris)}>
            Shop Christmas {activeItem?.name === "shop" ? "▲" : "▼"}
          </li>
          <li onClick={() => handleClick("coffee", coffee)}>
            Coffee {activeItem?.name === "coffee" ? "▲" : "▼"}
          </li>
          <li onClick={() => handleClick("subs", subs)}>
            Subscriptions {activeItem?.name === "subs" ? "▲" : "▼"}
          </li>
          <li onClick={() => handleClick("accessories", accessories)}>
            Accessories {activeItem?.name === "accessories" ? "▲" : "▼"}
          </li>
        </ul>

        {/* Logo */}
        <div className="logo">
          <h1>CLIFTON</h1>
          <p>COFFEE ROASTERS</p>
        </div>

        {/* Right Menu */}
        <ul className="nav-right">
          <li>Wholesale</li>
          <li>Education</li>
          <li>Our Ethos</li>
          <li><FaUser /></li>
          <li onClick={() => handleClick("search", searchImg)}><FaSearch /></li>
          <li><FaShoppingCart /></li>
        </ul>
      </nav>

      {/* Display Selected Image */}
      {activeItem && (
        <div className="image-display">
          <img src={activeItem.image} alt="Selected content" />
        </div>
      )}
    </div>
  );
}

export default Navbar;