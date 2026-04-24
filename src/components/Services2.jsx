import React from 'react';
import { ArrowRight } from 'lucide-react';

// Import your local images
import visaImg from "../assets/visa.jpeg";
import documentImg from "../assets/document.jpeg";
import fineImg from "../assets/fine.jpeg";
import medicalImg from "../assets/medical.jpeg";
import businessImg from "../assets/visa.jpeg";
import proImg from "../assets/document.jpeg";
import companyImg from "../assets/fine.jpeg";
import complianceImg from "../assets/medical.jpeg";
import airticketImg from "../assets/visa.jpeg";
import photocopyImg from "../assets/document.jpeg";
import printingImg from "../assets/fine.jpeg";
import businesscardImg from "../assets/medical.jpeg";
import bannerImg from "../assets/visa.jpeg";

const Services = () => {
  const openWhatsApp = (serviceName) => {
    const msg = `Hello, I would like an enquiry about ${serviceName}`;
    window.open(
      `https://wa.me/971569229776?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const serviceCategories = [
    {
      category: "Visa & Government Services",
      services: [
        {
          title: "Visa Services",
          description: "Complete UAE visa processing including new applications, renewals, family visas and immigration assistance.",
          image: visaImg,
        },
        {
          title: "Document Services",
          description: "Professional document typing, attestations, applications, official forms and government processing support.",
          image: documentImg,
        },
        {
          title: "Fine Check",
          description: "Traffic and immigration fine verification services to help you check, track and manage penalties efficiently.",
          image: fineImg,
        },
        {
          title: "Medical Services",
          description: "Medical test booking, health card processing and related government health procedures handled professionally.",
          image: medicalImg,
        },
      ],
    },
    {
      category: "Business Setup",
      services: [
        {
          title: "Trade License",
          description: "Complete trade license processing and renewal for all business types in UAE with full government compliance support.",
          image: businessImg,
        },
        {
          title: "PRO Services",
          description: "Professional Public Relations Officer services for seamless government liaison, document processing, and regulatory compliance.",
          image: proImg,
        },
        {
          title: "Company Formation",
          description: "End-to-end business setup assistance including mainland and free zone company registration with expert guidance.",
          image: companyImg,
        },
        {
          title: "Compliance Advisory",
          description: "Expert guidance on UAE business regulations, visa requirements, and ongoing compliance obligations.",
          image: complianceImg,
        },
      ],
    },
    {
      category: "Travel & Ticketing",
      services: [
        {
          title: "Air Ticket Booking",
          description: "Book your next flight with confidence. Competitive rates and comprehensive travel support for domestic and international travel.",
          image: airticketImg,
        },
      ],
    },
    {
      category: "Printing Services",
      services: [
        {
          title: "Photocopying Services",
          description: "High-quality document copying services with fast turnaround times for all your personal and business needs.",
          image: photocopyImg,
        },
        {
          title: "Printing Services",
          description: "Professional printing solutions for documents, reports, marketing materials and more with premium quality output.",
          image: printingImg,
        },
        {
          title: "Business Cards",
          description: "Professional business card design and premium printing quality to make a lasting first impression.",
          image: businesscardImg,
        },
        {
          title: "Banners & Large Format",
          description: "Large-format printing for marketing materials, events, exhibitions and outdoor advertising needs.",
          image: bannerImg,
        },
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional government, visa, business and printing services designed 
            to make your processes easy and efficient.
          </p>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-20">
            {/* Category Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">
                {category.category}
              </h3>
              <div className="w-20 h-1 bg-emerald-600 rounded-full"></div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex gap-3">
                      <a
                        href="#contact"
                        className="flex-1 text-center border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg py-2.5 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                      >
                        Read More
                      </a>
                      <button
                        onClick={() => openWhatsApp(service.title)}
                        className="flex-1 bg-emerald-600 text-white font-semibold rounded-lg py-2.5 hover:bg-emerald-700 transition-all duration-300"
                      >
                        Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Mobile View All Button */}
        <div className="mt-12 text-center lg:hidden">
          <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
            View All Services <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;