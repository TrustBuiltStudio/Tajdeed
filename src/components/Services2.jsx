import React, { useEffect } from 'react';
import { ArrowRight, Clock, Star, Briefcase, FileText, Globe, Printer, BadgeCheck, Phone, Calculator, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services2 = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allServices = [
    {
      title: "Typing Services",
      duration: "Fast Track",
      Description: "Comprehensive documentation including visa applications, translations, and official processing.",
      rating: "4.9",
      icon: <FileText className="w-8 h-8 text-[#059669] mb-4" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Business Setup",
      Description: "Complete company formation, trade licenses, PRO services, and compliance advisory.",
      duration: "Consultation",
      rating: "4.8",
      icon: <Briefcase className="w-8 h-8 text-[#059669] mb-4" />,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Ticketing Services",
      Description: "Air ticket booking for domestic and international flights with best price guarantee.",
      duration: "Instant",
      rating: "5.0",
      icon: <Globe className="w-8 h-8 text-[#059669] mb-4" />,
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Printing Services",
      Description: "High-quality printing, photocopying, business cards, and banners.",
      duration: "Same Day",
      rating: "5.0",
      icon: <Printer className="w-8 h-8 text-[#059669] mb-4" />,
      image: "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Visa Processing",
      Description: "Expert assistance with all types of visa applications, renewals, and cancellations.",
      duration: "Priority",
      rating: "4.9",
      icon: <BadgeCheck className="w-8 h-8 text-[#059669] mb-4" />,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Legal Translation",
      Description: "Certified translation services for legal, medical, and official documents.",
      duration: "24 Hours",
      rating: "4.8",
      icon: <FileText className="w-8 h-8 text-[#059669] mb-4" />,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Accounting & VAT",
      Description: "Professional bookkeeping, VAT registration, and return filing services.",
      duration: "Monthly",
      rating: "4.7",
      icon: <Calculator className="w-8 h-8 text-[#059669] mb-4" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "PRO Services",
      Description: "Dedicated Public Relations Officer services for all government department transactions.",
      duration: "Contractual",
      rating: "5.0",
      icon: <ShieldCheck className="w-8 h-8 text-[#059669] mb-4" />,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section for Services */}
      <div className="bg-[#059669] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Comprehensive Services</h1>
          <p className="text-xl max-w-2xl mx-auto text-emerald-100 mb-8">
            We provide end-to-end solutions for all your business and documentation needs under one roof.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-white text-[#059669] px-6 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180" /> Back to Home
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-12 right-6 bg-white p-3 rounded-xl shadow-lg z-20">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 h-12 leading-relaxed">{service.Description}</p>
                  
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-6 border-b border-gray-100 pb-6">
                    <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full text-[#059669]">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold">{service.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 text-center bg-gray-50 border border-gray-200 text-gray-800 font-bold rounded-lg group-hover:bg-[#059669] group-hover:border-[#059669] group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a Custom Service?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your specific requirements. Our experts are ready to assist you.
          </p>
          <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#059669] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#047857] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            <Phone className="w-5 h-5" /> Contact Our Experts
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services2;
