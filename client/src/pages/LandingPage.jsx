
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
    <div className='bg-[#0B1220] text-white min-h-screen'>
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

