
// import Image from "next/image";
// import { useState } from "react";
// import { FaPlane, FaMoneyBillWave, FaLaptop, FaCar, FaGift } from "react-icons/fa";

// const PartyPlanningPage2 = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     { src: "/mobile1.png", alt: "Party Image 1" },
//     { src: "/mobile2.png", alt: "Party Image 2" },
//     { src: "/mobile3.png", alt: "Party Image 3" },
//   ];

//   // Handlers for manual navigation
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <>
//       <div className="flex min-h-screen  flex-col mx-12 p-3 md:p-12 ">
//         {/* Heading */}
//         {/* <h2 className="text-3xl sm:text-3xl lg:text-4xl text-blue-500 font-semibold mb-12 font-[Mulish] text-[14px] leading-[21px] text-start tracking-normal">
//   Create Unforgettable Memories Together
// </h2> */}

//         <h2 className="text-3xl  lg:mb-24 lg:text-center sm:text-4xl lg:text-5xl text-blue-500 font-semibold mb-12 font-[Mulish]   text-start tracking-normal">
//           What is Xploroo 11 Fantasy Cricket App?

//         </h2>





//         <div className="flex justify-between flex-col md:flex-row items-start w-full max-w-6xl">
//           {/* Left Side - Text Content */}
//           <div className="md:w-1/2 text-left md:pr-6">
//             <p className=" font-semibold text-lg">
//               Xploroo 11 is a next-generation fantasy cricket platform offering innovative features, including:

//             </p>
//             <h2 className="text-2xl font-semibold mb-4">Key Features:
//             </h2>
//             <p className="text-lg text-gray-700 mb-4">
//               <strong><li>Play Fantasy Cricket with a Twist</li> </strong>  Create dream teams, compete in contests, and win rewards.


//             </p>
//             <p className="text-lg text-gray-700 mb-4">
//               <strong><li>Earn by Creating Private Contests:</li></strong> Earn up to 7% of the profit.

//             </p>
//             <p className="text-lg text-gray-700 mb-4">
//               <strong><li> All-in-One Cricket Travel Packages:</li></strong>Book sports packages, including stadium tickets, stay, sightseeing, food, and travel.


//             </p>
//             <p className="text-lg text-gray-700 mb-4">
//               <strong><li>Exclusive Rewards and Bonuses: </li></strong> Earn rewards for participating in contests, referring friends, and achieving milestones.
//             </p>

//             <p className="text-lg text-gray-700 mb-4">
//               <strong><li>Community Engagement: </li></strong>  Join a vibrant community of cricket fans to discuss matches, share tips, and celebrate victories.
//             </p>

//             <div className="flex justify-center sm:justify-start gap-4 mt-6">
//               <button>
//                 <Image
//                   src="/google.png"
//                   alt="Get it on Google Play"
//                   width={150}
//                   height={50}
//                 />
//               </button>
//               <button>
//                 <Image
//                   src="/apple.png"
//                   alt="Download on the App Store"
//                   width={150}
//                   height={50}
//                 />
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Images */}
//           <div className="md:w-1/2 sm:px-32 px-12 md:pl-6 mt-8 md:mt-0">
//             {/* Mobile design - will be hidden via CSS in a style tag */}
//             <div className="mobile-only-slider relative w-full max-w-sm mx-auto">
//               <div className="overflow-hidden rounded-lg">
//                 <div
//                   className="flex transition-transform duration-500 ease-in-out"
//                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                 >
//                   {slides.map((slide, index) => (
//                     <div key={`mobile-${index}`} className="min-w-full">
//                       <Image
//                         src={slide.src}
//                         alt={slide.alt}
//                         width={160}
//                         height={160}
//                         className="rounded-lg w-full h-auto object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Mobile Navigation arrows */}
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-700 hover:bg-opacity-75"
//                 aria-label="Previous slide"
//               >
//                 &#10094;
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-700 hover:bg-opacity-75"
//                 aria-label="Next slide"
//               >
//                 &#10095;
//               </button>

//               {/* Mobile Dots indicators */}
//               <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//                 {slides.map((_, index) => (
//                   <button
//                     key={`dot-${index}`}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-blue-500" : "bg-gray-300"
//                       }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Desktop view - will be hidden via CSS in a style tag */}
//             <div className="desktop-only-row flex gap-4 pl-32 justify-center md:justify-start flex-nowrap">
//               <Image
//                 src="/mobile1.png"
//                 alt="Party Image 1"
//                 width={160}
//                 height={160}
//                 className="rounded-lg"
//               />
//               <Image
//                 src="/mobile2.png"
//                 alt="Party Image 2"
//                 width={160}
//                 height={160}
//                 className="rounded-lg"
//               />
//               <Image
//                 src="/mobile3.png"
//                 alt="Party Image 3"
//                 width={160}
//                 height={160}
//                 className="rounded-lg"
//               />
//             </div>

