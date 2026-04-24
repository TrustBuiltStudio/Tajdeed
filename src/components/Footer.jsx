import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
// import { Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#fdfdfd] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {/* Left Content */}
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-medium text-[#059669] leading-tight mb-8">
              Tajdeed Typing and Documents Photocopying Service
            </h2>
            <button className="bg-[#059669] hover:bg-[#047857] text-white px-8 py-3.5 rounded-lg font-bold text-base transition-colors shadow-lg shadow-green-600/20">
              Contact
            </button>
          </div>

          {/* Right Links and Contact */}
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-[#059669] text-xl transition-colors">Contact</a>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#059669]" />
                <span className="text-gray-700 text-base">+971-4-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#059669]" />
                <span className="text-gray-700 text-base">tajdeedalain@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#059669] mt-0.5" />
                <span className="text-gray-700 text-base leading-relaxed">
                  Al-Safra Industrial Area, Block 11, Plot 56,<br />
                  Sultan Mohsen Bakheet Al-Salmi Building,<br />
                  Al Ain, Abu Dhabi, UAE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Added */}
        <div className="mb-12">
          <iframe
            title="Tajdeed Location"
            src="https://www.google.com/maps?q=Al%20Safra%20Industrial%20Area%20Al%20Ain%20Abu%20Dhabi&output=embed"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: "16px" }}
            loading="lazy"
            className="shadow-sm"
          ></iframe>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t-2 border-b-4 border-b-[#3e1d1b] border-t-transparent pt-8">
          <div>
            <p className="text-gray-600">© Tajdeed 2026.</p>
          </div>

          <div className="flex items-center space-x-3 mt-6 md:mt-0 pb-2">
            <a href="#" className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors">
              {/* <Linkedin className="w-5 h-5" /> */}
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors">
              {/* <Instagram className="w-5 h-5" /> */}
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors">
              {/* <Youtube className="w-5 h-5" /> */}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;