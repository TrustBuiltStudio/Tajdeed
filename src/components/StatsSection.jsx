import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-[#059669] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-green-500/50">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">15+</h3>
            <p className="text-green-100 font-medium text-lg">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">50k+</h3>
            <p className="text-green-100 font-medium text-lg">Students Enrolled</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">98%</h3>
            <p className="text-green-100 font-medium text-lg">Success Rate</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">200+</h3>
            <p className="text-green-100 font-medium text-lg">Expert Mentors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
