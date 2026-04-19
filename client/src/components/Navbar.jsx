import React, { useState } from 'react';
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
    <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10'>
        <div className='flex justify-between items-center py-4'>
          <h1 className='text-2xl font-bold text-gray-900'>
            AI Workspace
          </h1>
          
          {/* Desktop Menu */}
          <div className='hidden md:flex gap-8 items-center'>
            <button onClick={() => scrollToSection('features')} className='text-gray-700 hover:text-gray-900 transition-colors'>
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className='text-gray-700 hover:text-gray-900 transition-colors'>
              How it Works
            </button>
            <button onClick={() => scrollToSection('ai-section')} className='text-gray-700 hover:text-gray-900 transition-colors'>
              AI
            </button>
            <button onClick={() => scrollToSection('pricing')} className='text-gray-700 hover:text-gray-900 transition-colors'>
              Pricing
            </button>
            <button className='text-gray-700 hover:text-gray-900 px-4 py-2 transition-colors'>
              Sign in
            </button>
            
          </div>

          {/* Mobile Menu Button */}
          <button className='md:hidden text-gray-900' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden py-4 space-y-4'>
            <button onClick={() => scrollToSection('features')} className='block w-full text-left text-gray-700 hover:text-gray-900 transition-colors'>
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className='block w-full text-left text-gray-700 hover:text-gray-900 transition-colors'>
              How it Works
            </button>
            <button onClick={() => scrollToSection('ai-section')} className='block w-full text-left text-gray-700 hover:text-gray-900 transition-colors'>
              AI
            </button>
            <button onClick={() => scrollToSection('pricing')} className='block w-full text-left text-gray-700 hover:text-gray-900 transition-colors'>
              Pricing
            </button>
            <button className='text-gray-700 hover:text-gray-900 px-4 py-2 transition-colors w-full text-left'>
              Sign in
            </button>
            
          </div>
        )}
      </div>
    </nav>
  );
}