






// import Image from "next/image";

// const PartyPlanning = () => {
//   return (
//     <div className="flex min-h-screen    bg-white flex-col md:flex-row items-center justify-between px-4  md:p-12">
//       {/* Mobile: Image First */}
//       <div className="w-full flex justify-center md:hidden  mt-12">
//         <Image
//           src="/hero.png"
//           alt="Party Planning"
//           width={400}
//           height={300}
//           className="rounded-lg w-full max-w-xs sm:max-w-md"
//         />
//       </div>

//       {/* Left Side - Text Content */}
//       <div className="md:w-1/2 text-center md:text-left px-6 md:px-12">
//         <h1 className="text-3xl   sm:text-3xl lg:text-5xl text-blue-500  font-semibold mb-4">
//           Party Planning Made Easy
//           {/* Join the Xploroo11 Revolution */}
//         </h1>
//         <p className="text-base sm:text-lg  hidden md:block lg:block   text-gray-700 mb-4">
//           {/* Life is hard, having fun shouldn't be. Create a shared itinerary, 
//           launch polls and chat, book top-tier experiences, and even split 
//           the expenses—all in one place. */}
//           Xploroo11 Fantasy Cricket App is a lifestyle platform for cricket fans, offering a unique blend of fantasy cricket, earning opportunities, and immersive cricket experiences.

//         </p>
//         {/* <p className="text-base hidden md:block lg:block  sm:text-lg text-gray-700 mb-4">
//           Over 900k have used Batch to plan the party of their dreams.
//         </p> */}
//         <p className="text-lg font-semibold mb-4">Download the App today!</p>

//         {/* Mobile: Download Button Above Store Buttons */}
//         <div className="md:hidden flex justify-center">
//           <button className="bg-black text-white px-6 py-2 rounded-lg w-full max-w-xs">
//             Download the App
//           </button>
//         </div>

//         {/* Input Field and Send Button */}
//         <div className="flex hidden md:block lg:block  flex-col sm:flex-row items-center gap-2 w-full max-w-md mt-4">
//           <input
//             type="text"
//             placeholder="Enter your number"
//             className="p-2 border rounded w-full sm:w-[200px]"
//           />
//           <button className="bg-black text-white px-6 py-2 rounded-lg sm:rounded-tr-lg sm:rounded-br-md w-full sm:w-auto">
//             Send
//           </button>
//         </div>

//         {/* Store Buttons - Reordered for Mobile */}
//         <div className="flex justify-center sm:justify-start gap-4 mt-6">
//           <button>
//             <Image
//               src="/google.png"
//               alt="Get it on Google Play"
//               width={150}
//               height={50}
//             />
//           </button>
//           <button>
//             <Image
//               src="/apple.png"
//               alt="Download on the App Store"
//               width={150}
//               height={50}
//             />
//           </button>
//         </div>
//       </div>

//       {/* Right Side - Image (Desktop Only) */}
//       <div className="md:w-1/2 hidden md:flex justify-center mt-8 md:mt-0">
//         <Image
//           src="/hero.png"
//           alt="Party Planning"
//           width={400}
//           height={300}
//           className="rounded-lg w-full max-w-xs sm:max-w-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default PartyPlanning;


















import Image from "next/image";

const PartyPlanning = () => {
  return (
    <div className="flex  mt-12 bg-white flex-col md:flex-row items-center justify-between px-4 ">
      {/* Mobile: Image First */}
      <div className="w-full flex justify-center md:hidden mt-6">
        <Image
          src="/landing.png"
          alt="Party Planning"
          width={400}
          height={300}
          className="rounded-lg w-full max-w-xs sm:max-w-md"
        />
      </div>

      {/* Left Side - Text Content */}
      <div className="md:w-1/2  text-center md:text-left px-6 md:px-24">
        <h1 className="text-2xl sm:text-2xl lg:text-4xl text-blue-500 font-semibold mb-4">
          {/* Party Planning Made Easy */}
          Join the Xploroo11 Revolution
        </h1>
        <p className="text-base sm:text-lg hidden md:block lg:block text-gray-700 mb-4">
          Xploroo11 Fantasy Cricket App is a lifestyle platform for cricket fans, offering a unique blend of fantasy cricket, earning opportunities, and immersive cricket experiences.
        </p>
        <p className="text-lg font-semibold mb-4">Download the App today!</p>

        {/* Mobile: Download Button Above Store Buttons */}
        <div className="md:hidden flex justify-center">
          <button className="bg-black text-white px-6 py-2 rounded-lg w-full max-w-xs">
            Download the App
          </button>
        </div>

        {/* Input Field and Send Button */}
        <div className="flex hidden md:block lg:block flex-col sm:flex-row items-center gap-2 w-full max-w-md mt-2">
          <input
            type="text"
            placeholder="Enter your number"
            className="p-2 border rounded w-full sm:w-[200px]"
          />
          <button className="bg-black text-white px-6 py-2 rounded-lg sm:rounded-tr-lg sm:rounded-br-md w-full sm:w-auto">
            Send
          </button>
        </div>

        {/* Store Buttons - Reordered for Mobile */}
        <div className="flex justify-center sm:justify-start gap-4 mt-4">
          <button>
            <Image
              src="/google.png"
              alt="Get it on Google Play"
              width={150}
              height={50}
            />
          </button>
          <button>
            <Image
              src="/apple.png"
              alt="Download on the App Store"
              width={150}
              height={50}
            />
          </button>
        </div>
      </div>

      {/* Right Side - Image (Desktop Only) */}
      <div className="md:w-1/2 hidden md:flex justify-center mt-4 md:mt-0">
        <Image
         src="/landing.png"
          alt="Party Planning"
          width={400}
          height={300}
          className="rounded-lg w-full max-w-xs sm:max-w-md"
        />
      </div>
    </div>
  );
};

export default PartyPlanning;
