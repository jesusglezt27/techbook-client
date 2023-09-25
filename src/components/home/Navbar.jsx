import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl text-white font-semibold">
          TechBook
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Inicio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../context/auth.context';

// function Navbar() {
//   const { isLoggedIn } = useContext(AuthContext);

//   return (
//     <nav className="bg-blue-600">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-white text-2xl font-semibold">
//               HungryHives
//             </Link>
//           </div>
//           <div className="hidden sm:block">
//             <div className="space-x-4">
//               {isLoggedIn ? (
//                 <>
//                   <Link
//                     to="/Profile"
//                     className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     to="/user"
//                     className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     My Reservations
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     to="/Login"
//                     className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/Signup"
//                     className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Signup
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
