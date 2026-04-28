import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import tj from "../assets/logo.jpeg";

const Visa = () => {
  const openWhatsApp = (serviceName) => {
    const msg = `Hello, I would like an enquiry about ${serviceName}`;
    window.open(
      `https://wa.me/971507514808?text=${encodeURIComponent(msg)}`, // ✅ Fixed number
      "_blank"
    );
  };

  const visaCategories = [
    {
      title: "Family Visa Services",
      services: [
        "Family File Open",
        "Status Change",
        "Family Visa Issuance and Renewals",
        "Newborn Visa Service",
        "Family Health Insurance Services",
      ]
    },
    {
      title: "Tourist & Visit Visa",
      services: [
        "Tourist Visa", 
        "Business Visa",
        "Visit Visa Extensions", 
        "Multi Entry visa"
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
            <img src={tj} alt="Visa Services" className="h-24 w-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
            Visa <span style={{ color: "#059669" }}>Services</span>
          </h1>
          <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: "#10B981" }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4B5563", fontWeight: "500" }}>
            Complete UAE visa solutions for families, tourists, employees, students, and investors.
          </p>
        </div>

        {/* Visa Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {visaCategories.map((category, idx) => (
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
            onClick={() => openWhatsApp("Visa Services")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>📞</span>
            Enquire Now
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Contact us for a free consultation – we're here to help with any visa type.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Visa;