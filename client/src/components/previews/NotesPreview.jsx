import React from 'react';
import { Pin, X } from 'lucide-react';

export default function NotesPreview() {
  return (
    <div className='bg-[#020817] rounded-2xl border border-gray-800 p-4 sm:p-5 w-full shadow-lg'>

      {/* Header */}
      <div className='flex items-center justify-between mb-5'>

        <div>
          <h3 className='text-white text-xl font-bold'>
            Notes
          </h3>

          <p className='text-gray-400 text-sm mt-1'>
            3 Notes Available
          </p>
        </div>

        <button className='bg-gradient-to-r from-purple-600 to-violet-500 text-white w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xl shadow-md'>
          +
        </button>
      </div>

      {/* Search */}
      <div className='bg-[#081225] border border-gray-700 rounded-xl px-4 py-3 text-gray-500 mb-5'>
        Search notes...
      </div>

      {/* Notes List */}
      <div className='flex gap-4 overflow-x-auto pb-2 scrollbar-hide'>

        {/* Note 1 */}
        <div className='min-w-[220px] bg-purple-900/40 border border-purple-500 rounded-2xl p-4'>

          <div className='flex items-start justify-between mb-2'>

            <div>
              <h4 className='text-white font-semibold text-lg'>
                DBMS Notes
              </h4>

              <p className='text-gray-400 text-xs mt-1'>
                4/29/2026, 6:16 PM
              </p>
            </div>

            <div className='flex items-center gap-3'>

              <Pin
                size={18}
                className='text-gray-400'
              />

              <X
                size={18}
                className='text-red-400'
              />
            </div>
          </div>

          <span className='bg-purple-600/30 text-purple-300 text-xs px-3 py-1 rounded-full'>
            AI Summary
          </span>
        </div>

        {/* Note 2 */}
        <div className='min-w-[220px] bg-[#081225] border border-gray-700 rounded-2xl p-4'>

          <div className='flex items-start justify-between mb-2'>

            <div>
              <h4 className='text-white font-semibold text-lg'>
                OS Revision
              </h4>

              <p className='text-gray-400 text-xs mt-1'>
                AI summarized notes available
              </p>
            </div>

            <X
              size={18}
              className='text-red-400'
            />
          </div>

          <div className='h-2 bg-purple-500/40 rounded-full w-20 mt-3'></div>
        </div>

      </div>
    </div>
  );
}