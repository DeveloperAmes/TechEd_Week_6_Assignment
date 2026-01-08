import { useEffect } from "react";
import { useState } from "react";

export default function ThumbnailGallery() {
  const [thumbnails, setThumbnails] = useState([]);
  useEffect(() => {
    async function fetchThumbnails() {
      const response = await fetch(
        `https://api.unsplash.com//search/photos?per_page=20&query=butterfly&client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }`
      );
      const data = await response.json();
      setThumbnails(data.results);
    }
    fetchThumbnails();
  }, []);
  return (
    <>
      <section>
        <div
          className="thumbnail-container"
          className="flex gap-4 justify-center overflow-auto"
        >
          {thumbnails.map((thumbnail) => {
            return (
              <img
                className="h-25"
                key={thumbnail.id}
                src={thumbnail.urls.thumb}
                alt={thumbnail.alt_description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
