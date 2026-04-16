import { useState } from "react";
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    icon: Zap,
    price: '0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '50 DSA problems access',
      'Basic AI suggestions',
      'Simple notes',
      'Community support',
      'Basic analytics'
    ],
    highlighted: false,
    color: 'indigo'
  },
  {
    name: 'Pro',
    icon: Crown,
    price: '499',
    period: 'month',
    description: 'Best for serious learners',
    features: [
      'Unlimited DSA problems',
      'Advanced AI mentor',
      'Smart notes with code',
      'Priority support',
      'Advanced analytics',
      'Custom roadmap',
      'Interview prep'
    ],
    highlighted: true,
    color: 'purple'
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    price: '2999',
    period: 'year',
    description: 'For colleges and teams',
    features: [
      'Everything in Pro',
      'Multi-user support',
      'Custom branding',
      'Dedicated manager',
      'API access',
      'Advanced reporting',
      'Priority features'
    ],
    highlighted: false,
    color: 'pink'
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id='pricing' className='py-20 px-6 lg:px-10 bg-gradient-to-b from-transparent to-[#1E293B]/20'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>
            Simple,{' '}
            <span className='bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
              Transparent
            </span>{' '}
            Pricing
          </h2>
          <p className='text-gray-400 text-lg mb-8'>
            Choose the plan that fits your needs
          </p>

          <div className='inline-flex items-center gap-4 bg-[#1E293B]/50 p-2 rounded-xl border border-indigo-500/20'>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className='ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full'>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative backdrop-blur-sm bg-[#1E293B]/50 p-8 rounded-3xl border transition-all hover:scale-105 ${
                  plan.highlighted
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20 scale-105'
                    : 'border-indigo-500/20'
                }`}
              >
                {plan.highlighted && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-sm font-semibold'>
                    Most Popular
                  </div>
                )}

                <div className='flex items-center gap-3 mb-6'>
                  <div className={`w-12 h-12 bg-${plan.color}-600/20 rounded-xl flex items-center justify-center`}>
                    <Icon size={24} className={`text-${plan.color}-400`} />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold'>{plan.name}</h3>
                  </div>
                </div>

                <p className='text-gray-400 mb-6'>{plan.description}</p>

                <div className='mb-8'>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-5xl font-bold'>₹{plan.price}</span>
                    <span className='text-gray-400'>/{plan.period}</span>
                  </div>
                  {billingCycle === 'yearly' && plan.price !== '0' && (
                    <p className='text-green-400 text-sm mt-2'>
                      Save ₹{Math.floor(plan.price * 12 * 0.2)} yearly
                    </p>
                  )}
                </div>

                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all hover:scale-105 mb-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  Get Started
                </button>

                <div className='space-y-4'>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className='flex items-start gap-3'>
                      <Check size={20} className='text-indigo-400 flex-shrink-0 mt-0.5' />
                      <span className='text-gray-300'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className='mt-16 text-center'>
          <p className='text-gray-400 mb-4'>
            All plans include 14-day money-back guarantee
          </p>
          <div className='flex justify-center gap-8 text-sm text-gray-500'>
            <span>No credit card required</span>
            <span>•</span>
            <span>Cancel anytime</span>
            <span>•</span>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
