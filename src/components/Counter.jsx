import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Counter</h1>
        <p className="text-4xl mb-4">{count}</p>
        <div className="flex space-x-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
