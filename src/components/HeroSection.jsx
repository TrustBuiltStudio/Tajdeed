import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Professional images relevant to typing/document center services
  const images = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // typing/document services
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // business setup
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"  // travel/ticketing
  ];

  useEffect(() => {
    // Only run slider if there's more than one image
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full bg-[#fdfdfd] py-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="pl-0 lg:pl-8">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] leading-tight tracking-tight mb-6">
              Tajdeed Typing <br /> Center
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed">
              Fast, Reliable, Government approved services for individuals and businesses across Emirate.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                to="/services2"
                className="bg-[#059669] hover:bg-[#047857] text-white px-8 py-3.5 rounded-lg font-bold text-base transition-all duration-300 shadow-lg shadow-green-600/30 hover:scale-105 hover:shadow-xl"
              >
                Explore Services
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-1 text-[#059669]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium">Expert Business Consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-1 text-[#059669]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium">Comprehensive Legal Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-1 text-[#059669]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium">Fast & Reliable Service</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="relative w-full h-[500px] md:ml-10" aria-label="Image slider showcasing our services">
            <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}: ${index === 0 ? 'Document typing services' : index === 1 ? 'Business setup consultation' : 'Travel and ticketing services'}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Gradient overlay for better text contrast (if any text overlay in future) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Optional: Slide indicators (dots) for better UX */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;