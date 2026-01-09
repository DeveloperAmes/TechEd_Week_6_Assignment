export default function MainImg({ largeImg }) {
  return (
    <img
      key={largeImg?.id}
      src={largeImg?.urls.regular}
      alt={largeImg?.alt_description}
    />
  );
}
