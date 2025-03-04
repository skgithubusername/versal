const DetailsHeader = ({ title, category, description, duration, price }) => {
    return (
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-600 mt-2">Category: {category}</p>
        <p className="mt-4">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-700">⏳ {duration}</span>
          <span className="text-lg font-bold text-blue-600">${price}</span>
        </div>
      </div>
    );
  };
  
  export default DetailsHeader;
  