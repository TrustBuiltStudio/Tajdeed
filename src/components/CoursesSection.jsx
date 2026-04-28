import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Typing Services',
      description: 'Comprehensive documentation including visa applications, translations, and official processing.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      anchor: 'typing-services',
    },
    {
      id: 2,
      title: 'Business Setup',
      description: 'Complete company formation, trade licenses, PRO services, and compliance advisory.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      anchor: 'business-setup',
    },
    {
      id: 3,
      title: 'Ticketing Services',
      description: 'Air ticket booking for domestic and international flights with best price guarantee.',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      anchor: 'ticketing-services',
    },
   {
  id: 4,
  title: 'Printing Services',
  description: 'High-quality printing, photocopying, business cards, and banners.',
  image: 'https://media.istockphoto.com/id/1350567203/photo/businessmen-press-button-on-the-panel-for-using-photocopier-or-printer-for-printout-and.jpg?s=612x612&w=0&k=20&c=kqrfYz-l6I-m2w_aQ_ishSVeJzFuhcvgjwGAJ1Ztx4c=',
  anchor: 'printing-services',
},
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-4">
          <div>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl">
              Explore our comprehensive range of professional services designed to meet your business needs.
            </p>
          </div>
          <Link
            to="/services2"
            className="hidden md:inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            aria-label="View all services"
          >
            View All Services <ArrowRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={`${service.title} – offered by Tajdeed Typing Center`} // ✅ fixed brand name
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Read More Button with anchor link */}
                <Link
                  to={`/services2#${service.anchor}`}
                  className="w-full py-2.5 flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  aria-label={`Read more about ${service.title}`}
                >
                  Read more
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 md:mt-12 text-center md:hidden">
          <Link
            to="/services2"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg px-4 py-2"
            aria-label="View all services"
          >
            View All Services <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;