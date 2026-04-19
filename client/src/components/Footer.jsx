
import React from 'react';
import {  FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import {  Mail } from 'lucide-react';


export default function Footer() {
  return (
    <footer className='bg-[#1E293B] border-t border-gray-700 py-12 px-6 lg:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          <div>
            <h2 className='text-2xl font-bold text-white mb-4'>
              AI Workspace
            </h2>
            <p className='text-gray-400 mb-4'>
              Your intelligent companion for placement preparation and career success.
            </p>
            <div className='flex gap-3'>
              <a href='#' className='w-10 h-10 bg-gray-700 hover:bg-[#0B8457] rounded-lg flex items-center justify-center transition-all hover:scale-110'>
                <FaTwitter size={18} className='text-white' />
              </a>
              <a href='#' className='w-10 h-10 bg-gray-700 hover:bg-[#0B8457] rounded-lg flex items-center justify-center transition-all hover:scale-110'>
                <FaLinkedin size={18} className='text-white' />
              </a>
              <a href='#' className='w-10 h-10 bg-gray-700 hover:bg-[#0B8457] rounded-lg flex items-center justify-center transition-all hover:scale-110'>
                <FaGithub size={18} className='text-white' />
              </a>
              <a href='#' className='w-10 h-10 bg-gray-700 hover:bg-[#0B8457] rounded-lg flex items-center justify-center transition-all hover:scale-110'>
                <Mail size={18} className='text-white' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4 text-white'>Product</h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a href='#features' className='hover:text-[#0B8457] transition-colors'>Features</a></li>
              <li><a href='#pricing' className='hover:text-[#0B8457] transition-colors'>Pricing</a></li>
              <li><a href='#' className='hover:text-[#0B8457] transition-colors'>Roadmap</a></li>
              <li><a href='#' className='hover:text-[#0B8457] transition-colors'>Changelog</a></li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4 text-white'>Resources</h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a href='#' className='hover:text-[#0B8457] transition-colors'>Documentation</a></li>
              <li><a href='#' className='hover:text-[#0B8457] transition-colors'>Tutorials</a></li>
              <li><a href='#' className='hover:text-[#0B8457] transition-colors'>Blog</a></li>
              <li><a href='#' className='hover:text-[#0B8457] transition-colors'>Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4 text-white'>Company</h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a href='#' className='hover:text-[#0B8457] transition-colors'>About</a></li>
              <li><a href='#' className='hover:text-[#0B8457] transition-colors'>Careers</a></li>
              <li><a href='#' className='hover:text-[#0B8457] transition-colors'>Contact</a></li>
              <li><a href='#' className='hover:text-[#0B8457] transition-colors'>Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-400 text-sm'>
            © 2026 AI Workspace. All rights reserved.
          </p>
          <div className='flex gap-6 text-sm text-gray-400'>
            <a href='#' className='hover:text-[#0B8457] transition-colors'>Terms</a>
            <a href='#' className='hover:text-[#0B8457] transition-colors'>Privacy</a>
            <a href='#' className='hover:text-[#0B8457] transition-colors'>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}