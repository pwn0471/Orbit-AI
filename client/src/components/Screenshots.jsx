
 import { Monitor, Smartphone, Layout } from 'lucide-react';

export default function Screenshots() {
  return (
    <section className='py-20 px-6 lg:px-10 bg-gradient-to-b from-[#1E293B]/20 to-transparent'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>
            Beautiful{' '}
            <span className='bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
              Interface
            </span>
          </h2>
          <p className='text-gray-400 text-lg'>
            Clean, intuitive design that makes learning enjoyable
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8 mb-12'>
          <div className='backdrop-blur-sm bg-[#1E293B]/50 p-6 rounded-2xl border border-indigo-500/20'>
            <div className='w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4'>
              <Monitor size={24} className='text-indigo-400' />
            </div>
            <h3 className='text-xl font-bold mb-2'>Desktop First</h3>
            <p className='text-gray-400'>Optimized for productivity on large screens</p>
          </div>

          <div className='backdrop-blur-sm bg-[#1E293B]/50 p-6 rounded-2xl border border-purple-500/20'>
            <div className='w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4'>
              <Smartphone size={24} className='text-purple-400' />
            </div>
            <h3 className='text-xl font-bold mb-2'>Mobile Ready</h3>
            <p className='text-gray-400'>Study on the go with our mobile app</p>
          </div>

          <div className='backdrop-blur-sm bg-[#1E293B]/50 p-6 rounded-2xl border border-pink-500/20'>
            <div className='w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center mb-4'>
              <Layout size={24} className='text-pink-400' />
            </div>
            <h3 className='text-xl font-bold mb-2'>Clean Layout</h3>
            <p className='text-gray-400'>Distraction-free interface for focus</p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <div className='relative backdrop-blur-sm bg-[#1E293B]/50 p-8 rounded-3xl border border-indigo-500/20 aspect-video'>
            <div className='absolute inset-8 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl border border-indigo-500/30 flex items-center justify-center'>
              <div className='text-center'>
                <Layout size={48} className='text-indigo-400 mx-auto mb-4' />
                <p className='text-gray-400'>Dashboard View</p>
              </div>
            </div>
          </div>

          <div className='relative backdrop-blur-sm bg-[#1E293B]/50 p-8 rounded-3xl border border-purple-500/20 aspect-video'>
            <div className='absolute inset-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30 flex items-center justify-center'>
              <div className='text-center'>
                <Monitor size={48} className='text-purple-400 mx-auto mb-4' />
                <p className='text-gray-400'>Problem Tracker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
