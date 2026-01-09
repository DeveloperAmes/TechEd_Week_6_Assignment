export default function ThumbnailImg({ thumbnail, setMainImg, index }) {
  return (
    <img
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          setMainImg(index);
        }
      }}
      onClick={() => {
        setMainImg(index);
      }}
      className="h-16 hover:outline-white hover:outline-solid hover:outline-4 focus-visible:outline-white focus-visible:outline-solid focus-visible:outline-4 mt-4 mb-4"
      tabIndex={0}
      key={thumbnail.id}
      src={thumbnail.urls.thumb}
      alt={thumbnail.alt_description}
    />
  );
}
