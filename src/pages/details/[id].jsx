// import { useRouter } from "next/router";
// import React, { useState } from "react";

// const cardDetails = {
//   1: {
//     title: "Solo Adventure",
//     category: "Solo",
//     description: "Perfect for individual travelers",
//     price: 99,
//     details: {
//       about: "You and your crew will be treated like royalty on this luxurious yacht cruise through Cabo’s breathtaking shores! Let a dedicated and experienced crew handle your every need, from gourmet food to ice-cold cocktails and insight. Round up your party crew and climb aboard for three hours of sun, sea, and relaxation.",
//       fullAbout: "You and your crew will be treated like royalty on this luxurious yacht cruise through Cabo’s breathtaking shores! Let a dedicated and experienced crew handle your every need, from gourmet food to ice-cold cocktails and insight. Round up your party crew and climb aboard for three hours of sun, sea, and relaxation. Experience the breathtaking beauty of Los Cabos while enjoying top-notch service, comfort, and adventure.",
//       whyWeLoveIt: [
//         "VIP service - a welcoming and professional crew to guide you through the day",
//         "Next-level comfort - spacious deck, shaded areas, hotel-like bathrooms, towels, water toys, and more",
//         "Food & bar - we provide fresh, high-quality products and premium beverages on board",
//         "Nature at its best - you can't beat the scenic coastline of Los Cabos",
//         "One-stop planning & execution - we've got everything covered so you can sit back and enjoy!",
//       ],
//       additionalInfo: [
//         "Although everything is included, feel free to bring drinks and snacks – we're happy to serve them!",
//         "It is custom to leave 15-20% gratuity",
//         "Sun protection clothes and lotions are recommended",
//         "Meeting location: H dock, IGY marina, Cabo San Lucas, BCS, MX 23450",
//       ],
//       partnerInfo: "Cabo Sailing has been operating yachts and sailing cruises in Cabo San Lucas since 2005. Over the years, we gathered a lot of experience and kept our enthusiasm for hosting and boating together.",
//     },
//   },
//   2: {
//     title: "Romantic Getaway",
//     category: "Couple",
//     description: "Ideal for couples",
//     price: 199,
//     details: { /* Same structure as Solo Adventure */ },
//   },
//   3: {
//     title: "Family Fun",
//     category: "Group",
//     description: "Great for families and friends",
//     price: 299,
//     details: { /* Same structure as Solo Adventure */ },
//   },
//   4: {
//     title: "Business Retreat",
//     category: "Corporate",
//     description: "Professional environment for teams",
//     price: 499,
//     details: { /* Same structure as Solo Adventure */ },
//   },
// };

// const DetailsPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const card = cardDetails[id];
//   const [showMore, setShowMore] = useState(false);

//   if (!card) {
//     return <p className="text-center mt-10 text-red-500">Card not found</p>;
//   }

//   return (
//     <div className=" p-6  mt-10">
//       <h1 className="text-2xl font-bold">{card.title}</h1>
//       <p className="text-gray-600 mt-2">Category: {card.category}</p>
//       <p className="mt-4">{card.description}</p>
//       <p className="mt-4 text-lg font-bold">Price: ${card.price}</p>

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">About this experience</h2>
//         <p className="mt-2 text-gray-700">
//           {showMore ? card.details.fullAbout : card.details.about}
//         </p>
//         {showMore && (
//           <>
//             <h2 className="text-xl font-semibold mt-4">Why we love it</h2>
//             <ul className="list-disc pl-6 mt-2 text-gray-700">
//               {card.details.whyWeLoveIt.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>

//             <h2 className="text-xl font-semibold mt-4">Additional Information</h2>
//             <ul className="list-disc pl-6 mt-2 text-gray-700">
//               {card.details.additionalInfo.map((info, index) => (
//                 <li key={index}>{info}</li>
//               ))}
//             </ul>

//             <h2 className="text-xl font-semibold mt-4">Get to know this partner</h2>
//             <p className="mt-2 text-gray-700">{card.details.partnerInfo}</p>
//           </>
//         )}
//         <button
//           className="text-blue-500 mt-2 underline"
//           onClick={() => setShowMore(!showMore)}
//         >
//           {showMore ? "See less" : "See more"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DetailsPage;






















import { useRouter } from "next/router";
import React, { useState } from "react";

