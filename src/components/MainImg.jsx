export default function MainImg({ largeImg }) {
  return (
    <img
      className="h-25"
      key={largeImg.id}
      src={largeImg.urls.regular}
      alt={largeImg.alt_description}
    />
  );
}
