import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import tj from "../assets/logo.jpeg";

const JudicialServices = () => {
  const openWhatsApp = (serviceName) => {
    const msg = `Hello, I would like an enquiry about ${serviceName}`;
    window.open(
      `https://wa.me/971507514808?text=${encodeURIComponent(msg)}`, // ✅ Fixed number
      "_blank"
    );
  };

  const judicialServices = [
    "Notary Services",
    "Traffic Fine Reduction Requests",
    "Parking Fine Reduction Assistance",
    "Court Case Status Follow-up",
    "Legal Consultation Coordination"
  ];

  const pccServices = [
    "PCC for Visit Visa holders",
    "PCC Outside UAE",
    "PCC Inside UAE"
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
            aria-label="Back to all services"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img src={tj} alt="Judicial & PCC Services logo" className="h-24 w-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
            Judicial & <span style={{ color: "#059669" }}>PCC Services</span>
          </h1>
          <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: "#10B981" }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4B5563", fontWeight: "500" }}>
            Professional support with Abu Dhabi Judicial Department services, legal documentation, and Police Clearance Certificates.
          </p>
        </div>

        {/* Judicial Services Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-emerald-800">Judicial Services Include:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {judicialServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PCC Services Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-emerald-800">Police Clearance Certificate (PCC) Services:</h2>
              <p className="text-gray-600 mb-6">
                Get your UAE Police Clearance Certificate easily for job applications, embassy visa processing, Golden Visa, and higher studies even without UAE Pass. Service available for visit visa holders as well. Fast, reliable, and hassle-free assistance.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {pccServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button
            onClick={() => openWhatsApp("Judicial & PCC Services")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label="Enquire about Judicial & PCC Services via WhatsApp"
          >
            <span>📞</span>
            Enquire Now
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Expert legal, judicial, and PCC support – contact us for assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JudicialServices;