import React from 'react';
import {
  Code2,
  Brain,
  BookOpen,
  Calendar,
  TrendingUp,
  LayoutDashboard,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const features = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    route: '/dashboard',
    description:
      'Monitor streaks, tasks, solved problems, and overall performance.',
  },

  {
    name: 'Study Tracker',
    icon: Code2,
    route: '/dashboard/studytracker',
    description:
      'Track DSA questions, revision progress, and coding consistency.',
  },

  {
    name: 'AI Mentor',
    icon: Brain,
    route: '/dashboard/aimentor',
    description:
      'Get AI-powered guidance, explanations, and preparation support.',
  },

  {
    name: 'Smart Notes',
    icon: BookOpen,
    route: '/dashboard/notes',
    description:
      'Write, organize, summarize, and improve notes using AI.',
  },

  {
    name: 'Study Planner',
    icon: Calendar,
    route: '/dashboard/studyplan',
    description:
      'Generate personalized daily preparation roadmaps with AI.',
  },
];

export default function Features() {

  const navigate = useNavigate();

  return (
    <section
      id='features'
      className='py-20 px-6 lg:px-10 bg-gradient-to-b from-white to-[#F8FAFC]'
    >
      <div className='max-w-7xl mx-auto'>

        {/* Heading */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4 text-gray-900'>
            Everything You Need to Succeed
          </h2>

          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Powerful AI-driven tools designed to make placement preparation
            structured, smart, and consistent.
          </p>
        </div>

        {/* Top Feature Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                onClick={() => navigate(feature.route)}
                className='group cursor-pointer bg-[#F5F3EE] p-7 rounded-3xl border border-gray-200 hover:border-[#0B8457] hover:shadow-xl hover:-translate-y-2 transition-all duration-300'
              >
                {/* Icon */}
                <div className='inline-flex items-center justify-center w-16 h-16 bg-[#0B8457]/10 rounded-2xl mb-5 group-hover:bg-[#0B8457] transition-all duration-300'>
                  <Icon
                    size={30}
                    className='text-[#0B8457] group-hover:text-white transition-colors duration-300'
                  />
                </div>

                {/* Title */}
                <h3 className='font-bold text-xl text-gray-900 mb-3'>
                  {feature.name}
                </h3>

                {/* Description */}
                <p className='text-gray-600 text-sm leading-6'>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Feature Highlights */}
        {/* Why Choose Orbit AI */}
<div className='mt-24'>

  {/* Heading */}
  <div className='text-center mb-14 px-4'>
    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
      Why Choose Orbit AI?
    </h2>

    <p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-7'>
      Built to remove confusion from placement preparation and help
      students stay focused, productive, and consistent every day.
    </p>
  </div>

  {/* Cards */}
  <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>

      {/* Card 1 */}
      <div className='bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>

        <div className='w-16 h-16 rounded-2xl bg-[#0B8457]/10 flex items-center justify-center mb-6'>
         <Calendar size={32} className='text-[#0B8457]' />
        </div>

        <h3 className='text-2xl font-bold text-gray-900 mb-4'>
          Smart Preparation
        </h3>

        <p className='text-gray-600 leading-7 text-base'>
          Follow a structured roadmap instead of random studying.
          Get topic guidance, daily plans, and preparation clarity.
        </p>
      </div>

      {/* Card 2 */}
      <div className='bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>

        <div className='w-16 h-16 rounded-2xl bg-[#0B8457]/10 flex items-center justify-center mb-6'>
          <Brain size={32} className='text-[#0B8457]' />
        </div>

        <h3 className='text-2xl font-bold text-gray-900 mb-4'>
          Save Time
        </h3>

        <p className='text-gray-600 leading-7 text-base'>
          AI summarizes notes, explains concepts instantly,
          and generates personalized study plans in seconds.
        </p>
      </div>

      {/* Card 3 */}
      <div className='bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>

        <div className='w-16 h-16 rounded-2xl bg-[#0B8457]/10 flex items-center justify-center mb-6'>
          <TrendingUp size={32} className='text-[#0B8457]' />
        </div>

        <h3 className='text-2xl font-bold text-gray-900 mb-4'>
          Stay Consistent
        </h3>

        <p className='text-gray-600 leading-7 text-base'>
          Track streaks, daily goals, completed tasks,
          and monitor your placement preparation progress.
        </p>
        </div>

        </div>
      </div>
        </div>
    </section>
  );
}