// React / Hooks
import { useState, useEffect } from "react";

import axios from "axios";

//Components
import SearchBar from "../../components/SearchBar/SearchBar";
import PhotoList from "../../components/PhotoList/PhotoList";
import ZoomPhoto from "../../components/ZoomPhoto/ZoomPhoto";

function App() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoZoom, setPhotoZoom] = useState(null);
  const [activateSearch, setActivateSearch] = useState(false);

  const fetchData = async ([query, categoria]) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    if (query || categoria) {
      let searchQuery = query;

      if (query && categoria) {
        searchQuery = `${query} ${categoria}`;
      } else if (categoria) {
        searchQuery = categoria;
      }

      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            client_id: apiKey,
            query: searchQuery,
          },
        }
      );

      setPhotos(response.data.results);
      return;
    }

    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
        count: 9,
      },
    });

    setPhotos(response.data);
    console.log(setPhotos);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData(query, categoria);
  }, []);

  useEffect(() => {
    if (activateSearch) {
      fetchData(query, categoria);
      setActivateSearch(false);
    }
  }, [activateSearch]);

  return (
    <>
      <div className="container">
        <div className="comp">
          <SearchBar
            setQuery={setQuery}
            setCategoria={setCategoria}
            setActivateSearch={setActivateSearch}
          />

          {photos && photos.length === 0 ? (
            <h3 className="no-photos">
              There was a problem to get the images, problably can't get images
              from API at this time, get back latter!
            </h3>
          ) : (
            <p className="info-home">
              Click on the image to see it in zoom and get information about it,
              as well as a download option.
            </p>
          )}

          {photos && <PhotoList photos={photos} setPhotoZoom={setPhotoZoom} />}

          {photoZoom && (
            <ZoomPhoto photo={photoZoom} setPhotoZoom={setPhotoZoom} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
