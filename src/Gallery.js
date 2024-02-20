import React from "react";
import SVTGallery from "./SVTGallery";

function Gallery() {
  return (
    <div className="gallery-container">
      <h2 className="gallery-text">GALLERY</h2>
      <div className="gallery-container2">
        <div className="svt-pics">
          <SVTGallery pic="./pics/1.jpg" />
          <SVTGallery pic="./pics/2.jpg" />
          <SVTGallery pic="./pics/3.jpg" />
          <SVTGallery pic="./pics/4.jpg" />
          <SVTGallery pic="./pics/5.jpg" />
          <SVTGallery pic="./pics/6.jpg" />
          <SVTGallery pic="./pics/7.jpg" />
          <SVTGallery pic="./pics/8.jpg" />
          <SVTGallery pic="./pics/9.jpg" />
          <SVTGallery pic="./pics/10.jpg" />
          <SVTGallery pic="./pics/11.jpg" />
          <SVTGallery pic="./pics/12.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
