import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className='py-20 px-6 lg:px-10 bg-white'>
      <div className='max-w-5xl mx-auto'>
        <div className='bg-gradient-to-br from-[#0B8457] to-[#096B45] p-12 lg:p-16 rounded-3xl text-center overflow-hidden relative shadow-xl'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
          
          <div className='relative z-10'>
            <h2 className='text-4xl lg:text-6xl font-bold mb-6 text-white'>
              Start Your Placement Journey Today
            </h2>

            <p className='text-white/90 text-lg lg:text-xl mb-8 max-w-2xl mx-auto'>
              Join 10,000+ students who are already preparing smarter with AI. 
              Get started for free, no credit card required.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-white hover:bg-gray-50 text-[#0B8457] px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2'>
                Get Started Free
                <ArrowRight size={20} />
              </button>
              <button className='border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105'>
                Schedule a Demo
              </button>
            </div>

            <p className='text-white/80 text-sm mt-6'>
              Free forever. Upgrade anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}