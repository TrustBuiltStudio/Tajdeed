import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import tj from "../assets/logo.jpeg";

const Healthservice = () => {
  const openWhatsApp = (serviceName) => {
    const msg = `Hello, I would like an enquiry about ${serviceName}`;
    window.open(
      `https://wa.me/971569229776?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const healthCategories = [
    {
      title: "Medical Services",
      services: [
      "Family Insurance",
     "Individual Health Insurance", 
     "Company Health Insurance",
      "Flexi Health Insurance Plans"
      ]
    },
    
      
    
   
  ];

  return (
    <section
      className="py-24 min-h-screen"
      style={{
        background: "linear-gradient(135deg, #F8F9FA 0%, #E8F5E9 50%, #F1F8E9 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Link
            to="/services2"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img src={tj} alt="Health Services" className="h-24 w-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
            Health <span style={{ color: "#059669" }}>Services</span>
          </h1>
          <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: "#10B981" }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4B5563", fontWeight: "500" }}>
            Reliable assistance with a variety of health insurance plans for individuals, families, and businesses in the UAE.
          </p>
        </div>

        {/* Health Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {healthCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100 hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-emerald-800 border-b border-emerald-200 pb-2">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 gap-3 mt-4">
                  {category.services.map((service, sidx) => (
                    <div key={sidx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button
            onClick={() => openWhatsApp("Health Services")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>📞</span>
            Enquire Now
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Your health is our priority – fast, reliable medical service assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Healthservice;