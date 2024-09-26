import React, { useState } from 'react';

function HideShow() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Hide/Show Component</h1>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none mb-4"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
        {isVisible && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <p>This is the content to show or hide.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HideShow;
