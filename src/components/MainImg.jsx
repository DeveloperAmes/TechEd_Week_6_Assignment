export default function MainImg({ largeImg }) {
  return (
    <img
      className="max-h-95 m-auto"
      key={largeImg?.id}
      src={largeImg?.urls.regular}
      alt={largeImg?.alt_description}
    />
  );
}
