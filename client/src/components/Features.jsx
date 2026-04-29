import React from 'react';
import { Code2, Brain, BookOpen, Calendar, TrendingUp } from 'lucide-react';

const features = [
  { name: 'Study Tracker', icon: Code2 },
  { name: 'AI Mentor', icon: Brain },
  { name: 'Smart Notes', icon: BookOpen },
  { name: 'Study Planner', icon: Calendar },
  
];

export default function Features() {
  return (
    <section id='features' className='py-20 px-6 lg:px-10 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4 text-gray-900'>
            Everything You Need to Succeed
          </h2>
          <p className='text-gray-600 text-lg'>
            Powerful features designed for modern placement preparation
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className='group bg-[#F5F3EE] p-8 rounded-2xl border border-gray-200 hover:border-[#0B8457] hover:shadow-lg transition-all hover:scale-105 text-center'
              >
                <div className='inline-flex items-center justify-center w-16 h-16 bg-[#0B8457]/10 rounded-xl mb-4 group-hover:bg-[#0B8457]/20 transition-colors'>
                  <Icon size={28} className='text-[#0B8457]' />
                </div>
                <h3 className='font-semibold text-lg text-gray-900'>{feature.name}</h3>
              </div>
            );
          })}
        </div>

        <div className='grid md:grid-cols-3 gap-8 mt-16'>
          <div className='bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
            <Code2 size={32} className='text-[#0B8457] mb-4' />
            <h3 className='text-xl font-bold mb-3 text-gray-900'>Master DSA</h3>
            <p className='text-gray-600'>
              Track your progress across 500+ DSA problems with difficulty levels, topics, and revision schedules.
            </p>
          </div>

          <div className='bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
            <Brain size={32} className='text-[#0B8457] mb-4' />
            <h3 className='text-xl font-bold mb-3 text-gray-900'>AI-Powered Learning</h3>
            <p className='text-gray-600'>
              Get personalized recommendations, concept explanations, and doubt solving powered by advanced AI.
            </p>
          </div>

          <div className='bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow'>
            <TrendingUp size={32} className='text-[#0B8457] mb-4' />
            <h3 className='text-xl font-bold mb-3 text-gray-900'>Track Progress</h3>
            <p className='text-gray-600'>
              Visualize your learning journey with detailed analytics, streaks, and performance insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}