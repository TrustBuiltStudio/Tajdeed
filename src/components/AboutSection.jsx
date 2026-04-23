import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full h-[500px] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="About Us" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border-l-4 border-[#059669]">
              <p className="text-3xl font-bold text-[#059669] mb-1">Top Rated</p>
              <p className="text-gray-600 font-medium">Training Institute</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">Empowering Your Future With Quality Education</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At Takhlees Career Academy, we believe in transforming lives through skill-based education. Our comprehensive programs are designed to equip you with the practical knowledge needed to excel in today's competitive job market.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              With a team of industry veterans and a curriculum tailored to global standards, we ensure that every student is job-ready from day one.
            </p>
            
            <button className="flex items-center gap-2 text-[#059669] font-bold text-lg hover:text-[#047857] transition-colors group">
              Read Our Full Story 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
