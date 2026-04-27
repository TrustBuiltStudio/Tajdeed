import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import tj from "../assets/logo.jpeg";

const DocumentServices = () => {
  const openWhatsApp = (serviceName) => {
    const msg = `Hello, I would like an enquiry about ${serviceName}`;
    window.open(
      `https://wa.me/971569229776?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const documentCategories = [
    {
      title: "Legal Translation",
services: [
  "Medical Reports",
  "Contracts and Agreements",
  "Invoices and Forms",
  "Certificates",
  "Court Documents and Papers",
  "WhatsApp and Email",
  "Technical Documents",
  "Financial Documents",
  "Will & Testament"
]
    },
    {
      title: "ICP Services",
      services: [
       "Emirates ID Issue and Renewals",
"Residency Issue and Renewal",
"Residency Cancellation",
"Entry Permit",
"Status Change",
"Echannel Creation",
"Establishment Card Issuance and Renewal",
"CID Approval",
"License Updation",
"Permit of 6 Months Staying Outside",
"Entry Exit Reports",
      ]
    },
    {
      title: "Driving License Services",
      services: [
        "New Applications",
         "License Renewal",
          "International License",
      ]
    },
     {
  title: "Copywriting",
  services: [
    "Brochures and Manuals",
    "Websites",
    "Social Media Content"
  ]
},
{
  title: "Proofreading",
  services: [
    "Theses and Dissertations",
    "Books",
    "Capstone Projects",
    "All Types of Publications"
  ]
}
  
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
            <img src={tj} alt="Document Services" className="h-24 w-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
            Document <span style={{ color: "#059669" }}>Services</span>
          </h1>
          <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: "#10B981" }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4B5563", fontWeight: "500" }}>
            Professional document typing, attestation, translation, and government processing services.
          </p>
        </div>

        {/* Document Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {documentCategories.map((category, idx) => (
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
            onClick={() => openWhatsApp("Document Services")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>📞</span>
            Enquire Now
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Fast, accurate, and reliable document processing – contact us today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DocumentServices;