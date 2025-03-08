

// import React, { useState, useEffect } from "react";

// const locations = ["All", "Goa", "Himachal Pradesh",  "Utrakhand", "Punjab"];

// const cardsData = {
//   Goa: [
//     {
//       id: 1,
//       images: ["/images/goa/Ashore by vista/goa1.webp","/images/goa/Ashore by vista/goa2.webp" , "/images/goa/Ashore by vista/goa3.jpg", "/images/goa/Ashore by vista/goa4.jpg", "/images/Ashore by vista/goa/goa5.jpg"],
//       title: "Ashore by vista",
//       description: "Enjoy the serene beaches of Goa."
//     },
//     {
//       id: 2,
//       images: ["/images/goa/La Bougainvillea/goa1.webp", "/images/goa/La Bougainvillea/goa2.jpg","/images/goa/La Bougainvillea/goa5.jpg", "/images/goa/La Bougainvillea/goa6.jpg", "/images/goa/La Bougainvillea/goa7.jpg"],
//       title: "La Bougainvillea",
//       description: "Experience breathtaking sunsets along the coast."
//     },
//     {
//       id: 3,
//       images: ["/images/goa/Casa De Fiesta/goa1.jpg","/images/goa/Casa De Fiesta/goa2.jpg" , "/images/goa/Casa De Fiesta/goa3.jpg", "/images/goa/Casa De Fiesta/goa4.jpg", "/images/Casa De Fiesta/goa/goa5.jpg"],
//       title: "Casa De Fiesta",
//       description: "Enjoy the serene beaches of Goa."
//     },
//     {
//       id: 4,
//       images: ["/images/goa/Nature's Abode/goa1.jpg", "/images/goa/Nature's Abode/goa2.jpg","/images/goa/Nature's Abode/goa3.jpg", "/images/goa/Nature's Abode/goa4.jpg", "/images/goa/Nature's Abode/goa5.jpg"],
//       title: "Nature's Abode",
//       description: "Experience breathtaking sunsets along the coast."
//     },
//     {
//       id: 5,
//       images: ["/images/goa/Waterlily/goa1.jpg", "/images/goa/Waterlily/goa2.jpg","/images/goa/Waterlily/goa3.jpg", "/images/goa/Waterlily/goa4.jpg", "/images/goa/Waterlily/goa5.jpg"],

//       title: "Waterlily",
//       description: "Enjoy the serene beaches of Goa."
//     },
//   ],  
//   "Himachal Pradesh" : [
//     {
//       id: 6,
//       images: ["/images/Himachal Pradesh/Casa Bella Vista/hm1.jpg","/images/Himachal Pradesh/Casa Bella Vista/hm2.jpg" , "/images/Himachal Pradesh/Casa Bella Vista/hm3.jpg", "/images/Himachal Pradesh/Casa Bella Vista/hm4.jpg", "/images/Himachal Pradesh/Casa Bella Vista/hm5.jpg"],
//       title: "Casa Bella Vista",
//       description: "Enjoy the serene beaches of Himachal Pradesh."
//     },
//     {
//       id: 7,
//       images: ["/images/Himachal Pradesh/Nivriti/hm1.jpg","/images/Himachal Pradesh/Nivriti/hm2.jpg" , "/images/Himachal Pradesh/Nivriti/hm3.jpg", "/images/Himachal Pradesh/Nivriti/hm4.jpg", "/images/Himachal Pradesh/Nivriti/hm5.jpg"],
//       title: "Nivriti",
//       description: "Enjoy the serene beaches of Himachal Pradesh."
//     },
//     {
//       id: 8,
//       images: ["/images/Himachal Pradesh/Paris Villa/hm1.jpg","/images/Himachal Pradesh/Paris Villa/hm2.jpg" , "/images/Himachal Pradesh/Paris Villa/hm3.jpg", "/images/Himachal Pradesh/Paris Villa/hm4.jpg", "/images/Himachal Pradesh/Paris Villa/hm5.jpg"],
//       title: "Paris Villa",
//       description: "Enjoy the serene beaches of Himachal Pradesh."
//     },
//     {
//       id: 9,
//       images: ["/images/Himachal Pradesh/The Zevog Villa/hm1.webp","/images/Himachal Pradesh/The Zevog Villa/hm2.jpg" , "/images/Himachal Pradesh/The Zevog Villa/hm3.jpg", "/images/Himachal Pradesh/The Zevog Villa/hm4.jpg", "/images/Himachal Pradesh/The Zevog Villa/hm5.jpg"],
//       title: "The Zevog Villa",
//       description: "Enjoy the serene beaches of Himachal Pradesh."
//     },
//     {
//       id: 10,
//       images: ["/images/Himachal Pradesh/Villa Mountain Crest/hm1.jpg","/images/Himachal Pradesh/Villa Mountain Crest/hm2.jpg" , "/images/Himachal Pradesh/Villa Mountain Crest/hm3.jpg", "/images/Himachal Pradesh/Villa Mountain Crest/hm4.jpg", "/images/Himachal Pradesh/Villa Mountain Crest/hm5.jpg"],
//       title: "Villa Mountain Crest",
//       description: "Enjoy the serene beaches of Himachal Pradesh."
//     },
    
