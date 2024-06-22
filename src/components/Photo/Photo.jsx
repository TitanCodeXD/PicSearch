//Hooks
import React from "react";

//CSS
import "./Photo.css";

const Photo = ({ photo }) => {
  return (
    <div className="photo">
      <img src={photo.urls.small} alt={photo.alt_description}></img>
    </div>
  );
};

export default Photo;
