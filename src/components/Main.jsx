import Gallery from "./Gallery";

export default function Main() {
  return (
    <>
      <main className="w-screen m-auto md:flex md:flex-row md:max-h-[100vh]">
        {/* md:grid md:grid-cols-2" */}
        <Gallery />
      </main>
    </>
  );
}
