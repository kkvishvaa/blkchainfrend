import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
