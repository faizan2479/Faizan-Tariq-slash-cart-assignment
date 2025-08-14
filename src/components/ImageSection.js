import React from "react";
import "./ImageSection.css";
import subImage from "../assets/images/sub.png";
import virtImage from "../assets/images/virt.png";

const ImageSection = () => {
  return (
    <div className="image-section">
      <img src={subImage} alt="Sub" className="image" />
      <img src={virtImage} alt="Virt" className="image" />
    </div>
  );
};

export default ImageSection;
