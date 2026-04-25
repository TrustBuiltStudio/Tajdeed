import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Services2 from './components/Services2';

const Home = () => (
  <>
    <HeroSection />
    {/* <StatsSection /> */}
    <WhyChooseUs />
 
    <CoursesSection />
  </>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#059669] selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services2" element={<Services2 />} />
      </Routes>
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
