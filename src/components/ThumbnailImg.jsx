export default function ThumbnailImg({ thumbnail }) {
  return (
    <img
      className="h-25 hover:border-white hover:border-solid hover:border-4 focus:border-white focus:border-solid focus:border-4"
      key={thumbnail.id}
      src={thumbnail.urls.thumb}
      alt={thumbnail.alt_description}
    />
  );
}
