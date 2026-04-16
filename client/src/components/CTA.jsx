
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className='py-20 px-6 lg:px-10'>
      <div className='max-w-5xl mx-auto'>
        <div className='relative backdrop-blur-sm bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-12 lg:p-16 rounded-3xl border border-indigo-500/30 text-center overflow-hidden'>
          <div className='absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2'></div>
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2'></div>
          
          <div className='relative z-10'>
            <div className='inline-flex items-center gap-2 bg-indigo-600/30 border border-indigo-500/40 px-4 py-2 rounded-full text-sm backdrop-blur-sm mb-6'>
              <Sparkles size={16} className='text-indigo-400' />
              <span>Limited Time Offer</span>
            </div>

            <h2 className='text-4xl lg:text-6xl font-bold mb-6'>
              Start Your Placement{' '}
              <span className='bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
                Journey Today
              </span>
            </h2>

            <p className='text-gray-300 text-lg lg:text-xl mb-8 max-w-2xl mx-auto'>
              Join 10,000+ students who are already preparing smarter with AI. 
              Get started for free, no credit card required.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50 flex items-center justify-center gap-2'>
                Get Started Free
                <ArrowRight size={20} />
              </button>
              <button className='border border-indigo-500/50 hover:border-indigo-500 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 backdrop-blur-sm'>
                Schedule a Demo
              </button>
            </div>

            <p className='text-gray-400 text-sm mt-6'>
              Free forever. Upgrade anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
