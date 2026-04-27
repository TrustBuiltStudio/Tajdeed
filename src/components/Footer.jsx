import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#fdfdfd] pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          {/* Left Column - Company Info */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#059669] leading-tight">
              Tajdeed Typing and <br />
        Center
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              Your trusted partner for professional typing and document services in Al Ain.
            </p>
          </div>

          {/* Right Column - Navigation & Contact */}
          <div className="grid sm:grid-cols-2 gap-8">
            
            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-[#059669] transition-colors duration-200 text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/services2"
                  className="text-gray-600 hover:text-[#059669] transition-colors duration-200 text-base font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-[#059669] transition-colors duration-200 text-base font-medium"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-3 group">
                  <div className="bg-[#059669]/10 p-2 rounded-full group-hover:bg-[#059669]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#059669]" />
                  </div>
                  <span className="text-gray-700 text-base">+971-4-XXX-XXXX</span>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-3 group">
                  <div className="bg-[#059669]/10 p-2 rounded-full group-hover:bg-[#059669]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#059669]" />
                  </div>
                  <a href="mailto:tajdeedalain@gmail.com" className="text-gray-700 text-base hover:text-[#059669] transition-colors">
                    tajdeedalain@gmail.com
                  </a>
                </div>
                
                {/* Address */}
                <div className="flex gap-3 group">
                  <div className="bg-[#059669]/10 p-2 rounded-full h-10 group-hover:bg-[#059669]/20 transition-colors flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#059669]" />
                  </div>
                  <address className="text-gray-700 text-base leading-relaxed not-italic">
                    Al-Safra Industrial Area, Block 11, Plot 56,<br />
                    Sultan Mohsen Bakheet Al-Salmi Building,<br />
                    Al Ain, Abu Dhabi, UAE
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12 overflow-hidden rounded-xl shadow-md">
          <iframe
            title="Tajdeed Office Location Map"
            src="https://www.google.com/maps?q=Al%20Safra%20Industrial%20Area%20Al%20Ain%20Abu%20Dhabi&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            className="w-full hover:shadow-lg transition-shadow duration-300"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Tajdeed Typing Center. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-[#059669] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-[#059669] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;