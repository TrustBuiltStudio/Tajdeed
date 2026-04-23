import React from 'react';
import { ArrowRight, Clock, Star } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      title: "Advanced Business Management",
      category: "Management",
      duration: "6 Months",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Professional PRO Training",
      category: "Legal & Compliance",
      duration: "3 Months",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Digital Marketing Mastery",
      category: "Marketing",
      duration: "4 Months",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Featured Courses</h2>
            <p className="text-gray-600 text-lg max-w-2xl">Explore our most popular programs designed by industry experts to fast-track your career.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#059669] font-semibold hover:text-[#047857] transition-colors">
            View All Courses <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#059669]">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>
                <div className="flex items-center justify-between text-gray-500 text-sm mb-6 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                </div>
                <button className="w-full py-3 text-center border-2 border-[#059669] text-[#059669] font-bold rounded-lg hover:bg-[#059669] hover:text-white transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-[#059669] font-semibold hover:text-[#047857] transition-colors">
            View All Courses <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
