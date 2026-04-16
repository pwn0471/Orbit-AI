
import { CheckCircle2, ClipboardList, FileText, Sparkles, Map } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Track tasks & DSA',
    description: 'Organize your DSA practice and placement tasks in one place'
  },
  {
    icon: FileText,
    title: 'Write notes',
    description: 'Create smart notes with rich formatting and code snippets'
  },
  {
    icon: Sparkles,
    title: 'AI improves learning',
    description: 'Get AI-powered suggestions and personalized guidance'
  },
  {
    icon: Map,
    title: 'Get roadmap',
    description: 'Follow a customized placement preparation roadmap'
  }
];

export default function HowItWorks() {
  return (
    <section id='how-it-works' className='py-20 px-6 lg:px-10 bg-gradient-to-b from-transparent to-[#1E293B]/20'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>
            How It{' '}
            <span className='bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
              Works
            </span>
          </h2>
          <p className='text-gray-400 text-lg'>
            Simple steps to supercharge your placement preparation
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className='relative'>
                <div className='backdrop-blur-sm bg-[#1E293B]/50 p-8 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/50 transition-all hover:scale-105 h-full'>
                  <div className='absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-lg'>
                    {index + 1}
                  </div>
                  
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-indigo-600/20 rounded-xl mb-6'>
                    <Icon size={28} className='text-indigo-400' />
                  </div>
                  
                  <h3 className='text-xl font-bold mb-3'>{step.title}</h3>
                  <p className='text-gray-400'>{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent'></div>
                )}
              </div>
            );
          })}
        </div>

        <div className='mt-16 text-center'>
          <div className='inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 px-6 py-3 rounded-full backdrop-blur-sm'>
            <CheckCircle2 size={20} className='text-indigo-400' />
            <span className='text-indigo-400 font-semibold'>No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
