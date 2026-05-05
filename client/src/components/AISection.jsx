import React from 'react';
import {
  Brain,
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
      className='py-16 sm:py-20 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden max-w-full'
    >
      <div className='max-w-7xl mx-auto overflow-hidden'>

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-start overflow-hidden'>

          {/* LEFT CONTENT */}
          <div className='space-y-6 sm:space-y-8 min-w-0'>

            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-[#0B8457]/10 border border-[#0B8457]/20 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm w-fit max-w-full'>
              <Brain size={16} className='text-[#0B8457] flex-shrink-0' />

              <span className='text-[#0B8457] font-semibold break-words'>
                Smart AI-Powered Workspace
              </span>
            </div>

            {/* Heading */}
            <div className='min-w-0'>
              <h2 className='text-[2rem] sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight break-words'>
                Your Complete Placement Workspace
              </h2>

              <p className='text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mt-4 sm:mt-6 max-w-2xl break-words'>
                Track progress, manage notes, follow personalized roadmaps,
                and get AI-powered recommendations — all in one intelligent
                platform built for placement preparation.
              </p>
            </div>

            {/* Features */}
            <div className='space-y-5 sm:space-y-6'>

              {/* Item 1 */}
              <div className='flex items-start gap-4 group min-w-0'>

                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-[#0B8457]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B8457] transition-all duration-300'>
                  <LayoutDashboard
                    size={24}
                    className='text-[#0B8457] group-hover:text-white transition-colors duration-300'
                  />
                </div>

                <div className='min-w-0'>
                  <h3 className='font-bold text-lg sm:text-xl mb-2 text-gray-900 break-words'>
                    Smart Tracking Dashboard
                  </h3>

                  <p className='text-gray-600 leading-6 sm:leading-7 text-sm sm:text-base break-words'>
                    Track DSA problems, completed tasks, consistency streaks,
                    and preparation progress from one dashboard.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className='flex items-start gap-4 group min-w-0'>

                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-[#0B8457]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B8457] transition-all duration-300'>
                  <FileText
                    size={24}
                    className='text-[#0B8457] group-hover:text-white transition-colors duration-300'
                  />
                </div>

                <div className='min-w-0'>
                  <h3 className='font-bold text-lg sm:text-xl mb-2 text-gray-900 break-words'>
                    AI-Powered Notes
                  </h3>

                  <p className='text-gray-600 leading-6 sm:leading-7 text-sm sm:text-base break-words'>
                    Create notes, summarize concepts instantly,
                    and improve explanations using AI assistance.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className='flex items-start gap-4 group min-w-0'>

                <div className='w-12 h-12 sm:w-14 sm:h-14 bg-[#0B8457]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B8457] transition-all duration-300'>
                  <Zap
                    size={24}
                    className='text-[#0B8457] group-hover:text-white transition-colors duration-300'
                  />
                </div>

                <div className='min-w-0'>
                  <h3 className='font-bold text-lg sm:text-xl mb-2 text-gray-900 break-words'>
                    Personalized Roadmaps
                  </h3>

                  <p className='text-gray-600 leading-6 sm:leading-7 text-sm sm:text-base break-words'>
                    Get structured daily plans tailored to your weak areas,
                    target companies, and preparation timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE PRODUCT PREVIEW */}
          <div className='relative w-full min-w-0'>

            {/* Main Card */}
            <div className='bg-[#F5F3EE] border border-gray-200 rounded-[2rem] p-3 sm:p-6 lg:p-7 shadow-xl overflow-hidden'>

              <div className='space-y-4 sm:space-y-5'>

                {/* Dashboard Preview */}
                <div className='bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'>

                  <div className='flex items-center justify-between mb-5 gap-3'>
                    <div className='flex items-center gap-2 sm:gap-3 min-w-0'>
                      <LayoutDashboard
                        size={20}
                        className='text-[#0B8457] flex-shrink-0'
                      />

                      <h3 className='font-bold text-sm sm:text-base text-gray-900 truncate'>
                        Dashboard Overview
                      </h3>
                    </div>

                    <span className='text-xs sm:text-sm font-semibold text-[#0B8457] flex-shrink-0'>
                      +24%
                    </span>
                  </div>

                  <div className='grid grid-cols-3 gap-2 sm:gap-3 overflow-hidden'>

                    <div className='bg-[#0B8457]/10 rounded-xl p-2 sm:p-3 text-center min-w-0'>
                      <h4 className='text-base sm:text-xl font-bold text-gray-900'>
                        320
                      </h4>

                      <p className='text-[10px] sm:text-xs text-gray-600 mt-1 break-words'>
                        Problems
                      </p>
                    </div>

                    <div className='bg-[#0B8457]/10 rounded-xl p-2 sm:p-3 text-center min-w-0'>
                      <h4 className='text-base sm:text-xl font-bold text-gray-900'>
                        18
                      </h4>

                      <p className='text-[10px] sm:text-xs text-gray-600 mt-1 break-words'>
                        Day Streak
                      </p>
                    </div>

                    <div className='bg-[#0B8457]/10 rounded-xl p-2 sm:p-3 text-center min-w-0'>
                      <h4 className='text-base sm:text-xl font-bold text-gray-900'>
                        92%
                      </h4>

                      <p className='text-[10px] sm:text-xs text-gray-600 mt-1 break-words'>
                        Progress
                      </p>
                    </div>

                  </div>
                </div>

                {/* AI Recommendation */}
                <div className='bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'>

                  <div className='flex items-start gap-3 sm:gap-4 min-w-0'>

                    <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0B8457]/10 flex items-center justify-center flex-shrink-0'>
                      <Brain size={22} className='text-[#0B8457]' />
                    </div>

                    <div className='min-w-0'>
                      <h3 className='font-bold text-sm sm:text-base text-gray-900 mb-2 break-words'>
                        AI Recommendation
                      </h3>

                      <p className='text-gray-600 leading-6 sm:leading-7 text-xs sm:text-base break-words'>
                        Based on your progress, focus on Binary Search
                        and Recursion before starting Trees.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notes Preview */}
                <div className='bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 w-full overflow-hidden'>

                  <div className='flex items-center gap-3 mb-4 min-w-0'>
                    <FileText
                      size={20}
                      className='text-[#0B8457] flex-shrink-0'
                    />

                    <h3 className='font-bold text-sm sm:text-base text-gray-900 break-words'>
                      Smart Notes Preview
                    </h3>
                  </div>

                  <div className='w-full overflow-hidden scale-[0.82] sm:scale-[0.92] origin-top'>
                    <NotesPreview />
                  </div>
                </div>

                {/* Roadmap + Progress */}
                <div className='bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'>

                  <div className='flex items-center justify-between mb-4 gap-3'>

                    <div className='flex items-center gap-2 sm:gap-3 min-w-0'>
                      <TrendingUp
                        size={20}
                        className='text-[#0B8457] flex-shrink-0'
                      />

                      <h3 className='font-bold text-sm sm:text-base text-gray-900 break-words'>
                        Placement Readiness
                      </h3>
                    </div>

                    <span className='text-[#0B8457] font-bold text-base sm:text-lg flex-shrink-0'>
                      98%
                    </span>
                  </div>

                  {/* Progress */}
                  <div className='h-2.5 sm:h-3 bg-gray-100 rounded-full overflow-hidden mb-5'>
                    <div className='h-full bg-[#0B8457] w-[98%] rounded-full'></div>
                  </div>

                  {/* Tasks */}
                  <div className='space-y-3'>

                    <div className='flex items-center justify-between text-xs sm:text-sm gap-3'>
                      <div className='flex items-center gap-2 min-w-0'>
                        <CheckCircle2
                          size={15}
                          className='text-[#0B8457] flex-shrink-0'
                        />

                        <span className='text-gray-700 break-words'>
                          Arrays & Strings
                        </span>
                      </div>

                      <span className='text-[#0B8457] font-medium flex-shrink-0'>
                        Completed
                      </span>
                    </div>

                    <div className='flex items-center justify-between text-xs sm:text-sm gap-3'>
                      <div className='flex items-center gap-2 min-w-0'>
                        <CheckCircle2
                          size={15}
                          className='text-[#0B8457] flex-shrink-0'
                        />

                        <span className='text-gray-700 break-words'>
                          Binary Search
                        </span>
                      </div>

                      <span className='text-[#0B8457] font-medium flex-shrink-0'>
                        In Progress
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Background Glow */}
            <div className='absolute -z-10 top-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#0B8457]/10 blur-3xl rounded-full'></div>
          </div>

        </div>
      </div>
    </section>
  );
}