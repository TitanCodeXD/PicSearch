//Hooks
import React, { useRef } from "react";

import axios from "axios";

//CSS
import "./ZoomPhoto.css";

const ZoomPhoto = ({ photo, setPhotoZoom }) => {
  const imageDownloadRef = useRef(null);

  const downloadImage = async (photo) => {
    try {
      const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

      const response = await axios.get(
        `https://api.unsplash.com/photos/${photo.id}/download`,
        {
          params: {
            client_id: apiKey,
          },
        }
      );

      if (!response.data.url) {
        throw new Error("No download URL found");
      }

      const blob = await fetch(response.data.url).then((r) => r.blob());

      const url = window.URL.createObjectURL(blob);
      imageDownloadRef.current.href = url;
      imageDownloadRef.current.download = `${photo.id}.jpg`;

      imageDownloadRef.current.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error fetching download link:", error);
    }
  };

  return (
    <div className="photo-zoom" onClick={() => setPhotoZoom(null)}>
      <div
        className="photo-zoom-container"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={photo.urls.regular} alt={photo.alt_description} />
        <a ref={imageDownloadRef} className="hidden"></a>
        <button onClick={() => downloadImage(photo)}>Download</button>
      </div>
    </div>
  );
};

export default ZoomPhoto;
