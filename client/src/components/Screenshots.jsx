import React from 'react';
import { Monitor, Smartphone, Layout } from 'lucide-react';

export default function Screenshots() {
  return (
    <section className='py-20 px-6 lg:px-10 bg-[#F5F3EE]'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4 text-gray-900'>
            Beautiful Interface
          </h2>
          <p className='text-gray-600 text-lg'>
            Clean, intuitive design that makes learning enjoyable
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
            <div className='w-12 h-12 bg-[#0B8457]/10 rounded-xl flex items-center justify-center mb-4'>
              <Monitor size={24} className='text-[#0B8457]' />
            </div>
            <h3 className='text-xl font-bold mb-2 text-gray-900'>Desktop First</h3>
            <p className='text-gray-600'>Optimized for productivity on large screens</p>
          </div>

          <div className='bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
            <div className='w-12 h-12 bg-[#0B8457]/10 rounded-xl flex items-center justify-center mb-4'>
              <Smartphone size={24} className='text-[#0B8457]' />
            </div>
            <h3 className='text-xl font-bold mb-2 text-gray-900'>Mobile Ready</h3>
            <p className='text-gray-600'>Study on the go with our mobile app</p>
          </div>

          <div className='bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
            <div className='w-12 h-12 bg-[#0B8457]/10 rounded-xl flex items-center justify-center mb-4'>
              <Layout size={24} className='text-[#0B8457]' />
            </div>
            <h3 className='text-xl font-bold mb-2 text-gray-900'>Clean Layout</h3>
            <p className='text-gray-600'>Distraction-free interface for focus</p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-white p-8 rounded-3xl border border-gray-200 aspect-video shadow-sm'>
            <div className='h-full bg-gradient-to-br from-[#0B8457]/10 to-[#0B8457]/5 rounded-xl border border-gray-200 flex items-center justify-center'>
              <div className='text-center'>
                <Layout size={48} className='text-[#0B8457] mx-auto mb-4' />
                <p className='text-gray-600'>Dashboard View</p>
              </div>
            </div>
          </div>

          <div className='bg-white p-8 rounded-3xl border border-gray-200 aspect-video shadow-sm'>
            <div className='h-full bg-gradient-to-br from-[#0B8457]/10 to-[#0B8457]/5 rounded-xl border border-gray-200 flex items-center justify-center'>
              <div className='text-center'>
                <Monitor size={48} className='text-[#0B8457] mx-auto mb-4' />
                <p className='text-gray-600'>Problem Tracker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}