//   ],
//   Utrakhand: [
//     {
//       id: 11, 
//       images: ["/images/Utrakhand/Dusk & Dawn/u1.jpg","/images/Utrakhand/Dusk & Dawn/u2.webp" , "/images/Utrakhand/Dusk & Dawn/u4.jpg", "/images/Utrakhand/Dusk & Dawn/u3.webp", "/images/Utrakhand/Dusk & Dawn/u5.webp"],
//       title: "Dusk & Dawn",
//       description: "Enjoy the serene beaches of Utrakhand."
//     },
//     {
//       id: 12, 
//       images: ["/images/Utrakhand/Mistletoe House/u1.jpg","/images/Utrakhand/Mistletoe House/u2.jpg" , "/images/Utrakhand/Mistletoe House/u3.jpg", "/images/Utrakhand/Mistletoe House/u4.jpg", "/images/Utrakhand/Mistletoe House/u5.jpg"],
//       title: "Mistletoe House",
//       description: "Enjoy the serene beaches of Utrakhand."
//     },
//     {
//       id: 13,  
//       images: ["/images/Utrakhand/Oberoi's Chalet/u1.jpg","/images/Utrakhand/Oberoi's Chalet/u2.jpg" , "/images/Utrakhand/Oberoi's Chalet/u3.jpg", "/images/Utrakhand/Oberoi's Chalet/u4.jpg", "/images/Utrakhand/Oberoi's Chalet/u5.webp"],
//       title: "Oberoi's Chalet",
//       description: "Enjoy the serene beaches of Utrakhand."
//     },
//     {
//       id: 14, 
//       images: ["/images/Utrakhand/The Willowfield/u1.jpg","/images/Utrakhand/The Willowfield/u2.webp" , "/images/Utrakhand/The Willowfield/u4.jpg", "/images/Utrakhand/The Willowfield/u3.webp", "/images/Utrakhand/The Willowfield/u5.jpg"],
//       title: "The Willowfield",
//       description: "Enjoy the serene beaches of Utrakhand."
//     },
   
//   ],
//   // Punjab: [
//   //   {
//   //     id: 15,
//   //     images: ["/bangalore1.jpg", "/bangalore2.jpg", "/bangalore3.jpg"],
//   //     title: "Tech Hub",
//   //     description: "Discover the Silicon Valley of India."
//   //   }
//   // ]
// };

// export default function FilterableCards() {
//   const [selectedLocation, setSelectedLocation] = useState("All");
//   const [currentImageIndexes, setCurrentImageIndexes] = useState({});
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Initialize current image indexes for each card
//   useEffect(() => {
//     const initialIndexes = {};
//     Object.values(cardsData).flat().forEach(card => {
//       initialIndexes[card.id] = 0;
//     });
//     setCurrentImageIndexes(initialIndexes);
//   }, []);

//   const getFilteredCards = () => {
//     if (selectedLocation === "All") {
//       return Object.values(cardsData).flat();
//     }
//     return cardsData[selectedLocation] || [];
//   };

//   const nextImage = (cardId) => {
//     const card = Object.values(cardsData).flat().find(c => c.id === cardId);
//     if (!card) return;
    
//     setCurrentImageIndexes(prev => ({
//       ...prev,
//       [cardId]: (prev[cardId] + 1) % card.images.length
//     }));
//   };

//   const prevImage = (cardId) => {
//     const card = Object.values(cardsData).flat().find(c => c.id === cardId);
//     if (!card) return;
    
//     setCurrentImageIndexes(prev => ({
//       ...prev,
//       [cardId]: (prev[cardId] - 1 + card.images.length) % card.images.length
//     }));
//   };

