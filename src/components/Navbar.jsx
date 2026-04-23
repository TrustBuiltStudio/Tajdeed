import React from 'react';



const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 relative flex items-center justify-center">
            {/* Simple logo placeholder based on image */}
            <div className="w-8 h-8 border-[6px] border-b-black border-l-green-600 border-r-red-600 border-t-transparent rotate-45"></div>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex flex-col items-center">
            <a href="#" className="text-green-600 font-semibold text-sm">Home</a>
            <div className="w-4 h-1 bg-green-600 rounded-full mt-1"></div>
          </div>
          <a href="#about" className="text-green-700 hover:text-green-800 font-semibold text-sm transition-colors">About Us</a>
          <a href="#courses" className="text-green-700 hover:text-green-800 font-semibold text-sm transition-colors">Courses</a>
          <a href="#teachers" className="text-green-700 hover:text-green-800 font-semibold text-sm transition-colors">Teachers</a>
          <a href="#admissions" className="text-green-700 hover:text-green-800 font-semibold text-sm transition-colors">Admissions</a>
          <a href="#contact" className="text-green-700 hover:text-green-800 font-semibold text-sm transition-colors">Contact</a>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="h-6 w-px bg-gray-300"></div>

          <div className="flex items-center gap-2 cursor-pointer">
            <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto rounded-sm" />
            <span className="text-gray-700 text-sm font-medium">India</span>
          </div>

          <div className="h-6 w-px bg-gray-300"></div>

          {/* <div className="flex items-center space-x-3">
            <a href="#" className="w-8 h-8 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
