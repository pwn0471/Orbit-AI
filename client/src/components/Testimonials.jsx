
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
    <section className='py-20 px-6 lg:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>
            Loved by{' '}
            <span className='bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
              Students
            </span>
          </h2>
          <p className='text-gray-400 text-lg'>
            Join thousands of students who landed their dream jobs
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='backdrop-blur-sm bg-[#1E293B]/50 p-8 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/50 transition-all hover:scale-105 relative'
            >
              <Quote size={32} className='text-indigo-400/20 absolute top-6 right-6' />
              
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-lg'>
                  {testimonial.image}
                </div>
                <div>
                  <h3 className='font-bold text-lg'>{testimonial.name}</h3>
                  <p className='text-gray-400 text-sm'>{testimonial.role}</p>
                </div>
              </div>

              <div className='flex gap-1 mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className='fill-yellow-400 text-yellow-400' />
                ))}
              </div>

              <p className='text-gray-300 leading-relaxed'>{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center'>
          <div>
            <div className='text-4xl font-bold text-indigo-400 mb-2'>10K+</div>
            <div className='text-gray-400'>Happy Students</div>
          </div>
          <div>
            <div className='text-4xl font-bold text-purple-400 mb-2'>500+</div>
            <div className='text-gray-400'>Companies</div>
          </div>
          <div>
            <div className='text-4xl font-bold text-pink-400 mb-2'>95%</div>
            <div className='text-gray-400'>Success Rate</div>
          </div>
          <div>
            <div className='text-4xl font-bold text-blue-400 mb-2'>4.9/5</div>
            <div className='text-gray-400'>Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
