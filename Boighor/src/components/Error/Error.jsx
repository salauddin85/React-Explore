import React from 'react';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-500 tracking-widest">404</h1>
        <h2 className="text-2xl mt-4 font-semibold text-gray-800">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Error;
