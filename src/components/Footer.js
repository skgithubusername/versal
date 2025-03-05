import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          {/* Logo */}
        <div className = " flex items-center">
        <Link href="/" className="flex items-center">
            <img
               src="/logo2.png"
              className="h-24 w-auto object-cover"
              alt="Logo"
              loading="lazy"
            />
          </Link>
         {/* <h2 className=" mt-20  font-semibold text-lg text-teal-500">Xploroo11</h2> */}

        </div>

          {/* App Download Buttons */}
          <div className="flex gap-4 mt-6">
            <button>
              <Image
                src="/google.png"
                alt="Get it on Google Play"
                width={130}
                height={40}
                className="w-auto h-auto"
              />
            </button>
            <button>
              <Image
                src="/apple.png"
                alt="Download on the App Store"
                width={130}
                height={40}
                className="w-auto h-auto"
              />
            </button>
          </div>

          {/* Links */}
          <div className="mt-8">
            <ul className="flex flex-col md:flex-row md:gap-4 md:items-center gap-3 ">
              <li className="hover:underline cursor-pointer">Book experience</li>
              <li className="hover:underline cursor-pointer">Cities</li>
              <li className="hover:underline cursor-pointer">Partner with us</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">About</li>
            </ul>
            <ul className="flex flex-col md:flex-row md:gap-6 md:items-center gap-3 mt-4 md:mt-2">
              <li className="hover:underline cursor-pointer">FAQ</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">
            <FaInstagram className="cursor-pointer hover:text-gray-400 transition duration-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-400 transition duration-300" />
            <FaLinkedin className="cursor-pointer hover:text-gray-400 transition duration-300" />
            <FaFacebook className="cursor-pointer hover:text-gray-400 transition duration-300" />
          </div>

          {/* Copyright */}
          <p className="mt-6 text-sm text-gray-400">
            Copyright © 2023 Batch. All rights reserved |{" "}
            <span className="hover:underline cursor-pointer">Privacy</span> |{" "}
            <span className="hover:underline cursor-pointer">Terms</span>
          </p>
        </div>

        {/* Right Side */}
        <div className=" lg:ml-44">
          <h3 className="text-lg font-semibold">Sign up for party trends and promotions</h3>

          {/* Input Field and Send Button */}
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md mt-4">
            <input
              type="text"
              placeholder="Enter your number"
              className="p-2 border rounded w-full sm:w-[200px] text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button className="bg-black border-2 border-white  px-6 py-2 rounded-lg w-full sm:w-auto hover:bg-gray-200 transition duration-300">
              Sing me up !
            </button>
          </div>

          <p className="mt-3 text-xs text-gray-400">
            By signing up, you agree to live, laugh, love your way through life. Oh, and to our{" "}
            <span className="hover:underline cursor-pointer">Terms & Conditions</span> and{" "}
            <span className="hover:underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
