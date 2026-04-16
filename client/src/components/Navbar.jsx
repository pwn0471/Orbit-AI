import { useState } from "react";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B1220]/80 border-b border-indigo-500/20'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10'>
        <div className='flex justify-between items-center py-4'>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
            AI Workspace
          </h1>
          
          {/* Desktop Menu */}
          <div className='hidden md:flex gap-8 items-center'>
            <button onClick={() => scrollToSection('features')} className='hover:text-indigo-400 transition-colors'>
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className='hover:text-indigo-400 transition-colors'>
              How it Works
            </button>
            <button onClick={() => scrollToSection('ai-section')} className='hover:text-indigo-400 transition-colors'>
              AI
            </button>
            <button onClick={() => scrollToSection('pricing')} className='hover:text-indigo-400 transition-colors'>
              Pricing
            </button>
            <button className='bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg transition-all hover:scale-105'>
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden py-4 space-y-4'>
            <button onClick={() => scrollToSection('features')} className='block w-full text-left hover:text-indigo-400 transition-colors'>
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className='block w-full text-left hover:text-indigo-400 transition-colors'>
              How it Works
            </button>
            <button onClick={() => scrollToSection('ai-section')} className='block w-full text-left hover:text-indigo-400 transition-colors'>
              AI
            </button>
            <button onClick={() => scrollToSection('pricing')} className='block w-full text-left hover:text-indigo-400 transition-colors'>
              Pricing
            </button>
            <button className='bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg transition-all w-full'>
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
