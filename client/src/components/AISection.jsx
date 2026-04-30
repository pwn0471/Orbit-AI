import React from 'react';
import {
  Brain,
  Lightbulb,
  MessageSquare,
  Zap,
  LayoutDashboard,
  FileText,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

import NotesPreview from './previews/NotesPreview';
export default function AISection() {
  return (
    <section
      id='ai-section'
      className='py-20 px-6 lg:px-10 bg-white overflow-hidden'
    >
      <div className='max-w-7xl mx-auto'>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>

          {/* LEFT CONTENT */}
          <div className='space-y-8'>

            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-[#0B8457]/10 border border-[#0B8457]/20 px-5 py-2 rounded-full text-sm'>
              <Brain size={16} className='text-[#0B8457]' />

              <span className='text-[#0B8457] font-semibold'>
                Smart AI-Powered Workspace
              </span>
            </div>

            {/* Heading */}
            <div>
              <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                Your Complete Placement Workspace
              </h2>

              <p className='text-gray-600 text-lg leading-8 mt-6 max-w-2xl'>
                Track progress, manage notes, follow personalized roadmaps,
                and get AI-powered recommendations — all in one intelligent
                platform built for placement preparation.
              </p>
            </div>

            {/* Features */}
            <div className='space-y-6'>

              {/* Item 1 */}
              <div className='flex items-start gap-4 group'>

                <div className='w-14 h-14 bg-[#0B8457]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B8457] transition-all duration-300'>
                  <LayoutDashboard
                    size={26}
                    className='text-[#0B8457] group-hover:text-white transition-colors duration-300'
                  />
                </div>

                <div>
                  <h3 className='font-bold text-xl mb-2 text-gray-900'>
                    Smart Tracking Dashboard
                  </h3>

                  <p className='text-gray-600 leading-7'>
                    Track DSA problems, completed tasks, consistency streaks,
                    and preparation progress from one dashboard.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className='flex items-start gap-4 group'>

                <div className='w-14 h-14 bg-[#0B8457]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B8457] transition-all duration-300'>
                  <FileText
                    size={26}
                    className='text-[#0B8457] group-hover:text-white transition-colors duration-300'
                  />
                </div>

                <div>
                  <h3 className='font-bold text-xl mb-2 text-gray-900'>
                    AI-Powered Notes
                  </h3>

                  <p className='text-gray-600 leading-7'>
                    Create notes, summarize concepts instantly,
                    and improve explanations using AI assistance.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className='flex items-start gap-4 group'>

                <div className='w-14 h-14 bg-[#0B8457]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B8457] transition-all duration-300'>
                  <Zap
                    size={26}
                    className='text-[#0B8457] group-hover:text-white transition-colors duration-300'
                  />
                </div>

                <div>
                  <h3 className='font-bold text-xl mb-2 text-gray-900'>
                    Personalized Roadmaps
                  </h3>

                  <p className='text-gray-600 leading-7'>
                    Get structured daily plans tailored to your weak areas,
                    target companies, and preparation timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE PRODUCT PREVIEW */}
          <div className='relative'>

            {/* Main Card */}
            <div className='bg-[#F5F3EE] border border-gray-200 rounded-[2rem] p-5 sm:p-7 shadow-xl'>

              <div className='space-y-5'>

                {/* Dashboard Preview */}
                <div className='bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300'>

                  <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-3'>
                      <LayoutDashboard
                        size={22}
                        className='text-[#0B8457]'
                      />

                      <h3 className='font-bold text-gray-900'>
                        Dashboard Overview
                      </h3>
                    </div>

                    <span className='text-sm font-semibold text-[#0B8457]'>
                      +24%
                    </span>
                  </div>

                  <div className='grid grid-cols-3 gap-3'>

                    <div className='bg-[#0B8457]/10 rounded-xl p-3 text-center'>
                      <h4 className='text-xl font-bold text-gray-900'>320</h4>
                      <p className='text-xs text-gray-600 mt-1'>Problems</p>
                    </div>

                    <div className='bg-[#0B8457]/10 rounded-xl p-3 text-center'>
                      <h4 className='text-xl font-bold text-gray-900'>18</h4>
                      <p className='text-xs text-gray-600 mt-1'>Day Streak</p>
                    </div>

                    <div className='bg-[#0B8457]/10 rounded-xl p-3 text-center'>
                      <h4 className='text-xl font-bold text-gray-900'>92%</h4>
                      <p className='text-xs text-gray-600 mt-1'>Progress</p>
                    </div>

                  </div>
                </div>

                {/* AI Recommendation */}
                <div className='bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300'>

                  <div className='flex items-start gap-4'>

                    <div className='w-12 h-12 rounded-xl bg-[#0B8457]/10 flex items-center justify-center flex-shrink-0'>
                      <Brain size={24} className='text-[#0B8457]' />
                    </div>

                    <div>
                      <h3 className='font-bold text-gray-900 mb-2'>
                        AI Recommendation
                      </h3>

                      <p className='text-gray-600 leading-7 text-sm sm:text-base'>
                        Based on your progress, focus on Binary Search
                        and Recursion before starting Trees.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notes Preview */}
                <div className='bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300 w-full'>
                  <div className='flex items-center gap-3 mb-4'>
                    <FileText
                    size={22}
                    className='text-[#0B8457]'
                  />

                  <h3 className='font-bold text-gray-900'>
                      Smart Notes Preview
                  </h3>
                </div>

                <div className='w-full scale-[0.92] origin-top'>
                  <NotesPreview />
                </div>
              </div>

                {/* Roadmap + Progress */}
                <div className='bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-300'>

                  <div className='flex items-center justify-between mb-4'>

                    <div className='flex items-center gap-3'>
                      <TrendingUp
                        size={22}
                        className='text-[#0B8457]'
                      />

                      <h3 className='font-bold text-gray-900'>
                        Placement Readiness
                      </h3>
                    </div>

                    <span className='text-[#0B8457] font-bold text-lg'>
                      98%
                    </span>
                  </div>

                  {/* Progress */}
                  <div className='h-3 bg-gray-100 rounded-full overflow-hidden mb-5'>
                    <div className='h-full bg-[#0B8457] w-[98%] rounded-full'></div>
                  </div>

                  {/* Tasks */}
                  <div className='space-y-3'>

                    <div className='flex items-center justify-between text-sm'>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2
                          size={16}
                          className='text-[#0B8457]'
                        />

                        <span className='text-gray-700'>
                          Arrays & Strings
                        </span>
                      </div>

                      <span className='text-[#0B8457] font-medium'>
                        Completed
                      </span>
                    </div>

                    <div className='flex items-center justify-between text-sm'>
                      <div className='flex items-center gap-2'>
                        <CheckCircle2
                          size={16}
                          className='text-[#0B8457]'
                        />

                        <span className='text-gray-700'>
                          Binary Search
                        </span>
                      </div>

                      <span className='text-[#0B8457] font-medium'>
                        In Progress
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Background Glow */}
            <div className='absolute -z-10 top-10 right-10 w-72 h-72 bg-[#0B8457]/10 blur-3xl rounded-full'></div>
          </div>

        </div>
      </div>
    </section>
  );
}