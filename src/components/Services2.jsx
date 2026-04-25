import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

// Import Images
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
import tj from "../assets/logo.jpeg"

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
          image: tj,
        },
        {
          title: "Document Services",
          description: "Professional document typing, attestations, applications, official forms and government processing support.",
          image: tj,
        },
        {
          title: "Fine Check",
          description: "Traffic and immigration fine verification services to help you check and manage penalties efficiently.",
          image: tj,
        },
        {
          title: "Medical Services",
          description: "Medical test booking, health card processing and related government health procedures handled professionally.",
          image: tj,
        },
      ],
    },
    {
      category: "Business Setup",
      services: [
        {
          title: "Trade License",
          description: "Complete trade license processing and renewal for all business types in UAE.",
          image: tj,
        },
        {
          title: "PRO Services",
          description: "Professional Public Relations Officer services for government liaison and document processing.",
          image: tj,
        },
        {
          title: "Company Formation",
          description: "End-to-end business setup assistance including mainland and free zone company registration.",
          image: tj,
        },
        {
          title: "Compliance Advisory",
          description: "Expert guidance on UAE regulations and compliance obligations.",
          image: tj,
        },
      ],
    },
    {
      category: "Travel & Ticketing",
      services: [
        {
          title: "Air Ticket Booking",
          description: "Competitive rates and comprehensive travel support for domestic and international travel.",
          image: tj,
        },
      ],
    },
    {
      category: "Printing Services",
      services: [
        {
          title: "Photocopying Services",
          description: "High-quality document copying services with fast turnaround times.",
          image: tj,
        },
        {
          title: "Printing Services",
          description: "Professional printing solutions for documents and marketing materials.",
          image: tj,
        },
        {
          title: "Business Cards",
          description: "Premium business card design and professional printing.",
          image: tj,
        },
        {
          title: "Banners & Large Format",
          description: "Large-format printing for events and advertising needs.",
          image: tj,
        },
      ],
    },
  ];

  return (
    <section className="py-24 min-h-screen" style={{ backgroundColor: '#FDFDFD' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Home Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            style={{ backgroundColor: '#059669', color: '#FDFDFD' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#047857'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#059669'}
          >
            ← Back To Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
            Our <span style={{ color: '#059669' }}>Services</span>
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: '#059669' }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Professional government, visa, business and printing services
            designed to make your processes easy and efficient.
          </p>
        </div>

        {/* Categories */}
        {serviceCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-20">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#047857' }}>
                {category.category}
              </h3>
              <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#059669' }}></div>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                  style={{ backgroundColor: '#FDFDFD', border: '1px solid #e5e7eb' }}
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden flex items-center justify-center p-4" style={{ backgroundColor: '#f9fafb' }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#6B7280' }}>
                      {service.description}
                    </p>

                    {/* Enquiry Button */}
                    <button
                      onClick={() => openWhatsApp(service.title)}
                      className="w-full font-semibold rounded-lg py-2.5 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-auto"
                      style={{ backgroundColor: '#059669', color: '#FDFDFD' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#047857'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#059669'}
                    >
                      <span>📞</span>
                      Enquiry Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Mobile View All Button */}
        <div className="mt-12 text-center lg:hidden">
          <Link 
            to="/services2"
            className="inline-flex items-center gap-2 font-semibold transition-colors"
            style={{ color: '#059669' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#047857'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#059669'}
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;