//   const handleLocationChange = (location) => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setSelectedLocation(location);
//       setIsAnimating(false);
//     }, 300);
//   };

//   const filteredCards = getFilteredCards();

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore Destinations</h1>
        
//         {/* Location Filters */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {locations.map((location) => (
//             <button
//               key={location}
//               onClick={() => handleLocationChange(location)}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md
//                 ${selectedLocation === location 
//                   ? "bg-indigo-600 text-white" 
//                   : "bg-white text-gray-700 hover:bg-gray-100"}`}
//             >
//               {location}
//             </button>
//           ))}
//         </div>

//         {/* Cards Grid */}
//         <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
//           {filteredCards.map((card) => (
//             <div
//               key={card.id}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Image Carousel */}
//               <div className="relative h-64 overflow-hidden">
//                 {card.images.map((img, index) => (
//                   <div
//                     key={index}
//                     className={`absolute inset-0 transition-opacity duration-500 ${
//                       currentImageIndexes[card.id] === index ? "opacity-100" : "opacity-0"
//                     }`}
//                   >
//                     <img 
//                       src={img} 
//                       alt={`${card.title} - image ${index + 1}`} 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}
                
//                 {/* Navigation Arrows */}
//                 {card.images.length > 1 && (
//                   <>
//                     <button 
//                       onClick={() => prevImage(card.id)}
//                       className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
//                       aria-label="Previous image"
//                     >
//                       ←
//                     </button>
//                     <button 
//                       onClick={() => nextImage(card.id)}
//                       className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
//                       aria-label="Next image"
//                     >
//                       →
//                     </button>
                    
//                     {/* Indicators */}
//                     <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
//                       {card.images.map((_, index) => (
//                         <div 
//                           key={index}
//                           className={`h-1.5 rounded-full transition-all ${
//                             currentImageIndexes[card.id] === index 
//                               ? "w-4 bg-white" 
//                               : "w-1.5 bg-white bg-opacity-60"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </div>
              
