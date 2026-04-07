import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24'>

      {/* Hero Section */}
      <section className='text-center py-16 animate-fade-up'>
        <h1 className='text-4xl md:text-5xl font-bold text-white glow-text'>
          Get in <span className='text-indigo-400'>Touch</span>
        </h1>
        <p className='mt-6 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed'>
          Have questions about mentorship, bookings, or partnerships?  
          Our team is here to help you at every step of your career journey.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className='grid md:grid-cols-2 gap-12 items-center my-16 animate-fade-up delay-100'>
        {/* Image */}
        <div className='relative rounded-3xl overflow-hidden glass-card p-2'>
          <img
            className='w-full h-[420px] object-cover rounded-2xl opacity-90'
            src={assets.contact_image}
            alt="Contact Career Path"
          />
        </div>

        {/* Contact Details */}
        <div className='space-y-6 text-slate-300 glass-card p-10 rounded-3xl'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-6'>
            Our Office
          </h2>

          <p className='text-sm md:text-base text-slate-400 leading-relaxed border-l-2 border-indigo-500 pl-4'>
            6304 Times Square <br />
            Thaltej, Ahmedabad, India
          </p>

          <div className='space-y-3 pt-4'>
            <p className='text-sm md:text-base text-slate-300'>
              <span className='font-semibold text-white'>Phone:</span> +91 9467268367
            </p>
            <p className='text-sm md:text-base text-slate-300'>
              <span className='font-semibold text-white'>Email:</span> careerpath@gmail.com
            </p>
          </div>

          <div className='pt-6 border-t border-white/10 mt-6'>
            <h3 className='text-lg font-bold text-white'>
              Careers at Career Path
            </h3>
            <p className='text-sm md:text-base text-slate-400 mt-3 leading-relaxed'>
              Join our mission to guide students and build the most trusted mentorship
              ecosystem for future career decisions.
            </p>
          </div>

          <button className='mt-8 border border-white/20 px-8 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 shadow-lg glow-text'>
            Explore Opportunities
          </button>
        </div>
      </section>

      {/* Contact Cards */}
      <section className='grid md:grid-cols-3 gap-8 my-20 animate-fade-up delay-200'>
        <div className='glass-card rounded-[2rem] p-8 transition-all'>
          <h3 className='text-xl font-bold text-white mb-4'>
            General Inquiries
          </h3>
          <p className='text-sm md:text-base text-slate-400 leading-relaxed'>
            Have general questions about mentorship sessions, platform features,
            or how Career Path works? We’re happy to help.
          </p>
          <p className='text-sm text-indigo-400 font-bold mt-5'>
            support@careerpath.com
          </p>
        </div>

        <div className='glass-card rounded-[2rem] p-8 transition-all'>
          <h3 className='text-xl font-bold text-white mb-4'>
            Mentor Support
          </h3>
          <p className='text-sm md:text-base text-slate-400 leading-relaxed'>
            Are you a mentor and need help managing sessions, availability,
            or bookings? Reach out to our mentor support team.
          </p>
          <p className='text-sm text-indigo-400 font-bold mt-5'>
            mentors@careerpath.com
          </p>
        </div>

        <div className='glass-card rounded-[2rem] p-8 transition-all'>
          <h3 className='text-xl font-bold text-white mb-4'>
            Partnerships
          </h3>
          <p className='text-sm md:text-base text-slate-400 leading-relaxed'>
            Want to collaborate with Career Path for student communities,
            colleges, or career programs? Let’s work together.
          </p>
          <p className='text-sm text-indigo-400 font-bold mt-5'>
            partnerships@careerpath.com
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='text-center glass-card relative overflow-hidden bg-gradient-to-tr from-indigo-900/60 to-slate-900/40 p-16 rounded-[3rem] mb-20 shadow-[0_0_40px_rgba(79,70,229,0.2)] animate-fade-up'>
        <div className='absolute inset-0 bg-indigo-500/10 pointer-events-none' />
        <h2 className='text-3xl md:text-4xl font-bold text-white glow-text relative z-10'>
          We’re Here to Support Your Career Journey
        </h2>
        <p className='mt-6 text-lg text-indigo-200 max-w-2xl mx-auto relative z-10'>
          Whether you’re a student seeking guidance or a mentor wanting to help others,
          our team is ready to assist you anytime.
        </p>
      </section>

    </div>
  )
}

export default Contact