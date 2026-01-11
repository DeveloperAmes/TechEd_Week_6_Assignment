import { useEffect } from "react";
import { useState } from "react";
import ThumbnailImg from "./ThumbnailImg";
import MainImg from "./MainImg";
import Search from "./Search";

export default function Gallery() {
  const [thumbnails, setThumbnails] = useState([]);
  const [mainImg, setMainImg] = useState(1);
  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(
        `https://api.unsplash.com//search/photos?per_page=30&query=butterfly&client_id=${
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
      <section className="main-img-container h-80 flex align-center m-2 md:w-500">
        {/* // md:col-start-1 md:col-end-2 */}
        <MainImg largeImg={thumbnails[mainImg]} />
      </section>
      <Search />
      <section className="thumbnail-container w-full flex gap-3 overflow-x-auto ml-2 mr-3 scrollbar-thin scrollbar-thumb-white scrollbar-track-black md:flex md:flex-col md:w-100 md:gap-3">
        {/* md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:flex-col md:overflow-auto md:scrollbar-thin md:scrollbar-thumb-white md:scrollbar-track-black */}
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
      </section>
    </>
  );
}
