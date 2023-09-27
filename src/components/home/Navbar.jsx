import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl text-white font-semibold">
          TechBook
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;