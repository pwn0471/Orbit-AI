
import { Brain, Lightbulb, MessageSquare, Zap } from 'lucide-react';

export default function AISection() {
  return (
    <section id='ai-section' className='py-20 px-6 lg:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <div className='inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 px-4 py-2 rounded-full text-sm backdrop-blur-sm'>
              <Brain size={16} className='text-purple-400' />
              <span>Powered by Advanced AI</span>
            </div>

            <h2 className='text-4xl lg:text-5xl font-bold'>
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                AI-Powered
              </span>{' '}
              Guidance
            </h2>

            <p className='text-gray-300 text-lg leading-relaxed'>
              Get personalized roadmap, concept explanations, and smart suggestions powered by AI. 
              Your intelligent companion for placement success.
            </p>

            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Lightbulb size={24} className='text-purple-400' />
                </div>
                <div>
                  <h3 className='font-bold text-lg mb-1'>Smart Recommendations</h3>
                  <p className='text-gray-400'>
                    AI analyzes your progress and suggests the best problems to solve next
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <MessageSquare size={24} className='text-indigo-400' />
                </div>
                <div>
                  <h3 className='font-bold text-lg mb-1'>Instant Doubt Solving</h3>
                  <p className='text-gray-400'>
                    Ask questions and get detailed explanations in natural language
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Zap size={24} className='text-pink-400' />
                </div>
                <div>
                  <h3 className='font-bold text-lg mb-1'>Personalized Learning Path</h3>
                  <p className='text-gray-400'>
                    Custom roadmap tailored to your skill level and target companies
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full'></div>
            
            <div className='relative backdrop-blur-sm bg-[#1E293B]/50 p-8 rounded-3xl border border-purple-500/20 shadow-2xl'>
              <div className='space-y-4'>
                <div className='flex items-center gap-3 bg-indigo-600/20 p-4 rounded-xl border border-indigo-500/30'>
                  <Brain size={24} className='text-indigo-400' />
                  <div className='flex-1'>
                    <div className='h-3 bg-indigo-500/30 rounded w-3/4 mb-2'></div>
                    <div className='h-2 bg-indigo-500/20 rounded w-full'></div>
                  </div>
                </div>

                <div className='flex items-center gap-3 bg-purple-600/20 p-4 rounded-xl border border-purple-500/30'>
                  <Lightbulb size={24} className='text-purple-400' />
                  <div className='flex-1'>
                    <div className='h-3 bg-purple-500/30 rounded w-2/3 mb-2'></div>
                    <div className='h-2 bg-purple-500/20 rounded w-5/6'></div>
                  </div>
                </div>

                <div className='flex items-center gap-3 bg-pink-600/20 p-4 rounded-xl border border-pink-500/30'>
                  <MessageSquare size={24} className='text-pink-400' />
                  <div className='flex-1'>
                    <div className='h-3 bg-pink-500/30 rounded w-4/5 mb-2'></div>
                    <div className='h-2 bg-pink-500/20 rounded w-3/4'></div>
                  </div>
                </div>

                <div className='bg-gradient-to-br from-indigo-600/10 to-purple-600/10 p-6 rounded-xl border border-indigo-500/20 mt-6'>
                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-sm text-gray-400'>AI Confidence</span>
                    <span className='text-indigo-400 font-bold'>98%</span>
                  </div>
                  <div className='h-2 bg-[#1E293B] rounded-full overflow-hidden'>
                    <div className='h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[98%]'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