const cardDetails = {
  1: {
    title: "Solo Adventure",
    category: "Solo",
    description: "Perfect for individual travelers",
    price: 99,
    details: {
      about: "You and your crew will be treated like royalty on this luxurious yacht cruise through Cabo’s breathtaking shores! Let a dedicated and experienced crew handle your every need, from gourmet food to ice-cold cocktails and insight. Round up your party crew and climb aboard for three hours of sun, sea, and relaxation.",
      fullAbout: "You and your crew will be treated like royalty on this luxurious yacht cruise through Cabo’s breathtaking shores! Let a dedicated and experienced crew handle your every need, from gourmet food to ice-cold cocktails and insight. Round up your party crew and climb aboard for three hours of sun, sea, and relaxation. Experience the breathtaking beauty of Los Cabos while enjoying top-notch service, comfort, and adventure.",
      whyWeLoveIt: [
        "VIP service - a welcoming and professional crew to guide you through the day",
        "Next-level comfort - spacious deck, shaded areas, hotel-like bathrooms, towels, water toys, and more",
        "Food & bar - we provide fresh, high-quality products and premium beverages on board",
        "Nature at its best - you can't beat the scenic coastline of Los Cabos",
        "One-stop planning & execution - we've got everything covered so you can sit back and enjoy!",
      ],
      additionalInfo: [
        "Although everything is included, feel free to bring drinks and snacks – we're happy to serve them!",
        "It is custom to leave 15-20% gratuity",
        "Sun protection clothes and lotions are recommended",
        "Meeting location: H dock, IGY marina, Cabo San Lucas, BCS, MX 23450",
      ],
      partnerInfo: "Cabo Sailing has been operating yachts and sailing cruises in Cabo San Lucas since 2005. Over the years, we gathered a lot of experience and kept our enthusiasm for hosting and boating together.",
      confidence: [
        {
          title: "Generous Cancellation",
          description: "This experience offers a full refund on cancellations with 7+ days notice."
        },
        {
          title: "Lowest Price Guarantee",
          description: "If you find it cheaper, we’ll refund the difference."
        },
        {
          title: "Satisfaction Guarantee",
          description: "We guarantee you'll have a great time or your money back."
        }
      ],
      location: {
        title: "Cabo, MX",
        address: "Centro, Marina, 23450 Cabo San Lucas, B.C.S., Mexico",
        mapUrl: "https://www.google.com/maps?q=Centro,+Marina,+23450+Cabo+San+Lucas,+B.C.S.,+Mexico",
        mapImage: "/map.png"
      }
    }
  }
};

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const card = cardDetails[id];
  const [showMore, setShowMore] = useState(false);

  if (!card) {
    return <p className="text-center mt-10 text-red-500">Card not found</p>;
  }

  return (
    <div className="p-6 mt-10">
      <h1 className="text-2xl font-bold">{card.title}</h1>
      <p className="text-gray-600 mt-2">Category: {card.category}</p>
      <p className="mt-4">{card.description}</p>
      <p className="mt-4 text-lg font-bold">Price: ${card.price}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">About this experience</h2>
        <p className="mt-2 text-gray-700">
          {showMore ? card.details.fullAbout : card.details.about}
        </p>
        {showMore && (
          <>
            <h2 className="text-xl font-semibold mt-4">Why we love it</h2>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              {card.details.whyWeLoveIt.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-4">Additional Information</h2>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              {card.details.additionalInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-4">Get to know this partner</h2>
            <p className="mt-2 text-gray-700">{card.details.partnerInfo}</p>
          </>
        )}
        <button
          className="text-blue-500 mt-2 underline"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "See less" : "See more"}
        </button>
      </div>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold">Book with Confidence!</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          {card.details.confidence.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>: {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold">Location</h2>
        <p className="mt-2 text-gray-700">{card.details.location.title}</p>
        <p className="text-gray-700">{card.details.location.address}</p>
        <a 
          href={card.details.location.mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={card.details.location.mapImage} 
            alt="Map location" 
            className="mt-2 w-full max-w-md cursor-pointer border rounded-lg shadow-md" 
          />
        </a>
      </div>
      <div>
        <h2>Cancellation Policy
          <div>
            <h3>generous Cancellation Policy
              <p>Full refund on cancellations with 7+ days notice. No refund within 7 day window.</p>
            </h3>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default DetailsPage;
