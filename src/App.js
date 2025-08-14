import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import OurCollection from "./components/collection/OurCollection";
import NewProduct from "./components/newproduct/NewProducts";
import Banner from "./components/Banner";
import CliftonCapsules from "./components/CliftonCapsules"; // Vertical slider section
import OurFavorites from "./components/OurFavorites"; // Import OurFavorites
import ImageSection from "./components/ImageSection";
import ReviewCarousel from "./components/ReviewCarousel";
import InstagramCarousel from "./components/InstagramCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <OurCollection />
      <NewProduct />
      <Banner />
      <CliftonCapsules /> 
      <OurFavorites /> 
         <ImageSection />
         <ReviewCarousel />
          <InstagramCarousel />
            <Footer />
    </div>
  );
}

export default App;
