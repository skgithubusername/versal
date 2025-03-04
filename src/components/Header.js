import Link from "next/link";

export default function Headers() {
  return (
    <div
      className="flex items-center font-[Mulish] justify-center  bg-cover bg-center"
      style={{ backgroundImage: "url('/header.webp')" }} 
    >
      <div className=" bg-opacity-50 text-white px-6 py-4 rounded-lg flex items-center gap-4">
        <h1 className="text-2xl  font-semibold"> Text Here</h1>
        <Link href="/your-link">
          <button className=" bg-pink-500   text-black font-bold py-1 px-4 rounded">
            Click Me
          </button>
        </Link>
      </div>
    </div>
  );
}
