//Hooks
import React from "react";

//Components
import Photo from "../Photo/Photo";

//CSS
import "./PhotoList.css";

const PhotoList = ({ photos }) => {
  return (
    <div className="album">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
