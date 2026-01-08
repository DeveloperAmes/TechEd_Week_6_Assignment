import { useEffect } from "react";
import { useState } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        `https://api.unsplash.com//search/photos?per_page=10&query=butterfly&client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }`
      );
      const data = await response.json();
      setImages(data.results);
    }
    fetchImages();
  }, []);
  return (
    <>
      <section>
        <h2>Thumbnail container - *where div will go*</h2>
        <div className="thumbnail-container">
          {images.map((image) => {
            return (
              <img
                className="w-7 h-7"
                key={image.id}
                src={image.urls.thumb}
                alt={image.alt_description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
