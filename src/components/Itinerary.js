import { FaCheckCircle } from "react-icons/fa";

const Itinerary = ({ itinerary }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">📅 Itinerary</h2>
      <ul className="mt-2 list-disc list-inside text-gray-700">
        {itinerary.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itinerary;
