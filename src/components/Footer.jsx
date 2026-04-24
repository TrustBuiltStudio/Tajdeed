import React from 'react';
// import { Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#fdfdfd] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {/* Left Content */}
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-medium text-[#059669] leading-tight mb-8">
              A typing center unlocks business and PRO opportunities.
            </h2>
            <button className="bg-[#059669] hover:bg-[#047857] text-white px-8 py-3.5 rounded-lg font-bold text-base transition-colors shadow-lg shadow-green-600/20">
              Get a Consultation
            </button>
          </div>

          {/* Right Links */}
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">Gallery</a>
              <a href="#career" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">Career</a>
              <a href="#blog" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">Contact</a>
            </div>

            <div className="flex flex-col space-y-4">
              <a href="#privacy" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">Terms & Conditions</a>
              <a href="#presskit" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">Presskit</a>
              <a href="#credits" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">Credits</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t-2 border-b-4 border-b-[#3e1d1b] border-t-transparent pt-8">
          <div>
            <p className="text-gray-600 mb-1">Proud to be a part of great success stories.</p>
            <p className="text-gray-600">© Takleesbusiness 2026.</p>
          </div>

          {/* <div className="flex items-center space-x-3 mt-6 md:mt-0 pb-2">
            <a href="#" className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
