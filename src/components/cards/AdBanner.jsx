// src/AdBanner.jsx

const AdBanner = () => {
  return (
    <div className="relative w-full px-5 bg-white h-96 overflow-hidden rounded-lg shadow-lg">
      <img
        src="https://blog.swiggy.com/wp-content/uploads/2024/05/IMG_4011-1.jpg"
        alt="Ad Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start  p-4 bg-black bg-opacity-50 text-white">
        <h2 className="text-3xl font-bold">Special Offer!</h2>
        <p className="mt-1">
          Get 50% off on your first purchase. Limited time only!
        </p>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default AdBanner;
