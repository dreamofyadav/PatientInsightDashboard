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