//             {/* CSS for responsive display - this will render server-side and avoid hydration issues */}
//             <style jsx global>{`
//             /* Default for mobile: hide desktop row, show slider */
//             .desktop-only-row {
//               display: none;
//             }
//             .mobile-only-slider {
//               display: block;
//             }
            
//             /* Media query for desktop/laptop */
//             @media (min-width: 768px) {
//               .desktop-only-row {
//                 display: flex;
//               }
//               .mobile-only-slider {
//                 display: none;
//               }
//             }
//           `}</style>
//           </div>
//         </div>
//       </div>

//       {/* <div className="bg-white text-black p-8 rounded-lg shadow-md max-w-md mx-auto border border-gray-300">
//       <h2 className="text-2xl font-semibold text-center mb-4">
//         Exciting Rewards Await!
//       </h2>
//       <p className="text-center text-gray-700 mb-6">
//         Winners will receive incredible rewards, including:
//       </p>
//       <ul className="space-y-4 text-lg">
//         <li className="flex items-center justify-between border-b pb-2">
//           <span>Domestic & International Travel</span>
//           <FaPlane className="text-gray-700" />
//         </li>
//         <li className="flex items-center justify-between border-b pb-2">
//           <span>Cash Prizes</span>
//           <FaMoneyBillWave className="text-gray-700" />
//         </li>
//         <li className="flex items-center justify-between border-b pb-2">
//           <span>Gadgets & Electronics</span>
//           <FaLaptop className="text-gray-700" />
//         </li>
//         <li className="flex items-center justify-between border-b pb-2">
//           <span>Vehicles</span>
//           <FaCar className="text-gray-700" />
//         </li>
//         <li className="flex items-center justify-between">
//           <span>And More!</span>
//           <FaGift className="text-gray-700" />
//         </li>
//       </ul>
//       <div className="text-center mt-6">
//         <button className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
//           Join Xploroo 11 & Start Winning!
//         </button>
//       </div>
//     </div> */}
//     </>
//   );
// };

// export default PartyPlanningPage2;


























import Image from "next/image";
import { useState } from "react";

const PartyPlanningPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/mobile1.png", alt: "Party Image 1" },
    { src: "/mobile2.png", alt: "Party Image 2" },
    { src: "/mobile3.png", alt: "Party Image 3" },
  ];

  // Handlers for manual navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div>
      <div className="flex min-h-screen pb-12 font-[Mulish] flex-col px-4 sm:px-6 md:px-12 lg:px-16 pt-8 md:pt-12">
        {/* Heading */}
        <h2 className="text-2xl px-12 text-2xl sm:text-2xl lg:text-4xl text-blue-500 font-semibold mb-8 md:mb-12 lg:mb-24 text-start md:text-center font-[Mulish] tracking-normal">
        What is Xploroo 11 Fantasy Cricket App?
        </h2>

        <div className="flex flex-col px-12 md:flex-row justify-between items-start w-full max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 text-left md:pr-6">
            <p className=" font-semibold text-lg">
              Xploroo 11 is a next-generation fantasy cricket platform offering innovative features, including:

            </p>
            <h2 className="text-2xl font-semibold mb-4">Key Features:
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong><li>Play Fantasy Cricket with a Twist</li> </strong>  Create dream teams, compete in contests, and win rewards.


            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong><li>Earn by Creating Private Contests:</li></strong> Earn up to 7% of the profit.

            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong><li> All-in-One Cricket Travel Packages:</li></strong>Book sports packages, including stadium tickets, stay, sightseeing, food, and travel.


            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong><li>Exclusive Rewards and Bonuses: </li></strong> Earn rewards for participating in contests, referring friends, and achieving milestones.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              <strong><li>Community Engagement: </li></strong>  Join a vibrant community of cricket fans to discuss matches, share tips, and celebrate victories.
            </p>

            <div className="flex justify-center sm:justify-start gap-4 mt-6">
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

          {/* Right Side - Images */}
          <div className="w-full md:w-1/2 md:pl-6 mt-8 md:mt-0">
            {/* Mobile/Tablet view slider (shown on screens below lg breakpoint) */}
            <div className="lg:hidden relative w-full max-w-sm mx-auto px-4 sm:px-8">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={`mobile-${index}`} className="min-w-full">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={300}
                        height={600}
                        className="rounded-lg w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-700 hover:bg-opacity-75"
                aria-label="Previous slide"
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-700 hover:bg-opacity-75"
                aria-label="Next slide"
              >
                &#10095;
              </button>

              {/* Dots indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop/Laptop view row of images (only shown on lg screens and up) */}
            <div className="hidden lg:flex gap-4 justify-center pl-4 sm:pl-8 md:pl-16 lg:pl-24">
              {slides.map((slide, index) => (
                <Image
                  key={`desktop-${index}`}
                  src={slide.src}
                  alt={slide.alt}
                  width={160}
                  height={320}
                  className="rounded-lg w-auto h-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-black mx-4 sm:mx-8 md:mx-16 my-8 md:my-12 h-[2px]"></div> */}
    </div>
  );
};

export default PartyPlanningPage;