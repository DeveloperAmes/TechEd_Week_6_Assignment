import { useEffect } from "react";
import { useState } from "react";
import ThumbnailImg from "./ThumbnailImg";
import MainImg from "./MainImg";

export default function Gallery() {
  const [thumbnails, setThumbnails] = useState([]);
  const [mainImg, setMainImg] = useState(1);
  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        `https://api.unsplash.com//search/photos?per_page=20&query=butterfly&client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }`
      );
      const data = await response.json();
      setThumbnails(data.results);
    }
    fetchImages();
  }, []);
  return (
    <>
      <section>
        <div className="thumbnail-container w-full flex gap-3 overflow-x-auto">
          {thumbnails.map((thumbnail, index) => {
            return (
              <ThumbnailImg
                key={thumbnail.id}
                thumbnail={thumbnail}
                setMainImg={setMainImg}
                index={index}
              />
            );
          })}
        </div>
      </section>
      <section className="border-solid border-white border-5">
        <MainImg largeImg={thumbnails[mainImg]} />;
      </section>
    </>
  );
}
