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
    setActiveItem(activeItem?.name === item ? null : { name: item, image: img });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div
      className="header-container"
      style={{ backgroundImage: `url(${bgn})` }}
    >
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-button" 
        onClick={toggleMobileMenu}
        aria-label="Menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navbar */}
      <nav 
        className={`navbar ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Left Menu */}
        <ul className="nav-left">
          <li onClick={() => { handleClick("shop", shopcris); closeMobileMenu(); }}>
            Shop Christmas {activeItem?.name === "shop" ? "▲" : "▼"}
          </li>
          <li onClick={() => { handleClick("coffee", coffee); closeMobileMenu(); }}>
            Coffee {activeItem?.name === "coffee" ? "▲" : "▼"}
          </li>
          <li onClick={() => { handleClick("subs", subs); closeMobileMenu(); }}>
            Subscriptions {activeItem?.name === "subs" ? "▲" : "▼"}
          </li>
          <li onClick={() => { handleClick("accessories", accessories); closeMobileMenu(); }}>
            Accessories {activeItem?.name === "accessories" ? "▲" : "▼"}
          </li>
        </ul>

        {/* Logo */}
        <div className="logo" onClick={closeMobileMenu}>
          <h1>CLIFTON</h1>
          <p>COFFEE ROASTERS</p>
        </div>

        {/* Right Menu */}
        <ul className="nav-right">
          <li onClick={closeMobileMenu}>Wholesale</li>
          <li onClick={closeMobileMenu}>Education</li>
          <li onClick={closeMobileMenu}>Our Ethos</li>
          <li onClick={closeMobileMenu}><FaUser aria-label="Account" /></li>
          <li onClick={() => { handleClick("search", searchImg); closeMobileMenu(); }}>
            <FaSearch aria-label="Search" />
          </li>
          <li onClick={closeMobileMenu}><FaShoppingCart aria-label="Cart" /></li>
        </ul>
      </nav>

      {/* Display Selected Image */}
      {activeItem && (
        <div className="image-display">
          <img 
            src={activeItem.image} 
            alt={`Selected ${activeItem.name} content`} 
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;