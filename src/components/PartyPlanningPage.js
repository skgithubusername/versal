// import Image from "next/image";

// const PartyPlanningPage = () => {
//   return (
//     <div className="flex flex-col  mx-12 p-6 md:p-12 ">
//       {/* Heading */}
//       <h1 className="text-4xl  text-blue-500 font-bold text-center mb-24">
//         Create Unforgettable Memories Together
//       </h1>

//       <div className="flex justify-between  flex-col md:flex-row items-start w-full max-w-6xl">
//         {/* Left Side - Text Content */}
//         <div className="md:w-1/2 text-left md:pr-6">
//           <h2 className="text-2xl font-semibold mb-4">Party Planning Essentials</h2>
//           <p className="text-lg text-gray-700 mb-4">
//             <strong><li>Setting Up:</li> </strong> Choose dates, locations, and a fun event photo.
//             Utilize chat and polling features for planning flexibility while exploring
//             destinations.
//           </p>
//           <p className="text-lg text-gray-700 mb-4">
//             <strong><li>Invitations & Roles:</li></strong> Invite guests directly from your contacts
//             and assign roles such as Guest of Honor, Planner, or Guest.
//           </p>
//           <p className="text-lg text-gray-700 mb-4">
//             <strong><li>Countdown & Checklists:</li></strong> Track days left until the party with a
//             countdown and follow provided checklists to stay organized.
//           </p>
//         </div>

//         {/* Right Side - Images in One Row */}
//         <div className="md:w-1/2 flex gap-4 justify-center md:justify-start flex-nowrap md:pl-6">
//           <Image
//             src="/mobile1.png"
//             alt="Party Image 1"
//             width={200}
//             height={200}
//             className="rounded-lg"
//           />
//           <Image
//             src="/mobile2.png"
//             alt="Party Image 2"
//             width={200}
//             height={200}
//             className="rounded-lg"
//           />
//           <Image
//             src="/mobile3.png"
//             alt="Party Image 3"
//             width={200}
//             height={200}
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartyPlanningPage;























// import Image from "next/image";
// import { useState } from "react";

// const PartyPlanningPage = () => {
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
//   <div>
//       <div className="flex min-h-screen mt-12 flex-col mx-12 p-3 md:p-12 ">
//       {/* Heading */}
//       {/* <h2 className="text-3xl sm:text-3xl lg:text-4xl text-blue-500 font-semibold mb-12 font-[Mulish] text-[14px] leading-[21px] text-start tracking-normal">
//   Create Unforgettable Memories Together
// </h2> */}

// <h2 className="text-3xl lg:text-center  sm:text-4xl lg:text-5xl text-blue-500 font-semibold lg:mb-24 mb-12 font-[Mulish]   text-start tracking-normal">
  
// Why Choose Xploroo11 11?

// </h2>



//       <div className="flex justify-between flex-col md:flex-row items-start w-full max-w-6xl">
//         {/* Left Side - Text Content */}
//         <div className="md:w-1/2 text-left  md:pr-6">
//           {/* <h2 className="text-2xl font-semibold mb-4">Party Planning Essentials</h2> */}
//           <p className="text-lg text-gray-700 mb-4">
//             <strong><li>Earning Opportunities:</li> </strong>  Create private contests and earn up to 7% of the profit.

//           </p>
//           <p className="text-lg text-gray-700 mb-4">
//             <strong><li>Immersive Cricket Experience:</li></strong> Book all-inclusive travel packages for live matches.

//           </p>
//           <p className="text-lg text-gray-700 mb-4">
//             <strong><li> User-Centric Design:</li></strong> Seamless and engaging experience for users of all levels.

//           </p>
//           <p className="text-lg text-gray-700 mb-4">
//             <strong><li> Trust and Security:</li></strong> Seamless and engaging experience for users of all levels.
// 4. Trust and Security: Robust data protection measures and transparent transactions.


//           </p>

//               <div className="flex justify-center sm:justify-start gap-4 mt-6">
//                     <button>
//                       <Image
//                         src="/google.png"
//                         alt="Get it on Google Play"
//                         width={150}
//                         height={50}
//                       />
//                     </button>
//                     <button>
//                       <Image
//                         src="/apple.png"
//                         alt="Download on the App Store"
//                         width={150}
//                         height={50}
//                       />
//                     </button>
//                   </div>
//         </div>