//               {/* Card Content */}
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
//                   <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
//                     {card.images.length} photos
//                   </span>
//                 </div>
//                 <p className="text-gray-600 mb-4">{card.description}</p>
//                 <button className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
//                    Booking Request
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {filteredCards.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-lg text-gray-600">No destinations found for this location.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


























import React, { useState, useEffect } from "react";

const locations = ["All", "Goa", "Himachal Pradesh",  "Utrakhand", "Punjab"];

const cardsData = {
  Goa: [
    {
      id: 1,
      images: ["/images/goa/Ashore by vista/goa1.webp","/images/goa/Ashore by vista/goa2.webp" , "/images/goa/Ashore by vista/goa3.jpg", "/images/goa/Ashore by vista/goa4.jpg", "/images/Ashore by vista/goa/goa5.jpg"],
      title: "Ashore by vista",
      description: "Enjoy the serene beaches of Goa."
    },
    {
      id: 2,
      images: ["/images/goa/La Bougainvillea/goa1.webp", "/images/goa/La Bougainvillea/goa2.jpg","/images/goa/La Bougainvillea/goa5.jpg", "/images/goa/La Bougainvillea/goa6.jpg", "/images/goa/La Bougainvillea/goa7.jpg"],
      title: "La Bougainvillea",
      description: "Experience breathtaking sunsets along the coast."
    },
    {
      id: 3,
      images: ["/images/goa/Casa De Fiesta/goa1.jpg","/images/goa/Casa De Fiesta/goa2.jpg" , "/images/goa/Casa De Fiesta/goa3.jpg", "/images/goa/Casa De Fiesta/goa4.jpg","/images/goa/Casa De Fiesta/goa5.jpg",],
      title: "Casa De Fiesta",
      description: "Enjoy the  of Goa."
    },
    {
      id: 4,
      images: ["/images/goa/Nature's Abode/goa1.jpg", "/images/goa/Nature's Abode/goa2.jpg","/images/goa/Nature's Abode/goa3.jpg", "/images/goa/Nature's Abode/goa4.jpg", "/images/goa/Nature's Abode/goa5.jpg"],
      title: "Nature's Abode",
      description: "Experience breathtaking sunsets along the coast."
    },
    {
      id: 5,
      images: ["/images/goa/Waterlily/goa1.jpg", "/images/goa/Waterlily/goa2.jpg","/images/goa/Waterlily/goa3.jpg", "/images/goa/Waterlily/goa4.jpg", "/images/goa/Waterlily/goa5.webp"],

      title: "Waterlily",
      description: "Enjoy the serene beaches of Goa."
    },
  ],  
  "Himachal Pradesh" : [
    {
      id: 6,
      images: ["/images/Himachal Pradesh/Casa Bella Vista/hm1.jpg","/images/Himachal Pradesh/Casa Bella Vista/hm2.jpg" , "/images/Himachal Pradesh/Casa Bella Vista/hm3.jpg", "/images/Himachal Pradesh/Casa Bella Vista/hm4.jpg", "/images/Himachal Pradesh/Casa Bella Vista/hm5.jpg"],
      title: "Casa Bella Vista",
      description: "Enjoy the serene beaches of Himachal Pradesh."
    },
    {
      id: 7,
      images: ["/images/Himachal Pradesh/Nivriti/hm1.jpg","/images/Himachal Pradesh/Nivriti/hm2.jpg" , "/images/Himachal Pradesh/Nivriti/hm3.jpg", "/images/Himachal Pradesh/Nivriti/hm4.jpg", "/images/Himachal Pradesh/Nivriti/hm5.jpg"],
      title: "Nivriti",
      description: "Enjoy the serene beaches of Himachal Pradesh."
    },
    {
      id: 8,
      images: ["/images/Himachal Pradesh/Paris Villa/hm1.jpg","/images/Himachal Pradesh/Paris Villa/hm2.jpg" , "/images/Himachal Pradesh/Paris Villa/hm3.jpg", "/images/Himachal Pradesh/Paris Villa/hm4.jpg", "/images/Himachal Pradesh/Paris Villa/hm5.jpg"],
      title: "Paris Villa",
      description: "Enjoy the serene beaches of Himachal Pradesh."
    },
    {
      id: 9,
      images: ["/images/Himachal Pradesh/The Zevog Villa/hm1.webp","/images/Himachal Pradesh/The Zevog Villa/hm2.jpg" , "/images/Himachal Pradesh/The Zevog Villa/hm3.jpg", "/images/Himachal Pradesh/The Zevog Villa/hm4.jpg", "/images/Himachal Pradesh/The Zevog Villa/hm5.jpg"],
      title: "The Zevog Villa",
      description: "Enjoy the serene beaches of Himachal Pradesh."
    },
    {
      id: 10,
      images: ["/images/Himachal Pradesh/Villa Mountain Crest/hm1.jpg","/images/Himachal Pradesh/Villa Mountain Crest/hm2.jpg" , "/images/Himachal Pradesh/Villa Mountain Crest/hm3.jpg", "/images/Himachal Pradesh/Villa Mountain Crest/hm4.jpg", "/images/Himachal Pradesh/Villa Mountain Crest/hm5.jpg"],
      title: "Villa Mountain Crest",
      description: "Enjoy the serene beaches of Himachal Pradesh."
    },
    
  ],
  Utrakhand: [
    {
      id: 11, 
      images: ["/images/Utrakhand/Dusk & Dawn/u1.jpg","/images/Utrakhand/Dusk & Dawn/u2.webp" , "/images/Utrakhand/Dusk & Dawn/u4.jpg", "/images/Utrakhand/Dusk & Dawn/u3.webp", "/images/Utrakhand/Dusk & Dawn/u5.webp"],
      title: "Dusk & Dawn",
      description: "Enjoy the serene beaches of Utrakhand."
    },
    {
      id: 12, 
      images: ["/images/Utrakhand/Mistletoe House/u1.jpg","/images/Utrakhand/Mistletoe House/u2.jpg" , "/images/Utrakhand/Mistletoe House/u3.jpg", "/images/Utrakhand/Mistletoe House/u4.jpg", "/images/Utrakhand/Mistletoe House/u5.jpg"],
      title: "Mistletoe House",
      description: "Enjoy the serene beaches of Utrakhand."
    },
    {
      id: 13,  
      images: ["/images/Utrakhand/Oberoi's Chalet/u1.jpg","/images/Utrakhand/Oberoi's Chalet/u2.jpg" , "/images/Utrakhand/Oberoi's Chalet/u3.jpg", "/images/Utrakhand/Oberoi's Chalet/u4.jpg", "/images/Utrakhand/Oberoi's Chalet/u5.webp"],
      title: "Oberoi's Chalet",
      description: "Enjoy the serene beaches of Utrakhand."
    },
    {
      id: 14, 
      images: ["/images/Utrakhand/The Willowfield/u1.jpg","/images/Utrakhand/The Willowfield/u2.jpg" , "/images/Utrakhand/The Willowfield/u4.jpg", "/images/Utrakhand/The Willowfield/u3.jpg", "/images/Utrakhand/The Willowfield/u5.jpg"],
      title: "The Willowfield",
      description: "Enjoy the serene beaches of Utrakhand."
    },
   
  ],
  // Punjab: [
  //   {
  //     id: 15,
  //     images: ["/bangalore1.jpg", "/bangalore2.jpg", "/bangalore3.jpg"],
  //     title: "Tech Hub",
  //     description: "Discover the Silicon Valley of India."
  //   }
  // ]
};
export default function FilterableCards() {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Booking form state
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    persons: ""
  });

  // Initialize current image indexes for each card
  useEffect(() => {
    const initialIndexes = {};
    Object.values(cardsData).flat().forEach(card => {
      initialIndexes[card.id] = 0;
    });
    setCurrentImageIndexes(initialIndexes);
  }, []);

  const getFilteredCards = () => {
    if (selectedLocation === "All") {
      return Object.values(cardsData).flat();
    }
    return cardsData[selectedLocation] || [];
  };

  const nextImage = (cardId) => {
    const card = Object.values(cardsData).flat().find(c => c.id === cardId);
    if (!card) return;
    
    setCurrentImageIndexes(prev => ({
      ...prev,
      [cardId]: (prev[cardId] + 1) % card.images.length
    }));
  };

  const prevImage = (cardId) => {
    const card = Object.values(cardsData).flat().find(c => c.id === cardId);
    if (!card) return;
    
    setCurrentImageIndexes(prev => ({
      ...prev,
      [cardId]: (prev[cardId] - 1 + card.images.length) % card.images.length
    }));
  };

  const handleLocationChange = (location) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedLocation(location);
      setIsAnimating(false);
    }, 300);
  };

  // Booking form handlers
  const openBookingForm = (card) => {
    setSelectedProperty(card);
    // Pre-fill the location field based on the selected property
    const regionName = Object.entries(cardsData).find(([region, cards]) => 
      cards.some(c => c.id === card.id)
    )?.[0] || "";
    
    setBookingForm(prev => ({
      ...prev,
      location: `${regionName} - ${card.title}`
    }));
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSelectedProperty(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the booking form data (e.g., send to server)
    console.log("Booking form submitted:", bookingForm);
    
    // Reset form and close popup
    setBookingForm({
      name: "",
      phone: "",
      email: "",
      location: "",
      persons: ""
    });
    closeBookingForm();
    
    // You could add a success message here
    alert("Booking request received. We'll contact you soon!");
  };

  const filteredCards = getFilteredCards();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore Destinations</h1>
        
        {/* Location Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => handleLocationChange(location)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md
                ${selectedLocation === location 
                  ? "bg-indigo-600 text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Carousel */}
              <div className="relative h-64 overflow-hidden">
                {card.images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      currentImageIndexes[card.id] === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${card.title} - image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Navigation Arrows */}
                {card.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => prevImage(card.id)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                    <button 
                      onClick={() => nextImage(card.id)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                      aria-label="Next image"
                    >
                      →
                    </button>
                    
                    {/* Indicators */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                      {card.images.map((_, index) => (
                        <div 
                          key={index}
                          className={`h-1.5 rounded-full transition-all ${
                            currentImageIndexes[card.id] === index 
                              ? "w-4 bg-white" 
                              : "w-1.5 bg-white bg-opacity-60"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {card.images.length} photos
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <button 
                  onClick={() => openBookingForm(card)}
                  className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Booking Request
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No destinations found for this location.</p>
          </div>
        )}
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden animate-fade-in">
            <div className="bg-indigo-600 p-4 text-white">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Book {selectedProperty?.title}</h3>
                <button 
                  onClick={closeBookingForm}
                  className="text-white hover:text-indigo-100 focus:outline-none"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleFormChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Connect No.</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleFormChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleFormChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={bookingForm.location}
                    onChange={handleFormChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor="persons" className="block text-sm font-medium text-gray-700 mb-1">No. of Persons</label>
                  <input
                    type="number"
                    id="persons"
                    name="persons"
                    value={bookingForm.persons}
                    onChange={handleFormChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    min="1"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}