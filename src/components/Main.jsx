import Gallery from "./Gallery";
import Search from "./Search";

export default function Main() {
  return (
    <>
      <main className="md:h-130 md:flex md:flex-col md:align-center md:justify-center">
        {/* md:grid md:grid-cols-2" */}
        <Gallery />
        <Search />
      </main>
    </>
  );
}
