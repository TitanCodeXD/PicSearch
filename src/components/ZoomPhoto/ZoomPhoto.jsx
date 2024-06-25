//Hooks
import React, { useRef } from "react";

import axios from "axios";

//CSS and ICONS
import "./ZoomPhoto.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";

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

        <div className="info">
          <button onClick={() => setPhotoZoom(null)} className="button-close">
            <IoCloseSharp />
          </button>
          <h3>
            Informations <FaInfo />
          </h3>
          <ul>
            <li>
              <span>Description</span>: {photo.alt_description}
            </li>
            <li>
              <span>Location</span>:{" "}
              {photo.location && photo.location.name
                ? photo.location.name
                : "Location not available"}
            </li>
            <li>
              <span>Photo by:</span>{" "}
              <a href={photo.user.links.html} target="_blank">
                {photo.user.name}
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/pt-br" target="_blank">
                Unsplash
              </a>
            </li>
          </ul>

          <button
            onClick={() => downloadImage(photo)}
            className="download-button"
          >
            Download <FaDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZoomPhoto;
