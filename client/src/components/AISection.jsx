import React from 'react';
import { Brain, Lightbulb, MessageSquare, Zap } from 'lucide-react';

export default function AISection() {
  return (
    <section id='ai-section' className='py-20 px-6 lg:px-10 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <div className='inline-flex items-center gap-2 bg-[#0B8457]/10 border border-[#0B8457]/30 px-4 py-2 rounded-full text-sm'>
              <Brain size={16} className='text-[#0B8457]' />
              <span className='text-[#0B8457] font-semibold'>Powered by Advanced AI</span>
            </div>

            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900'>
              AI-Powered Guidance
            </h2>

            <p className='text-gray-600 text-lg leading-relaxed'>
              Get personalized roadmap, concept explanations, and smart suggestions powered by AI. 
              Your intelligent companion for placement success.
            </p>

            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-[#0B8457]/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Lightbulb size={24} className='text-[#0B8457]' />
                </div>
                <div>
                  <h3 className='font-bold text-lg mb-1 text-gray-900'>Smart Recommendations</h3>
                  <p className='text-gray-600'>
                    AI analyzes your progress and suggests the best problems to solve next
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-[#0B8457]/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <MessageSquare size={24} className='text-[#0B8457]' />
                </div>
                <div>
                  <h3 className='font-bold text-lg mb-1 text-gray-900'>Instant Doubt Solving</h3>
                  <p className='text-gray-600'>
                    Ask questions and get detailed explanations in natural language
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-[#0B8457]/10 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Zap size={24} className='text-[#0B8457]' />
                </div>
                <div>
                  <h3 className='font-bold text-lg mb-1 text-gray-900'>Personalized Learning Path</h3>
                  <p className='text-gray-600'>
                    Custom roadmap tailored to your skill level and target companies
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-[#F5F3EE] p-8 rounded-3xl border border-gray-200 shadow-lg'>
            <div className='space-y-4'>
              <div className='flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm'>
                <Brain size={24} className='text-[#0B8457]' />
                <div className='flex-1'>
                  <div className='h-3 bg-gray-200 rounded w-3/4 mb-2'></div>
                  <div className='h-2 bg-gray-100 rounded w-full'></div>
                </div>
              </div>

              <div className='flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm'>
                <Lightbulb size={24} className='text-[#0B8457]' />
                <div className='flex-1'>
                  <div className='h-3 bg-gray-200 rounded w-2/3 mb-2'></div>
                  <div className='h-2 bg-gray-100 rounded w-5/6'></div>
                </div>
              </div>

              <div className='flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm'>
                <MessageSquare size={24} className='text-[#0B8457]' />
                <div className='flex-1'>
                  <div className='h-3 bg-gray-200 rounded w-4/5 mb-2'></div>
                  <div className='h-2 bg-gray-100 rounded w-3/4'></div>
                </div>
              </div>

              <div className='bg-white p-6 rounded-xl border border-gray-200 mt-6 shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-sm text-gray-600'>AI Confidence</span>
                  <span className='text-[#0B8457] font-bold'>98%</span>
                </div>
                <div className='h-2 bg-gray-100 rounded-full overflow-hidden'>
                  <div className='h-full bg-[#0B8457] w-[98%]'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}