import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Import Images
import tj from "../assets/logo.jpeg";
import img from "../assets/aro.jpg";

const Services = () => {
  const openWhatsApp = (serviceName) => {
    const msg = `Hello, I would like an enquiry about ${serviceName}`;
    window.open(
      `https://wa.me/971507514808?text=${encodeURIComponent(msg)}`, // ✅ Fixed WhatsApp number
      "_blank"
    );
  };

  const serviceCategories = [
    {
      category: "Visa & Government Services",
      services: [
        {
          id: "visa-services",
          title: "Visa Services",
          description:
            "Complete UAE visa processing including new applications, renewals, family visas and immigration assistance.",
          image: tj,
          link: "/visa",
          showMore: true,
        },
        {
          id: "document-services",
          title: "Document Services",
          description:
            "Professional document typing, attestations, applications, official forms and government processing support.",
          image: tj,
          link: "/documentvisa",
          showMore: true,
        },
        {
          id: "tamm-services", // ✅ Fixed: removed trailing space, lowercase
          title: "TAMM Service",
          description:
            "Fast and easy government services for business and personal documentation in Abu Dhabi.",
          image: tj,
          link: "/TAMMservices",
          showMore: true,
        },
        {
          id: "pro-services",
          title: "Mohre Service",
          description: "Complete support for Ministry of Human Resources and Emiratisation (MOHRE) services, including labour contracts, work permits, and employment-related approvals in the UAE.",
          image: tj,
          link: "/MOHREServices",
          showMore: true,
        },
        {
          id: "medical-services",
          title: "Medical Services",
          description:
            "Medical test booking, health card processing and related government health procedures handled professionally.",
          image: tj,
          link: "/healthservice",
          showMore: true,
        },
        {
          id: "judicial-services",
          title: "Notry Public Service",
          description: "Professional support with Abu Dhabi Judicial Department services and legal documentation.",
          image: tj,
          link: "/judicialservices",
          showMore: true,
        }
      ],
    },
    {
      category: "Business Setup",
      services: [
        {
          id: "trade-license",
          title: "Trade License",
          description:
            "Complete trade license processing and renewal for all business types in UAE.",
          image: tj,
          link: "/services/trade-license",
          showMore: false,
        },
        {
          id: "business-registration",
          title: "Business Registration",
          description:
            "Professional business setup solutions for startups and growing enterprises.",
          image: tj,
          link: "/services/business-registration",
          showMore: false,
        },
        {
          id: "tajer-license",
          title: "Tajer Abu Dhabi license",
          description:
            "Quick and reliable support for obtaining your Abu Dhabi trader license.",
          image: tj,
          link: "/services/tajer-license",
          showMore: false,
        },
      ],
    },
    {
      category: "Printing Services",
      services: [
        {
          id: "photocopying-services",
          title: "Photocopying Services",
          description:
            "High-quality document copying services with fast turnaround times.",
          image: tj,
          link: "/services/photocopying-services",
          showMore: false,
        },
        {
          id: "printing-services",
          title: "Printing Services",
          description:
            "Professional printing solutions for documents and marketing materials.",
          image: tj,
          link: "/services/printing-services",
          showMore: false,
        },
        {
          id: "business-cards",
          title: "Business Cards",
          description: "Premium business card design and professional printing.",
          image: tj,
          link: "/services/business-cards",
          showMore: false,
        },
        {
          id: "banners-printing",
          title: "Banners & Large Format",
          description:
            "Large-format printing for events and advertising needs.",
          image: tj,
          link: "/services/banners-printing",
          showMore: false,
        },
      ],
    },
    {
      category: "Travel & Ticketing",
      services: [
        {
          id: "air-ticket-booking",
          title: "Air Ticket Booking",
          description:
            "Competitive rates and comprehensive travel support for domestic and international travel.",
          image: img,
          link: "/services/air-ticket-booking",
          showMore: false,
        },
      ],
    },
  ];

  return (
    <section
      className="py-24 min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #F8F9FA 0%, #E8F5E9 50%, #F1F8E9 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#1a1a1a" }}
          >
            Our <span style={{ color: "#059669" }}>Services</span>
          </h2>
          <div
            className="w-24 h-1 rounded-full mx-auto mb-6"
            style={{ backgroundColor: "#10B981" }}
          ></div>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#4B5563", fontWeight: "500" }}
          >
            Professional government, visa, business and printing services
            designed to make your processes easy and efficient.
          </p>
        </div>

        {/* Categories */}
        {serviceCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-20">
            <div className="mb-8">
              <h3
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: "#065F46" }}
              >
                {category.category}
              </h3>
              <div
                className="w-20 h-1 rounded-full"
                style={{ backgroundColor: "#ffffff" }}
              ></div>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {/* Image */}
                  <div
                    className="h-48 overflow-hidden flex items-center justify-center p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="text-lg md:text-xl font-bold mb-3"
                      style={{ color: "#065F46" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-5 flex-1"
                      style={{ color: "#6B7280", lineHeight: "1.6" }}
                    >
                      {service.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {/* Enquiry Button - WhatsApp (always shown) */}
                      <button
                        onClick={() => openWhatsApp(service.title)}
                        className={`font-semibold rounded-lg py-2.5 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 ${
                          service.showMore ? "flex-1" : "w-full"
                        }`}
                        style={{
                          backgroundColor: "#059669",
                          color: "#FFFFFF",
                          border: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#047857";
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#059669";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <span>📞</span>
                        Enquiry
                      </button>

                      {/* More Button — only for services with showMore = true */}
                      {service.showMore && (
                        <Link
                          to={service.link}
                          className="flex-1 font-semibold rounded-lg py-2.5 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 text-center"
                          style={{
                            background:
                              "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                            color: "#FFFFFF",
                            border: "none",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "linear-gradient(135deg, #059669 0%, #047857 100%)";
                            e.currentTarget.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                              "linear-gradient(135deg, #10B981 0%, #059669 100%)";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          <span>🔍</span>
                          More
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Mobile View All Button - Links to /services2 */}
        <div className="mt-12 text-center lg:hidden">
          <Link
            to="/services2"
            className="inline-flex items-center gap-2 font-semibold transition-all duration-300 transform hover:scale-105"
            style={{ color: "#059669" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#047857";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#059669";
              e.currentTarget.style.transform = "scale(1)";
            }}
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