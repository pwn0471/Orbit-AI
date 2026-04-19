import React from 'react';
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
    <section id='how-it-works' className='py-20 px-6 lg:px-10 bg-[#F5F3EE]'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4 text-gray-900'>
            How It Works
          </h2>
          <p className='text-gray-600 text-lg'>
            Simple steps to supercharge your placement preparation
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className='relative'>
                <div className='bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#0B8457] hover:shadow-lg transition-all hover:scale-105 h-full'>
                  <div className='absolute -top-4 -left-4 w-10 h-10 bg-[#0B8457] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md'>
                    {index + 1}
                  </div>
                  
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-[#0B8457]/10 rounded-xl mb-6'>
                    <Icon size={28} className='text-[#0B8457]' />
                  </div>
                  
                  <h3 className='text-xl font-bold mb-3 text-gray-900'>{step.title}</h3>
                  <p className='text-gray-600'>{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0B8457] to-transparent'></div>
                )}
              </div>
            );
          })}
        </div>

        <div className='mt-16 text-center'>
          <div className='inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm'>
            <CheckCircle2 size={20} className='text-[#0B8457]' />
            <span className='text-[#0B8457] font-semibold'>No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}