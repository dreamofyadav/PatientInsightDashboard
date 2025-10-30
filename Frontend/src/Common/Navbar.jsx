import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 w-full fixed top-0 left-0 shadow-md z-50">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-2xl flex items-center gap-2">
          <i className="fa-regular fa-handshake text-3xl"></i>
        </Link>

        {/* Desktop Links Centered */}
        <div className="hidden md:flex flex-1 justify-center space-x-10 text-white font-medium">
          <Link to="/" className="hover:text-blue-200 transition">Dashboard</Link>
          <Link to="/add-patient" className="hover:text-blue-200 transition">Add Patient</Link>
          <Link to="/about" className="hover:text-blue-200 transition">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-700 px-6 pb-3 space-y-3 text-center">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block text-white py-1 hover:text-blue-200 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/add-patient"
            onClick={() => setOpen(false)}
            className="block text-white py-1 hover:text-blue-200 transition"
          >
            Add Patient
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block text-white py-1 hover:text-blue-200 transition"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaSearch } from "react-icons/fa";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 w-full fixed top-0 left-0 shadow-md z-50">
//       {/* Navbar Container */}
//       <div className="flex items-center justify-between px-6 py-3">
//         {/* Logo */}
//         <Link to="/" className="text-white font-bold text-2xl">
//            <i className="fa-regular fa-handshake text-3xl "></i>
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6 text-white font-medium">
//           <Link to="/">Dashboard</Link>
//           <Link to="/add-patient">Add Patient</Link>
//           <Link to="/about">About</Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setOpen(!open)}
//         >
//           <FaBars />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-blue-700 px-6 pb-3 space-y-3">
//           <Link to="/" className="block text-white">Dashboard</Link>
//           <Link to="/add-patient" className="block text-white">Add Patient</Link>
//           <Link to="/about" className="block text-white">About</Link>
//         </div>
//       )}
//     </nav>
//   );
// }




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaSearch } from "react-icons/fa";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 p-4 shadow-md w-full fixed top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="text-white font-bold text-xl flex items-center gap-2">
//           <i className="fa-regular fa-handshake text-3xl text-white"></i>
          
//         </Link>

//         {/* Search Bar (Desktop) */}
//         <div className="hidden md:flex flex-1 justify-center mx-4">
//           <div className="flex items-center bg-white rounded-full px-3 py-1 w-1/2">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="flex-1 outline-none px-2"
//             />
//             <FaSearch className="text-blue-600" />
//           </div>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6 text-white font-medium">
//           <Link to="/" className="hover:underline text-white">
//             Dashboard
//           </Link>
//           <Link to="/add-patient" className="hover:underline text-white">
//             Add Patient
//           </Link>
//           <Link to="/about" className="hover:underline text-white">
//             About
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setOpen(!open)}
//         >
//           <FaBars />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden mt-2 space-y-2">
//           <div className="flex items-center bg-white rounded-full px-3 py-1">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="flex-1 outline-none px-2"
//             />
//             <FaSearch className="text-blue-600" />
//           </div>

//           <Link to="/" className="block text-white">
//             Dashboard
//           </Link>
//           <Link
//             to="/add-patient"
//             onClick={() => setOpen(false)}
//             className="block text-white"
//           >
//             Add Patient
//           </Link>
//           <Link to="/about" className="block text-white">
//             About
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
