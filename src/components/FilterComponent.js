



// import React, { useState, useEffect, useRef } from "react";
// import { Search, User, Users, Briefcase, Heart, X } from "lucide-react";

// const initialCards = [
//   { id: 1, title: "Solo Adventure", category: "Solo", description: "Perfect for individual travelers", price: 99 },
//   { id: 2, title: "Romantic Getaway", category: "Couple", description: "Ideal for couples", price: 199 },
//   { id: 3, title: "Family Fun", category: "Group", description: "Great for families and friends", price: 299 },
//   { id: 4, title: "Business Retreat", category: "Corporate", description: "Professional environment for teams", price: 499 },
// ];

// const partyData = [
//   { label: "Solo", icon: <User size={24} /> },
//   { label: "Couple", icon: <Heart size={24} /> },
//   { label: "Group", icon: <Users size={24} /> },
//   { label: "Corporate", icon: <Briefcase size={24} /> },
//   { label: "Solo", icon: <User size={24} /> },
//   { label: "Couple", icon: <Heart size={24} /> },
//   { label: "Group", icon: <Users size={24} /> },
//   { label: "Corporate", icon: <Briefcase size={24} /> },
//   { label: "Solo", icon: <User size={24} /> },
//   { label: "Couple", icon: <Heart size={24} /> },
//   { label: "Group", icon: <Users size={24} /> },
//   { label: "Corporate", icon: <Briefcase size={24} /> },
// ];

// const PartyFilterComponent = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [filteredCards, setFilteredCards] = useState(initialCards);
//   const [showSearch, setShowSearch] = useState(false);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     let results = initialCards;
//     if (searchTerm) {
//       results = results.filter((card) =>
//         card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         card.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedCategory !== "All") {
//       results = results.filter((card) => card.category === selectedCategory);
//     }
//     setFilteredCards(results);
//   }, [searchTerm, selectedCategory]);

//   return (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       <div className="flex items-center justify-between gap-4 mb-8">
        
//         {/* Desktop Search Bar */}
//         <div className="hidden lg:flex w-1/3 relative items-center gap-3">
//   {/* User Icon */}
//   <div className="h-10 w-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer">
//     <User size={20} />
//   </div>

 

//   {/* Search Input */}
//   <div className="relative w-full">
//     <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//       <Search className="h-5 w-5 text-gray-400" />
//     </div>
//     <input
//       type="text"
//       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       placeholder="Search..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//     />
//   </div>
// </div>


//         {/* Mobile Search Icon and Input */}
//         <div className="lg:hidden flex items-center gap-3 w-1/4">
//   {!showSearch ? (
//     <div className="flex items-center ml-12 gap-2">
//       {/* New Icon Before Search Icon */}
//       <div className="h-10 w-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer">
//         <User size={20} />
//       </div>

//       {/* Search Icon */}
//       <div
//         className="h-10 w-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer"
//         onClick={() => setShowSearch(true)}
//       >
//         <Search size={20} />
//       </div>
//     </div>
//   ) : (
//     <div className="flex w-[250px] items-center border border-gray-300 rounded-md p-2 bg-white">
      
//       <Search className="h-5 w-5 text-gray-400" />
//       <input
//         type="text"
//         className="w-full pl-2 outline-none"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <X
//         className="h-5 w-5 text-gray-600 cursor-pointer"
//         onClick={() => {
//           setShowSearch(false);
//           setSearchTerm("");
//         }}
//       />
//     </div>
//   )}
// </div>


//         {/* Party Filter Slider */}
//         <div className="w-full lg:w-2/3 overflow-hidden">
//           <div className="w-full overflow-x-auto scrollbar-hide pb-2" ref={sliderRef}>
//             <div className="flex gap-4 snap-x snap-mandatory min-w-max">
//               {partyData.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`relative flex-shrink-0 w-28 flex flex-col items-center ${
//                     selectedCategory === item.label ? "text-gray-900 border-b-2 border-black pb-2" : "border-0"
//                   } text-gray-600 p-4 cursor-pointer`}
//                   onClick={() => setSelectedCategory(selectedCategory === item.label ? "All" : item.label)}
//                 >
//                   <div className="flex justify-center">
//                     <div className="flex items-center justify-center text-black">{item.icon}</div>
//                   </div>
//                   <p className="font-bold text-gray-600 pt-2">{item.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cards Display */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {filteredCards.map((card) => (
//           <div key={card.id} className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="h-40 bg-gray-200 flex items-center justify-center">
//               <span className="text-gray-500">{card.category} Image</span>
//             </div>
//             <div className="p-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-bold">{card.title}</h3>
//                   <p className="text-sm text-gray-600">{card.description}</p>
//                 </div>
//                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
//                   {card.category}
//                 </span>
//               </div>
//               <div className="mt-4 flex justify-between items-center">
//                 <span className="text-lg font-bold">${card.price}</span>
//                 <button className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700">
//                   View
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PartyFilterComponent;





















