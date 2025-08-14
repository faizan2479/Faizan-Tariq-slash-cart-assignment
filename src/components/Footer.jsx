import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Newsletter</h2>
        <p>The latest coffees, offers and news from the Clifton.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email address" />
          <button>→</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Certified & Social */}
          <div className="footer-section footer-logo">
            <div>
              <img src="/path-to-bcorp-logo.png" alt="Certified B Corporation" />
              <p>Certified<br />Corporation</p>
            </div>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Shop */}
          <div className="footer-section">
            <h3>Shop</h3>
            <ul>
              <li>Clifton Merchandise</li>
              <li>Brewing Equipment</li>
              <li>Clifton Hot Chocolate</li>
              <li>Clifton Tea</li>
              <li>Gift Card</li>
            </ul>
          </div>

          {/* Coffee */}
          <div className="footer-section">
            <h3>Coffee</h3>
            <ul>
              <li>All Coffee</li>
              <li>House Coffees</li>
              <li>Single Origin</li>
              <li>Clifton Capsules</li>
              <li>Unparalleled Series</li>
            </ul>
          </div>

          {/* Our Ethos */}
          <div className="footer-section">
            <h3>Our Ethos</h3>
            <ul>
              <li>About Us</li>
              <li>Resources</li>
              <li>Origin Films</li>
              <li>Careers</li>
              <li>HQ Virtual Tour</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-envelope"></i> sales@cliftoncoffee.co.uk</p>
            <p><i className="fas fa-phone"></i> +44 (0) 1179 820 252</p>
            <p><i className="fas fa-map-marker-alt"></i> Write address here..</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>2025 © Clifton Coffee Roasters | Privacy Policy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
