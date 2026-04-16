
import { Code2, Brain, BookOpen, Calendar, TrendingUp } from 'lucide-react';

const features = [
  { name: 'DSA Tracker', icon: Code2, color: 'indigo' },
  { name: 'AI Mentor', icon: Brain, color: 'purple' },
  { name: 'Smart Notes', icon: BookOpen, color: 'pink' },
  { name: 'Study Planner', icon: Calendar, color: 'blue' },
  { name: 'Progress Analytics', icon: TrendingUp, color: 'violet' }
];

export default function Features() {
  return (
    <section id='features' className='py-20 px-6 lg:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>
            Everything You Need to{' '}
            <span className='bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
              Succeed
            </span>
          </h2>
          <p className='text-gray-400 text-lg'>
            Powerful features designed for modern placement preparation
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className='group relative backdrop-blur-sm bg-[#1E293B]/50 p-8 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 text-center'
              >
                <div className='absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity'></div>
                <div className='relative'>
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-indigo-600/20 rounded-xl mb-4 group-hover:bg-indigo-600/30 transition-colors'>
                    <Icon size={28} className='text-indigo-400' />
                  </div>
                  <h3 className='font-semibold text-lg'>{feature.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className='grid md:grid-cols-3 gap-8 mt-16'>
          <div className='backdrop-blur-sm bg-[#1E293B]/50 p-8 rounded-2xl border border-indigo-500/20'>
            <Code2 size={32} className='text-indigo-400 mb-4' />
            <h3 className='text-xl font-bold mb-3'>Master DSA</h3>
            <p className='text-gray-400'>
              Track your progress across 500+ DSA problems with difficulty levels, topics, and revision schedules.
            </p>
          </div>

          <div className='backdrop-blur-sm bg-[#1E293B]/50 p-8 rounded-2xl border border-purple-500/20'>
            <Brain size={32} className='text-purple-400 mb-4' />
            <h3 className='text-xl font-bold mb-3'>AI-Powered Learning</h3>
            <p className='text-gray-400'>
              Get personalized recommendations, concept explanations, and doubt solving powered by advanced AI.
            </p>
          </div>

          <div className='backdrop-blur-sm bg-[#1E293B]/50 p-8 rounded-2xl border border-pink-500/20'>
            <TrendingUp size={32} className='text-pink-400 mb-4' />
            <h3 className='text-xl font-bold mb-3'>Track Progress</h3>
            <p className='text-gray-400'>
              Visualize your learning journey with detailed analytics, streaks, and performance insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
