import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
        id="home"
        className="scroll-mt-24 min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 pb-8 sm:pb-16 relative overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(245, 243, 238, 1)',
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#F5F3EE]/60 via-[#F5F3EE]/70 to-[#F5F3EE]/90'></div>

      {/* Content */}
      <div className='relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8'>

        {/* Heading */}
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900'>
          Ship the right things,
          <br className='hidden sm:block' />
          <span className='sm:hidden'> </span>
          in the right order.
        </h1>

        {/* Paragraph */}
        <p className='text-base sm:text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-2'>
          One canvas. Every priority. Your
          <br className='hidden sm:block' />
          <span className='sm:hidden'> </span>
          whole team, finally on the same page.
        </p>

        {/* Button */}
        <div className='pt-4 sm:pt-6'>
          <button className='bg-[#0B8457] hover:bg-[#096B45] text-white px-7 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2'>
            Start for free
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className='flex items-center justify-center gap-4 sm:gap-12 pt-10 sm:pt-12 text-gray-600 flex-wrap sm:flex-nowrap'>

          {/* Stat 1 */}
          <div className='text-center'>
            <div className='text-2xl sm:text-3xl font-bold text-[#0B8457]'>
              10K+
            </div>

            <div className='text-sm sm:text-base'>
              Active Users
            </div>
          </div>

          {/* Divider */}
          <div className='hidden sm:block h-12 w-px bg-gray-300'></div>

          {/* Stat 2 */}
          <div className='text-center'>
            <div className='text-2xl sm:text-3xl font-bold text-[#0B8457]'>
              500+
            </div>

            <div className='text-sm sm:text-base'>
              Companies
            </div>
          </div>

          {/* Divider */}
          <div className='h-10 w-px bg-gray-300'></div>

          {/* Stat 3 */}
          <div className='text-center'>
            <div className='text-2xl sm:text-3xl font-bold text-[#0B8457]'>
              95%
            </div>

            <div className='text-sm sm:text-base'>
              Success Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}