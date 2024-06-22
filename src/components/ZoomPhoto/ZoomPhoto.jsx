//Hooks
import React, { useRef } from "react";

import { createApi } from "unsplash-js";

//CSS
import "./ZoomPhoto.css";

const ZoomPhoto = ({ photo, setPhotoZoom }) => {
  const imageDownloadRef = useRef(null);

  const downloadImage = async (photo) => {
    try {
      const imgUrl = `${photo.urls.full}&client_id=${
        import.meta.env.VITE_UNSPLASH_API_KEY
      }`;
      const response = await fetch(imgUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();

      // Configuração do link de download
      const url = window.URL.createObjectURL(blob);
      imageDownloadRef.current.href = url;
      imageDownloadRef.current.download = `${photo.id}.jpg`;

      // Forçar o clique no link para iniciar o download
      imageDownloadRef.current.click();

      // Revogar a URL do objeto blob
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
