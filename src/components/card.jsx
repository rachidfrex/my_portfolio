import React from 'react';

// Card component for each individual card
const Card = ({ title, description, buttonLabel, status, children }) => {
  return (
    <div className="bg-custom-gray-800 text-white p-6 w-full md:w-80 rounded-lg shadow-lg shadow-gray-700 m-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-custom-gray-400 text-sm mt-2">{description}</p>
      <div className="mt-4">{children}</div>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded text-sm">
          {buttonLabel}
        </button>
        <div className="flex items-center">
          <span className={`block w-3 h-3 rounded-full ${status === 'Generating' ? 'bg-green-500' : 'bg-gray-500'} mr-2`}></span>
          <span className="text-xs">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;