import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Kumar',
    role: 'Placed at Google',
    image: 'RK',
    rating: 5,
    text: 'This platform transformed my placement journey. The AI mentor helped me solve complex DSA problems and I landed my dream job at Google!'
  },
  {
    name: 'Priya Sharma',
    role: 'Placed at Microsoft',
    image: 'PS',
    rating: 5,
    text: 'The study planner and progress tracking kept me motivated throughout. Got placed at Microsoft with a great package!'
  },
  {
    name: 'Amit Patel',
    role: 'Placed at Amazon',
    image: 'AP',
    rating: 5,
    text: 'Best investment for placement prep. The AI-powered notes and recommendations are game-changers. Highly recommend!'
  }
];

export default function Testimonials() {
  return (
    <section className='py-20 px-6 lg:px-10 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4 text-gray-900'>
            Loved by Students
          </h2>
          <p className='text-gray-600 text-lg'>
            Join thousands of students who landed their dream jobs
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-[#F5F3EE] p-8 rounded-2xl border border-gray-200 hover:border-[#0B8457] hover:shadow-lg transition-all hover:scale-105 relative'
            >
              <Quote size={32} className='text-[#0B8457]/20 absolute top-6 right-6' />
              
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-16 h-16 bg-[#0B8457] rounded-full flex items-center justify-center font-bold text-lg text-white'>
                  {testimonial.image}
                </div>
                <div>
                  <h3 className='font-bold text-lg text-gray-900'>{testimonial.name}</h3>
                  <p className='text-gray-600 text-sm'>{testimonial.role}</p>
                </div>
              </div>

              <div className='flex gap-1 mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className='fill-[#F5A623] text-[#F5A623]' />
                ))}
              </div>

              <p className='text-gray-700 leading-relaxed'>{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center'>
          <div>
            <div className='text-4xl font-bold text-[#0B8457] mb-2'>10K+</div>
            <div className='text-gray-600'>Happy Students</div>
          </div>
          <div>
            <div className='text-4xl font-bold text-[#0B8457] mb-2'>500+</div>
            <div className='text-gray-600'>Companies</div>
          </div>
          <div>
            <div className='text-4xl font-bold text-[#0B8457] mb-2'>95%</div>
            <div className='text-gray-600'>Success Rate</div>
          </div>
          <div>
            <div className='text-4xl font-bold text-[#0B8457] mb-2'>4.9/5</div>
            <div className='text-gray-600'>Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}