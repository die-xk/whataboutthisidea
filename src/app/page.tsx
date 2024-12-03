'use client';
  
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureDemo from '@/components/FeatureDemo';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <FeatureDemo />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;