// import React, { useState, useEffect, useRef } from "react";
// import { Search, User, Users, Briefcase, Heart, X } from "lucide-react";
// import { useRouter } from "next/router";

// const initialCards = [
//   { id: 1, title: "Solo Adventure", category: "Solo", description: "Perfect for individual travelers", price: 99 },
//   { id: 2, title: "Romantic Getaway", category: "Couple", description: "Ideal for couples", price: 199 },
//   { id: 3, title: "Family Fun", category: "Group", description: "Great for families and friends", price: 299 },
//   { id: 4, title: "Business Retreat", category: "Corporate", description: "Professional environment for teams", price: 499 },
// ];

// const partyData = [
//   { label: "Solo", icon: <User size={24} /> },
//   { label: "Couple", icon: <Heart size={24} /> },
//   { label: "Group", icon: <Users size={24} /> },
//   { label: "Corporate", icon: <Briefcase size={24} /> },
//   { label: "Solo", icon: <User size={24} /> },
//   { label: "Couple", icon: <Heart size={24} /> },
//   { label: "Group", icon: <Users size={24} /> },
//   { label: "Corporate", icon: <Briefcase size={24} /> },
//   { label: "Solo", icon: <User size={24} /> },
//   { label: "Couple", icon: <Heart size={24} /> },
//   { label: "Group", icon: <Users size={24} /> },
//   { label: "Corporate", icon: <Briefcase size={24} /> },
// ];

// const PartyFilterComponent = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [filteredCards, setFilteredCards] = useState(initialCards);
//   const [showSearch, setShowSearch] = useState(false);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     let results = initialCards;
//     if (searchTerm) {
//       results = results.filter((card) =>
//         card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         card.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedCategory !== "All") {
//       results = results.filter((card) => card.category === selectedCategory);
//     }
//     setFilteredCards(results);
//   }, [searchTerm, selectedCategory]);


//   const router = useRouter();
//   return (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       <div className="flex items-center justify-between gap-4 mb-8">
        
//         {/* Desktop Search Bar */}
//         <div className="hidden lg:flex w-1/3 relative items-center gap-3">
//   {/* User Icon */}
//   <div className="h-10 w-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer">
//     <User size={20} />
//   </div>

 

//   {/* Search Input */}
//   <div className="relative w-full">
//     <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//       <Search className="h-5 w-5 text-gray-400" />
//     </div>
//     <input
//       type="text"
//       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       placeholder="Search..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//     />
//   </div>
// </div>


//         {/* Mobile Search Icon and Input */}
//         <div className="lg:hidden flex items-center gap-3 w-1/4">
//   {!showSearch ? (
//     <div className="flex items-center ml-12 gap-2">
//       {/* New Icon Before Search Icon */}
//       <div className="h-10 w-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer">
//         <User size={20} />
//       </div>

//       {/* Search Icon */}
//       <div
//         className="h-10 w-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer"
//         onClick={() => setShowSearch(true)}
//       >
//         <Search size={20} />
//       </div>
//     </div>
//   ) : (
//     <div className="flex w-[250px] items-center border border-gray-300 rounded-md p-2 bg-white">
      
//       <Search className="h-5 w-5 text-gray-400" />
//       <input
//         type="text"
//         className="w-full pl-2 outline-none"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <X
//         className="h-5 w-5 text-gray-600 cursor-pointer"
//         onClick={() => {
//           setShowSearch(false);
//           setSearchTerm("");
//         }}
//       />
//     </div>
//   )}
// </div>


