import React from 'react';
import {
  CheckCircle2,
  CalendarCheck,
  Code2,
  Brain,
  TrendingUp,
} from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Create Your Study Plan',
    description:
      'Set your placement timeline, weak topics, and preparation goals to generate a personalized roadmap.',
  },

  {
    icon: Code2,
    title: 'Learn & Practice Daily',
    description:
      'Solve DSA problems, revise concepts, and complete daily study tasks consistently.',
  },

  {
    icon: Brain,
    title: 'Use AI Assistance',
    description:
      'Get AI explanations, smart summaries, and personalized recommendations instantly.',
  },

  {
    icon: TrendingUp,
    title: 'Track Your Progress',
    description:
      'Monitor streaks, solved questions, completed tasks, and your overall preparation growth.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id='how-it-works'
      className='py-20 px-6 lg:px-10 bg-[#F5F3EE]'
    >
      <div className='max-w-7xl mx-auto'>

        {/* Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4 text-gray-900'>
            How It Works
          </h2>

          <p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-7'>
            Simple steps to make your placement preparation smarter,
            more structured, and consistent.
          </p>
        </div>

        {/* Steps */}
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8'>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className='relative group'>

                {/* Card */}
                <div className='bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#0B8457] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full'>

                  {/* Step Number */}
                  <div className='absolute -top-5 left-6 w-12 h-12 bg-[#0B8457] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg'>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-[#0B8457]/10 rounded-2xl mb-6 mt-4 group-hover:bg-[#0B8457] transition-all duration-300'>
                    <Icon
                      size={30}
                      className='text-[#0B8457] group-hover:text-white transition-colors duration-300'
                    />
                  </div>

                  {/* Title */}
                  <h3 className='text-2xl font-bold mb-4 text-gray-900 leading-snug'>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className='text-gray-600 leading-7 text-base'>
                    {step.description}
                  </p>
                </div>

                {/* Desktop Connector Line */}
                {index < steps.length - 1 && (
                  <div className='hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0B8457] to-transparent'></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Badge */}
        <div className='mt-16 text-center'>
          <div className='inline-flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300'>

            <CheckCircle2
              size={20}
              className='text-[#0B8457]'
            />

            <span className='text-[#0B8457] font-semibold text-sm sm:text-base'>
              Start free — no credit card required
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}