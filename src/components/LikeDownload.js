import { useState } from "react";
import { FaHeart, FaDownload } from "react-icons/fa";

const LikeDownload = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="mt-6 flex items-center justify-between">
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
        Book Now
      </button>

      <div className="flex items-center space-x-4">
        <button onClick={() => setLiked(!liked)} className="text-gray-600 hover:text-red-500 transition">
          <FaHeart className={`text-xl ${liked ? "text-red-500" : ""}`} />
        </button>
        <button className="text-gray-600 hover:text-blue-500 transition">
          <FaDownload className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default LikeDownload;
