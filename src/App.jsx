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
import Visa from './components/Visa';               // Ensure file exists: components/Visa.jsx
import Documentvisa from './components/Documentvisa'; // Create or rename file to Documentvisa.jsx
import Healthservice from './components/Healthservice'; // Create or rename file to Healthservice.jsx
import MOHREServices from './components/MOHREServices';
import TAMMServices from './components/TAMMServices';
import JudicialServices from './components/JudicialServices';
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
        <Route path="/visa" element={<Visa />} />
        <Route path="/documentvisa" element={<Documentvisa />} />
        <Route path="/healthservice" element={<Healthservice />} />
        <Route path="/MOHREServices" element={<MOHREServices />} />
        <Route path="/TAMMServices" element={<TAMMServices />} />
        <Route path="/judicialservices" element={<JudicialServices />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;