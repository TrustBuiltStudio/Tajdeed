import React, { useState, useEffect } from 'react';
import { CheckCircle2, GraduationCap, BookOpen, Award } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Slide changes every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full bg-[#fdfdfd] py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image Slider */}
          <div className="relative w-full h-[500px] md:ml-10">
            {/* Images wrapper */}
            <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl">
              {images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Slide ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Floating Badges - Outside the hidden overflow */}
            <div className="absolute bottom-16 -left-12 md:-left-24 flex flex-col gap-5 z-20">
              <div className="bg-white rounded-full py-3 px-6 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform hover:scale-105 transition-transform">
                <div className="bg-[#059669] rounded-full p-2 text-white">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-base font-medium text-gray-800 pr-2">Certification Programs</span>
              </div>
              <div className="bg-white rounded-full py-3 px-6 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ml-8 transform hover:scale-105 transition-transform">
                <div className="bg-[#059669] rounded-full p-2 text-white">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-base font-medium text-gray-800 pr-2">Skill Development</span>
              </div>
              <div className="bg-white rounded-full py-3 px-6 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform hover:scale-105 transition-transform">
                <div className="bg-[#00c2cb] rounded-full p-2 text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-base font-medium text-gray-800 pr-2">Career Coaching</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="pl-0 lg:pl-8">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] leading-tight tracking-tight mb-6">
              Your Gateway to <br /> Career Success <br /> from India
            </h1>
            
            <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed">
              Advance your skills with real-world UAE PR training from industry experts at Takhlees Career Academy.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button className="bg-[#059669] hover:bg-[#047857] text-white px-8 py-3.5 rounded-lg font-bold text-base transition-colors shadow-lg shadow-green-600/30">
                Get a Consultation
              </button>
              <button className="bg-transparent hover:bg-gray-50 text-black px-8 py-3.5 rounded-lg font-bold text-base transition-colors">
                Apply Now
              </button>
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

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
