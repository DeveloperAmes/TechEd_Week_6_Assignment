export default function ThumbnailImg({ thumbnail }) {
  return (
    <img
      className="h-25"
      key={thumbnail.id}
      src={thumbnail.urls.thumb}
      alt={thumbnail.alt_description}
    />
  );
}
