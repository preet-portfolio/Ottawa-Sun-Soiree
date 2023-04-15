import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-yellow-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <img
              src="/ottawa-sun-soiree-logo.png"
              alt="Ottawa Sun Soiree"
              className="h-12 w-auto"
            />
            <h1 className="text-white text-3xl font-bold ml-4">
              Welcome to Ottawa Sun Soiree
            </h1>
          </div>
          <p className="text-white text-lg mt-4">
            Curated picnic boxes featuring delicious food items from local
            restaurants
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <img
              src="/outdoor-picnic-1.jpg"
              alt="Outdoor picnic in Ottawa park"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <img
              src="/outdoor-picnic-2.jpg"
              alt="Outdoor picnic in Ottawa park"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <img
              src="/outdoor-picnic-3.jpg"
              alt="Outdoor picnic in Ottawa park"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Experience the Joy of Outdoor Picnics
        </h2>
        <p className="text-gray-700 mb-8">
          Enjoy the beautiful parks and outdoor spaces in Ottawa with our
          curated picnic boxes.
        </p>
        <a
          href="/menu"
          className="bg-yellow-500 text-white px-8 py-4 font-semibold rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out"
        >
          Explore Our Menu
        </a>
      </div>
    </div>
  );
};

export default HomePage;
