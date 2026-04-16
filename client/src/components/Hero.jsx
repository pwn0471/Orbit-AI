
import { Sparkles, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className='min-h-screen flex items-center px-6 lg:px-10 pt-20'>
      <div className='max-w-7xl mx-auto w-full'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 px-4 py-2 rounded-full text-sm backdrop-blur-sm'>
              <Sparkles size={16} className='text-indigo-400' />
              <span>MERN + AI SaaS Product</span>
            </div>
            
            <h1 className='text-5xl lg:text-7xl font-bold leading-tight'>
              AI-Powered <br/>
              <span className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Placement Workspace
              </span>
            </h1>
            
            <p className='text-gray-300 text-lg lg:text-xl leading-relaxed max-w-xl'>
              Your personal AI mentor for DSA, notes, tasks and placement preparation. 
              Get smarter, faster, and land your dream job.
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50'>
                Get Started
              </button>
              <button className='border border-indigo-500/50 hover:border-indigo-500 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm'>
                <Play size={20} />
                Watch Demo
              </button>
            </div>

            <div className='flex items-center gap-8 pt-4'>
              <div>
                <div className='text-3xl font-bold text-indigo-400'>10K+</div>
                <div className='text-gray-400 text-sm'>Active Users</div>
              </div>
              <div className='h-12 w-px bg-indigo-500/30'></div>
              <div>
                <div className='text-3xl font-bold text-indigo-400'>500+</div>
                <div className='text-gray-400 text-sm'>Companies</div>
              </div>
              <div className='h-12 w-px bg-indigo-500/30'></div>
              <div>
                <div className='text-3xl font-bold text-indigo-400'>95%</div>
                <div className='text-gray-400 text-sm'>Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className='relative hidden lg:block'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full'></div>
            <div className='absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full'></div>
            <div className='absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/20 blur-3xl rounded-full'></div>
            
            <div className='relative backdrop-blur-sm bg-[#1E293B]/50 p-8 rounded-3xl border border-indigo-500/20 shadow-2xl'>
              <div className='space-y-4'>
                <div className='h-4 bg-indigo-500/30 rounded w-3/4'></div>
                <div className='h-4 bg-indigo-500/20 rounded w-full'></div>
                <div className='h-4 bg-indigo-500/20 rounded w-5/6'></div>
                <div className='grid grid-cols-2 gap-4 pt-4'>
                  <div className='h-24 bg-indigo-600/20 rounded-xl border border-indigo-500/30'></div>
                  <div className='h-24 bg-purple-600/20 rounded-xl border border-purple-500/30'></div>
                </div>
                <div className='h-32 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl border border-indigo-500/30'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