//         {/* Right Side - Images */}
//         <div className="md:w-1/2 sm:px-32 px-12 md:pl-6 mt-8 md:mt-0">
//           {/* Mobile design - will be hidden via CSS in a style tag */}
//           <div className="mobile-only-slider relative w-full max-w-sm mx-auto">
//             <div className="overflow-hidden rounded-lg">
//               <div 
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {slides.map((slide, index) => (
//                   <div key={`mobile-${index}`} className="min-w-full">
//                     <Image
//                       src={slide.src}
//                       alt={slide.alt}
//                       width={160}
//                       height={160}
//                       className="rounded-lg w-full h-auto object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Mobile Navigation arrows */}
//             <button 
//               onClick={prevSlide}
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-700 hover:bg-opacity-75"
//               aria-label="Previous slide"
//             >
//               &#10094;
//             </button>
//             <button 
//               onClick={nextSlide}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-gray-700 hover:bg-opacity-75"
//               aria-label="Next slide"
//             >
//               &#10095;
//             </button>
            
//             {/* Mobile Dots indicators */}
//             <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//               {slides.map((_, index) => (
//                 <button
//                   key={`dot-${index}`}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-2 h-2 rounded-full ${
//                     currentSlide === index ? "bg-blue-500" : "bg-gray-300"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
          
//           {/* Desktop view - will be hidden via CSS in a style tag */}
//           <div className="desktop-only-row flex gap-4 pl-32 justify-center md:justify-start flex-nowrap">
//             <Image
//               src="/mobile1.png"
//               alt="Party Image 1"
//               width={160}
//               height={160}
//               className="rounded-lg"
//             />
//             <Image
//               src="/mobile2.png"
//               alt="Party Image 2"
//               width={160}
//               height={160}
//               className="rounded-lg"
//             />
//             <Image
//               src="/mobile3.png"
//               alt="Party Image 3"
//               width={160}
//               height={160}
//               className="rounded-lg"
//             />
//           </div>
          
//           {/* CSS for responsive display - this will render server-side and avoid hydration issues */}
//           <style jsx global>{`
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
//         </div>
//       </div>
//     </div>

//    <div className=" bg-black mx-16  my-12 h-[2px] ">

//    </div>
//   </div>
//   );
// };

// export default PartyPlanningPage;












































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
      {/* <div className="flex  min-h-screen flex-col px-4 sm:px-6 md:px-12 lg:px-16 pt-8 md:pt-12"> */}
      <div className="flex min-h-screen pb-12 font-[Mulish] flex-col px-4 sm:px-6 md:px-12 lg:px-16 pt-8 md:pt-12">
        {/* Heading */}
        <h2 className="text-2xl mt-12 px-12  sm:text-2xl lg:text-4xl text-blue-500 font-semibold mb-8 md:mb-12 lg:mb-24 text-start md:text-center font-[Mulish] tracking-normal">
          Why Choose Xploroo11 ?
        </h2>

        <div className="flex flex-col px-12 md:flex-row justify-between items-start w-full max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 text-left md:pr-6">
            <ul className="space-y-4">
              <li className="text-base sm:text-lg text-gray-700">
                <strong>Earning Opportunities:</strong> Create private contests and earn up to 7% of the profit.
              </li>
              <li className="text-base sm:text-lg text-gray-700">
                <strong>Immersive Cricket Experience:</strong> Book all-inclusive travel packages for live matches.
              </li>
              <li className="text-base sm:text-lg text-gray-700">
                <strong>User-Centric Design:</strong> Seamless and engaging experience for users of all levels.
              </li>
              <li className="text-base sm:text-lg text-gray-700">
                <strong>Trust and Security:</strong> Robust data protection measures and transparent transactions.
              </li>
            </ul>

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
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? "bg-blue-500" : "bg-gray-300"
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

      <div className="bg-black mx-4 sm:mx-8 md:mx-16 my-4 lg:my-2 md:my-8 h-[2px]"></div>
    </div>
  );
};

export default PartyPlanningPage;