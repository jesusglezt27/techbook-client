import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Virtual Library!</h1>
        <p className="text-lg mb-6">Discover, Read, and Manage Your Favorite Books</p>
        <a href="/home" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105">
        Explore Books
        </a>
      </div>
    </div>
  );
};

export default HomePage;
