import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import AISection from '../components/AISection';
import Screenshots from '../components/Screenshots';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className='bg-[#F5F3EE] text-gray-900 min-h-screen'>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AISection />
      <Screenshots />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}