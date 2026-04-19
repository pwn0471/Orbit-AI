import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className='min-h-screen flex items-center justify-center px-6 lg:px-10 pt-20 relative overflow-hidden'
      style={{
        backgroundImage: 'url(\"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80\")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(245, 243, 238, 0.85)'
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-[#F5F3EE]/60 via-[#F5F3EE]/70 to-[#F5F3EE]/90'></div>
      
      <div className='relative z-10 max-w-5xl mx-auto text-center space-y-8'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900'>
          Ship the right things,<br/>
          in the right order.
        </h1>
        
        <p className='text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
          One canvas. Every priority. Your<br/>
          whole team, finally on the same page.
        </p>
        
        <div className='pt-6'>
          <button className='bg-[#0B8457] hover:bg-[#096B45] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2'>
            Start for free
            <ArrowRight size={20} />
          </button>
        </div>

        <div className='flex items-center justify-center gap-12 pt-12 text-gray-600'>
          <div>
            <div className='text-3xl font-bold text-[#0B8457]'>10K+</div>
            <div className='text-sm'>Active Users</div>
          </div>
          <div className='h-12 w-px bg-gray-300'></div>
          <div>
            <div className='text-3xl font-bold text-[#0B8457]'>500+</div>
            <div className='text-sm'>Companies</div>
          </div>
          <div className='h-12 w-px bg-gray-300'></div>
          <div>
            <div className='text-3xl font-bold text-[#0B8457]'>95%</div>
            <div className='text-sm'>Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}