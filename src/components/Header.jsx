export default function Header() {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold mt-3 mb-6">
        Butterfly Gallery
      </h1>
      <input type="search" name="search" className="bg-white" />
      <button>Search</button>
    </>
  );
}
