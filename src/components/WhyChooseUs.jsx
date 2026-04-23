import React from 'react';
import { Presentation, Award, Briefcase, Users, Ribbon, Handshake } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience and proven track records."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry-Recognized Certificates",
      description: "Earn certificates that are recognized by top employers and industry leaders."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career Support",
      description: "Get dedicated placement assistance, resume building, and interview preparation support."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Interactive Learning",
      description: "Engage in hands-on projects, group discussions, and interactive sessions to boost retention."
    },
    {
      icon: <Ribbon className="w-6 h-6" />,
      title: "Quality Curriculum",
      description: "Access up-to-date and carefully structured curriculum designed to meet current market demands."
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Networking Opportunities",
      description: "Connect with alumni, industry experts, and peers to grow your professional network."
    }
  ];

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#059669] mb-6 tracking-tight">
            Why Choose Our Training Center?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            We are committed to providing the best learning experience and helping you achieve your career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
