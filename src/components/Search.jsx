export default function Search() {
  return (
    <section className="w-screen flex flex-row justify-center m-2 gap-3 md:flex-col md:w-24">
      <input
        type="search"
        name="search"
        placeholder="Enter a keyword e.g., red"
        className="bg-white text-black border-solid border-black border-2 rounded-sm hover:outline-white hover:outline-solid hover:outline-4 focus-visible:outline-white focus-visible:outline-solid focus-visible:outline-4 focus-visible:border-2 focus-visible:border-black focus-visible-border-solid w-75"
      />
      <button className="border-white border-solid border-2 rounded-sm  hover:bg-white hover:text-black hover:border-black hover:border-solid hover:border-2 hover:outline-white hover:outline-solid hover:outline-4  focus-visible:bg-white focus-visible:text-black focus-visible:border-solid focus-visible:border-black focus-visible:border-2 focus-visible:outline-white focus-visible:outline-solid focus-visible:outline-4">
        Search
      </button>
    </section>
  );
}
