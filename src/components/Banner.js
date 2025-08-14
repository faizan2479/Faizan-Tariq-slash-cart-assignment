import React from "react" ;
import bannerImg from "./banner.png";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImg} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
