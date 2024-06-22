//Hooks
import React from "react";

//Components
import Photo from "../Photo/Photo";

//CSS
import "./PhotoList.css";

const PhotoList = ({ photos, setPhotoZoom }) => {
  return (
    <div className="album">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} setPhotoZoom={setPhotoZoom} />
      ))}
    </div>
  );
};

export default PhotoList;
