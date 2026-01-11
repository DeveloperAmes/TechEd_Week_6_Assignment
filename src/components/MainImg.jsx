export default function MainImg({ largeImg }) {
  return (
    <img
      className="max-h-80 m-auto border-white border-2 border-solid rounded-sm"
      key={largeImg?.id}
      src={largeImg?.urls.regular}
      alt={largeImg?.alt_description}
    />
  );
}
