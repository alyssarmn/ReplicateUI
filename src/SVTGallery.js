import React from "react";
import Gallery from "./Gallery";

function SVTGallery(props) {
  return (
    <div className="svtpics">
      <img src={props.pic} alt="props.alt" />
    </div>
  );
}

export default SVTGallery;
