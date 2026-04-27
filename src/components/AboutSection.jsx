import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration at Takhlees Career Academy – instructors and students working together"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Floating badge – hidden on mobile, visible from md upwards */}
            <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl border-l-4 border-[#0A2540] hidden md:block transition-transform hover:scale-105 duration-300">
              <p className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-0.5 md:mb-1">
                Top Rated
              </p>
              <p className="text-gray-600 text-sm md:text-base font-medium">
                Training Institute
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-5 md:mb-6 leading-tight"
            >
              Empowering Your Future With Quality Education
            </h2>

            <div className="space-y-5 md:space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                At Takhlees Career Academy, we believe in transforming lives through
                skill-based education. Our comprehensive programs are designed to
                equip you with the practical knowledge needed to excel in today's
                competitive job market.
              </p>
              <p>
                With a team of industry veterans and a curriculum tailored to global
                standards, we ensure that every student is job-ready from day one.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 md:mt-10">
              <button
                className="group inline-flex items-center gap-2 text-[#0A2540] font-bold text-base md:text-lg hover:text-[#1a3a5c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A2540] focus:ring-offset-2 rounded-lg"
                aria-label="Read more about our story and mission"
              >
                Read Our Full Story
                <ArrowRight
                  className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;