//         {/* Party Filter Slider */}
//         <div className="w-full lg:w-2/3 overflow-hidden">
//           <div className="w-full overflow-x-auto scrollbar-hide pb-2" ref={sliderRef}>
//             <div className="flex gap-4 snap-x snap-mandatory min-w-max">
//               {partyData.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`relative flex-shrink-0 w-28 flex flex-col items-center ${
//                     selectedCategory === item.label ? "text-gray-900 border-b-2 border-black pb-2" : "border-0"
//                   } text-gray-600 p-4 cursor-pointer`}
//                   onClick={() => setSelectedCategory(selectedCategory === item.label ? "All" : item.label)}
//                 >
//                   <div className="flex justify-center">
//                     <div className="flex items-center justify-center text-black">{item.icon}</div>
//                   </div>
//                   <p className="font-bold text-gray-600 pt-2">{item.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cards Display */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {filteredCards.map((card) => (
//         <div 
//           key={card.id} 
//           className="bg-white rounded-lg shadow overflow-hidden cursor-pointer"
//           onClick={() => router.push(`/details/${card.id}`)}
//         >
//           <div className="h-40 bg-gray-200 flex items-center justify-center">
//             <span className="text-gray-500">{card.category} Image</span>
//           </div>
//           <div className="p-4">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-lg font-bold">{card.title}</h3>
//                 <p className="text-sm text-gray-600">{card.description}</p>
//               </div>
//               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
//                 {card.category}
//               </span>
//             </div>
//             <div className="mt-4 flex justify-between items-center">
//               <span className="text-lg font-bold">${card.price}</span>
//               <button className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700">
//                 View
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default PartyFilterComponent;















import React, { useState, useEffect, useRef } from "react";
import { Search, User, Users, Briefcase, Heart, X, Play, Pause } from "lucide-react";
import { useRouter } from "next/router";

const initialCards = [
  { 
    id: 1, 
    title: "Solo Adventure", 
    category: "Solo", 
    description: "Nirvana dhar , Rajgharh Himachal Pradesh", 
    price: 99,
    videoUrl: "/video1.mp4" // Video in public folder
  },
  { 
    id: 2, 
    title: "Romantic Getaway", 
    category: "Couple", 
    description: "Rosemary cottage, Manali . Himachal Pradesh", 
    price: 199,
    videoUrl: "/video2.mp4" // Update with actual videos as needed
  },
  { 
    id: 3, 
    title: "Family Fun", 
    category: "Group", 
    description: "Nivvant farma , karjat , Maharashtra", 
    price: 299,
    videoUrl: "/video3.mp4"
  },
  { 
    id: 4, 
    title: "Family Fun", 
    category: "Group", 
    description: "The Manor ,Hideaway in the hills of Manali", 
    price: 299,
    videoUrl: "/video4.mp4"
  },
  { 
    id: 5, 
    title: "Family Fun", 
    category: "Group", 
    description: "Rosemary Cottage, Manali , Nestled in the embrace of lush rolling hills", 
    price: 299,
    videoUrl: "/video5.mp4"
  },
  { 
    id: 6, 
    title: "Family Fun", 
    category: "Group", 
    description: "Nau Nabh Cottage , Shimla", 
    price: 299,
    videoUrl: "/video6.mp4"
  },
  { 
    id: 7, 
    title: "Family Fun", 
    category: "Group", 
    description: "Eastbury , Shimla , Perched on a slope amidst greenery", 
    price: 299,
    videoUrl: "/video7.mp4"
  },
  { 
    id: 8, 
    title: "Family Fun", 
    category: "Group", 
    description: "The Little House shimla , A gem nestled amidst the picturesque hill", 
    price: 299,
    videoUrl: "/video8.mp4"
  },
  { 
    id: 9, 
    title: "Family Fun", 
    category: "Group", 
    description: "Teer Bangla , An enchanting heaven near Shimla ", 
    price: 299,
    videoUrl: "/video9.mp4"
  },
  { 
    id: 10, 
    title: "Family Fun", 
    category: "Group", 
    description: "The Orchard Song , shimla ", 
    price: 299,
    videoUrl: "/video10.mp4"
  },
  { 
    id: 11, 
    title: "Family Fun", 
    category: "Group", 
    description: "Sunset Ridge , Kasauli ", 
    price: 299,
    videoUrl: "/video11.mp4"
  },
  { 
    id: 12, 
    title: "Family Fun", 
    category: "Group", 
    description: "The Haven , Kasauli", 
    price: 299,
    videoUrl: "/video12.mp4"
  },
  
];

