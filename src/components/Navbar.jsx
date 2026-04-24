import React from "react";
import logo from "../assets/logo.jpeg"; // adjust path if needed
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Tajdeed Typing Center"
            className="w-14 h-14 object-contain rounded-full"
          />

          <div className="leading-tight">
            <h1 className="font-bold text-lg text-green-700">
              Tajdeed Typing
            </h1>
            <p className="text-xs text-gray-500">
              Typing Center UAE
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-green-600 font-semibold border-b-2 border-green-600 pb-1"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-green-700 hover:text-green-800 font-semibold transition"
          >
            About Us
          </a>

          <a
            href="./services2"
            className="text-green-700 hover:text-green-800 font-semibold transition"
          >
          Services
          </a>

          <a
            href="#contact"
            className="text-green-700 hover:text-green-800 font-semibold transition"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/9719776"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium transition"
        >
          WhatsApp Us
        </a>

      </div>
    </nav>
  );
};

export default Navbar;