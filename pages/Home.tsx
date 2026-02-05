import React from 'react';
import Hero from '../components/Hero';
import LandingServices from '../components/LandingServices';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <LandingServices />
    </div>
  );
};

export default Home;