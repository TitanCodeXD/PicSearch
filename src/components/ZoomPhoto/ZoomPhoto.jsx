//Hooks
import React from "react";

//CSS
import "./ZoomPhoto.css";

const ZoomPhoto = ({ photo, setPhotoZoom }) => {
  return (
    <div className="photo-zoom" onClick={() => setPhotoZoom(null)}>
      <div className="photo-zoom-container">
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
    </div>
  );
};

export default ZoomPhoto;
