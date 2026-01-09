import { useEffect } from "react";
import { useState } from "react";
import ThumbnailImg from "./ThumbnailImg";
import MainImg from "./MainImg";

export default function Gallery() {
  const [thumbnails, setThumbnails] = useState([]);
  const [mainImg, setMainImg] = useState([]);
  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        `https://api.unsplash.com//search/photos?per_page=20&query=butterfly&client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }`
      );
      const data = await response.json();
      setThumbnails(data.results);
      setMainImg(data.results);
    }
    fetchImages();
  }, []);
  return (
    <>
      <section>
        <div className="thumbnail-container flex gap-4 justify-center overflow-auto ml-4 mr-4">
          {thumbnails.map((thumbnail) => {
            return <ThumbnailImg thumbnail={thumbnail} />;
          })}
        </div>
      </section>
      <section className="border-solid border-black border-5">
        {mainImg.map((largeImg) => {
          return <MainImg largeImg={largeImg} />;
        })}
      </section>
    </>
  );
}
