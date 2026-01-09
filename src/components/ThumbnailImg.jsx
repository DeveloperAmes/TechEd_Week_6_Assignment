export default function ThumbnailImg({ thumbnail, setMainImg, index }) {
  return (
    <img
      onKeyDown={(event) => {
        if (event.key === "Enter") setMainImg(index);
      }}
      onClick={() => {
        setMainImg(index);
        console.log("Clicked");
      }}
      className="h-25 hover:border-white hover:border-solid hover:border-4 focus:border-white focus:border-solid focus:border-4"
      tabIndex={0}
      key={thumbnail.id}
      src={thumbnail.urls.thumb}
      alt={thumbnail.alt_description}
    />
  );
}