const partyData = [
  { label: "Solo", icon: <User size={24} /> },
  { label: "Couple", icon: <Heart size={24} /> },
  { label: "Group", icon: <Users size={24} /> },
  { label: "Corporate", icon: <Briefcase size={24} /> },
  { label: "Solo", icon: <User size={24} /> },
  { label: "Couple", icon: <Heart size={24} /> },
  { label: "Group", icon: <Users size={24} /> },
  { label: "Corporate", icon: <Briefcase size={24} /> },
  { label: "Solo", icon: <User size={24} /> },
  { label: "Couple", icon: <Heart size={24} /> },
  { label: "Group", icon: <Users size={24} /> },
  { label: "Corporate", icon: <Briefcase size={24} /> },
];

// Video Background Card Component
const VideoBackgroundCard = ({ card, onClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const handleVideoToggle = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="relative rounded-lg shadow overflow-hidden cursor-pointer h-96"
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={card.videoUrl}
        muted
        loop
      />
      
      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        {/* Top Section with Title and Category */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-white">{card.title}</h3>
            <p className="text-sm text-gray-200">{card.description}</p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {card.category}
          </span>
        </div>
        
        {/* Bottom Section with Price and Buttons */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-white">${card.price}</span>
          <div className="flex items-center space-x-2">
            {/* Video Control Button */}
            <button 
              onClick={handleVideoToggle}
              className="p-1.5 bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition-all"
            >
              {isPlaying ? 
                <Pause size={18} className="text-white" /> : 
                <Play size={18} className="text-white" />
              }
            </button>
            
            {/* View Button */}
            <button className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PartyFilterComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCards, setFilteredCards] = useState(initialCards);
  const [showSearch, setShowSearch] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    let results = initialCards;
    if (searchTerm) {
      results = results.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== "All") {
      results = results.filter((card) => card.category === selectedCategory);
    }
    setFilteredCards(results);
  }, [searchTerm, selectedCategory]);

  const router = useRouter();
  
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between gap-4 mb-8">
        
        {/* Desktop Search Bar */}
        <div className="hidden lg:flex w-1/3 relative items-center gap-3">
          {/* User Icon */}
          <div className="h-10 w-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer">
            <User size={20} />
          </div>

          {/* Search Input */}
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Mobile Search Icon and Input */}
        <div className="lg:hidden flex items-center gap-3 w-1/4">
          {!showSearch ? (
            <div className="flex items-center ml-12 gap-2">
              {/* New Icon Before Search Icon */}
              <div className="h-10 w-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer">
                <User size={20} />
              </div>

              {/* Search Icon */}
              <div
                className="h-10 w-10 flex items-center justify-center bg-black text-white rounded-full cursor-pointer"
                onClick={() => setShowSearch(true)}
              >
                <Search size={20} />
              </div>
            </div>
          ) : (
            <div className="flex w-full items-center border border-gray-300 rounded-md p-2 bg-white">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="w-full pl-2 outline-none"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <X
                className="h-5 w-5 text-gray-600 cursor-pointer"
                onClick={() => {
                  setShowSearch(false);
                  setSearchTerm("");
                }}
              />
            </div>
          )}
        </div>

        {/* Party Filter Slider */}
        <div className="w-full lg:w-2/3 overflow-hidden">
          <div className="w-full overflow-x-auto scrollbar-hide pb-2" ref={sliderRef}>
            <div className="flex gap-4 snap-x snap-mandatory min-w-max">
              {partyData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex-shrink-0 w-28 flex flex-col items-center ${
                    selectedCategory === item.label ? "text-gray-900 border-b-2 border-black pb-2" : "border-0"
                  } text-gray-600 p-4 cursor-pointer`}
                  onClick={() => setSelectedCategory(selectedCategory === item.label ? "All" : item.label)}
                >
                  <div className="flex justify-center">
                    <div className="flex items-center justify-center text-black">{item.icon}</div>
                  </div>
                  <p className="font-bold text-gray-600 pt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Background Cards Display */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCards.map((card) => (
          <VideoBackgroundCard 
            key={card.id} 
            card={card} 
            onClick={() => router.push(`/details/${card.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default PartyFilterComponent;