import React from 'react';
import { Presentation, Award, Briefcase, Users, Ribbon, Handshake, Shield, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Ribbon className="w-6 h-6" />,
      title: "Quality & Professionalism",
      description: "High-quality document processing with unmatched professionalism and attention to every detail."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Government Approved",
      description: "Fully licensed and authorized service provider with official credentials you can trust."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Best Price & Experience",
      description: "Competitive best-price guarantee backed by years of industry experience."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Document Confidentiality",
      description: "Your documents are safe with us — complete privacy and data protection guaranteed."
    },
  ];

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#059669] mb-6 tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            We provide liable, accurate, and efficient document processing solutions for individuals and businesses across the UAE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 border-l-4 border-l-[#059669] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-[#059669] mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;