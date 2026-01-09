export default function MainImg({ largeImg, isClicked }) {
  if (isClicked)
    return (
      <img
        key={largeImg.id}
        src={largeImg.urls.regular}
        alt={largeImg.alt_description}
      />
    );
}
