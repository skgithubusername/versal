// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { IoMdClose } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-teal-500 text-white shadow-md relative z-50">
//       <div className="flex items-center justify-between px-6 py-4 container mx-auto">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <img
//             src="https://cdn.prod.website-files.com/64fa108e839f28abd896df84/65f0d22566f7d49d07b1adf4_batch%20logo.svg"
//             className="h-14 w-auto object-cover"
//             alt="Logo"
//             loading="lazy"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex space-x-6 font-medium">
//           {[
//             { path: "/experience", label: "Experience" },
//             { path: "/party-guides", label: "Party Guides" },
//             { path: "/blog", label: "Blog" },
//             { path: "/about", label: "About" },
//           ].map((link, index) => (
//             <Link
//               key={index}
//               href={link.path}
//               className="px-5 py-2 text-lg transition-all duration-300 ease-in-out rounded-lg hover:text-gray-200"
//             >
//               {link.label}
//             </Link>
//           ))}
//           {/* Login Button (Desktop) */}
//           <Link href="/login">
//             <button className="bg-white text-teal-500 px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all">
//               Login
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="lg:hidden text-3xl focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle Navigation Menu"
//         >
//           {isOpen ? <IoMdClose className="text-white" /> : <FaBarsStaggered className="text-white" />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-teal-500 shadow-md"
//           >
//             <div className="flex flex-col items-center space-y-3 py-4">
//               {[
//                 { path: "/experience", label: "Experience" },
//                 { path: "/party-guides", label: "Party Guides" },
//                 { path: "/blog", label: "Blog" },
//                 { path: "/about", label: "About" },
//               ].map((link, index) => (
//                 <Link
//                   key={index}
//                   href={link.path}
//                   className="block w-full text-center py-2 text-lg font-medium hover:text-gray-200"
//                   onClick={toggleMenu}
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               {/* Get App Button (Mobile) */}
//               <Link href="/get-app">
//                 <button className="bg-white text-teal-500 px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all">
//                   Get App
//                 </button>
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;















// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { FaBarsStaggered, FaUser } from "react-icons/fa6";
// import { IoMdClose } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="font-serif  px-24 bg-white text-black lg:border-b-[0.5px] relative z-50">
//       <div className="flex items-center justify-between px-6 py-4 container mx-auto">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <img
//             src="https://cdn.prod.website-files.com/64fa108e839f28abd896df84/65f0d22566f7d49d07b1adf4_batch%20logo.svg"
//             className="h-8 w-auto object-cover"
//             alt="Logo"
//             loading="lazy"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex space-x-6 font-medium">
//           {[
//             { path: "/experience", label: "Experience" },
//             { path: "/party-guides", label: "Party Guides" },
//             { path: "/blog", label: "Blog" },
//             { path: "/about", label: "About" },
//           ].map((link, index) => (
//             <Link
//               key={index}
//               href={link.path}
//               className="px-5 py-2 text-lg transition-all duration-300 rounded-lg hover:underline"
//             >
//               {link.label}
//             </Link>
//           ))}

//           {/* Login Button */}
//           <Link href="/login">
//             <button className="flex items-center px-5 py-2 rounded-lg font-medium">
//               <FaUser className="mr-2" /> Login
//             </button>
//           </Link>

//           {/* Get App Button */}
//           <Link href="/get-app">
//             <button className="bg-black text-white px-5 py-2 rounded-lg font-medium">
//               Get the App
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           className="lg:hidden text-3xl   focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle Navigation Menu"
//         >
//           {isOpen ? <IoMdClose className="text-black" /> : <FaBarsStaggered className="text-black" />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "100vh" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-white shadow-md w-full absolute left-0 top-full border-t"
//           >
//             <div className="flex flex-col items-center space-y-3 py-4">
//               {[
//                 { path: "/experience", label: "Experience" },
//                 { path: "/party-guides", label: "Party Guides" },
//                 { path: "/blog", label: "Blog" },
//                 { path: "/about", label: "About" },
//               ].map((link, index) => (
//                 <Link
//                   key={index}
//                   href={link.path}
//                   className="block w-full text-center py-2 text-lg font-medium hover:bg-gray-200"
//                   onClick={toggleMenu} // Close menu when clicking a link
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               {/* Get App Button (Mobile) */}
//               <Link href="/get-app">
//                 <button
//                   className="bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all"
//                   onClick={toggleMenu} // Close menu on click
//                 >
//                   Get the App
//                 </button>
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;






















"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBarsStaggered, FaUser } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Headers from "./Header";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
    <Headers/>
    <nav className="font-serif px-6 md:px-24 bg-white text-black lg:border-b-[0.5px] relative z-50">
      <div className="flex items-center justify-between py-4 container mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo2.png"
            className="h-16 w-auto object-cover"
            alt="Logo"
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 font-medium items-center">
          {[
            { path: "/experience", label: "Experience" },
            // { path: "/party-guides", label: "Party Guides" },
            // { path: "/blog", label: "Blog" },
            // { path: "/about", label: "About" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="px-5 py-2 text-lg transition-all duration-300 rounded-lg lg:hover:underline"
            >
              {link.label}
            </Link>
          ))}

          {/* Login Button */}
          {/* <Link href="/login">
            <button className="flex items-center px-5 py-2 rounded-lg font-medium">
              <FaUser className="mr-2" /> Login
            </button>
          </Link> */}

          {/* Get App Button */}
          <Link href="/get-app">
            <button className="bg-black text-white px-5 py-2 rounded-lg font-medium">
              Get the App
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center lg:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <IoMdClose /> : <FaBarsStaggered />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-md w-full absolute left-0 top-full border-t"
          >
            <div className="flex flex-col items-center space-y-3 py-4">
              {[
                { path: "/experience", label: "Experience" },
                // { path: "/party-guides", label: "Party Guides" },
                // { path: "/blog", label: "Blog" },
                // { path: "/about", label: "About" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="block w-full text-center py-2 text-lg font-medium"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}

              {/* Get App Button (Mobile) */}
              <Link href="/get-app" className="w-full text-center">
                <button
                  className="w-4/5 mx-auto py-2 rounded-lg font-medium bg-black text-white"
                  onClick={toggleMenu}
                >
                  Get the App
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
};

export default Navbar;
