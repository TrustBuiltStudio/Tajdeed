import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Services2 from './components/Services2';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#059669] selection:text-white">
      <Navbar />
      <HeroSection />
      {/* <StatsSection /> */}
      <WhyChooseUs />
      <AboutSection />
      <CoursesSection />
      <Services2></Services2>
      
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
