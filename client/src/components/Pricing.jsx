import React, { useState } from 'react';
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
    highlighted: false
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
    highlighted: true
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
    highlighted: false
  }
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id='pricing' className='py-20 px-6 lg:px-10 bg-[#F5F3EE]'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-4 text-gray-900'>
            Simple, Transparent Pricing
          </h2>
          <p className='text-gray-600 text-lg mb-8'>
            Choose the plan that fits your needs
          </p>

          <div className='inline-flex items-center gap-4 bg-white p-2 rounded-xl border border-gray-200 shadow-sm'>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#0B8457] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-[#0B8457] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className='ml-2 text-xs bg-[#F5A623]/20 text-[#F5A623] px-2 py-1 rounded-full font-semibold'>
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
                className={`bg-white p-8 rounded-3xl border transition-all hover:scale-105 ${
                  plan.highlighted
                    ? 'border-[#0B8457] shadow-xl scale-105 relative'
                    : 'border-gray-200 shadow-sm'
                }`}
              >
                {plan.highlighted && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0B8457] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md'>
                    Most Popular
                  </div>
                )}

                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-[#0B8457]/10 rounded-xl flex items-center justify-center'>
                    <Icon size={24} className='text-[#0B8457]' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-900'>{plan.name}</h3>
                  </div>
                </div>

                <p className='text-gray-600 mb-6'>{plan.description}</p>

                <div className='mb-8'>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-5xl font-bold text-gray-900'>₹{plan.price}</span>
                    <span className='text-gray-600'>/{plan.period}</span>
                  </div>
                  {billingCycle === 'yearly' && plan.price !== '0' && (
                    <p className='text-[#0B8457] text-sm mt-2'>
                      Save ₹{Math.floor(plan.price * 12 * 0.2)} yearly
                    </p>
                  )}
                </div>

                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all hover:scale-105 mb-8 shadow-md ${
                    plan.highlighted
                      ? 'bg-[#0B8457] hover:bg-[#096B45] text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </button>

                <div className='space-y-4'>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className='flex items-start gap-3'>
                      <Check size={20} className='text-[#0B8457] flex-shrink-0 mt-0.5' />
                      <span className='text-gray-700'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className='mt-16 text-center'>
          <p className='text-gray-600 mb-4'>
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