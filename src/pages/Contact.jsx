import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24'>

      {/* Hero Section */}
      <section className='text-center py-7'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>
          Get in <span className='text-[#014787]'>Touch</span>
        </h1>
        <p className='mt-4 text-base text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          Have questions about mentorship, bookings, or partnerships?  
          Our team is here to help you at every step of your career journey.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className='grid md:grid-cols-2 gap-12 items-center my-16'>
        {/* Image */}
        <img
          className='w-full h-[380px] object-cover rounded-2xl shadow-lg'
          src={assets.contact_image}
          alt="Contact Career Path"
        />

        {/* Contact Details */}
        <div className='space-y-6 text-gray-700'>
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>
            Our Office
          </h2>

          <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
            6304 Times Square <br />
            Thaltej, Ahmedabad, India
          </p>

          <div className='space-y-2'>
            <p className='text-sm md:text-base text-gray-600'>
              <span className='font-medium text-gray-800'>Phone:</span> +91 9467268367
            </p>
            <p className='text-sm md:text-base text-gray-600'>
              <span className='font-medium text-gray-800'>Email:</span> careerpath@gmail.com
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-gray-900 mt-6'>
              Careers at Career Path
            </h3>
            <p className='text-sm md:text-base text-gray-600 mt-2 leading-relaxed'>
              Join our mission to guide students and build the most trusted mentorship
              ecosystem for future career decisions.
            </p>
          </div>

          <button className='mt-4 border border-gray-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-300'>
            Explore Opportunities
          </button>
        </div>
      </section>

      {/* Contact Cards */}
      <section className='grid md:grid-cols-3 gap-8 my-20'>
        <div className='border rounded-2xl p-6 shadow-sm hover:shadow-md transition'>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            General Inquiries
          </h3>
          <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
            Have general questions about mentorship sessions, platform features,
            or how Career Path works? We’re happy to help.
          </p>
          <p className='text-sm text-[#014787] font-medium mt-3'>
            support@careerpath.com
          </p>
        </div>

        <div className='border rounded-2xl p-6 shadow-sm hover:shadow-md transition'>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Mentor Support
          </h3>
          <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
            Are you a mentor and need help managing sessions, availability,
            or bookings? Reach out to our mentor support team.
          </p>
          <p className='text-sm text-[#014787] font-medium mt-3'>
            mentors@careerpath.com
          </p>
        </div>

        <div className='border rounded-2xl p-6 shadow-sm hover:shadow-md transition'>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Partnerships
          </h3>
          <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
            Want to collaborate with Career Path for student communities,
            colleges, or career programs? Let’s work together.
          </p>
          <p className='text-sm text-[#014787] font-medium mt-3'>
            partnerships@careerpath.com
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className='text-center bg-[#014787] text-white py-14 rounded-3xl mb-16'>
        <h2 className='text-2xl md:text-3xl font-bold'>
          We’re Here to Support Your Career Journey
        </h2>
        <p className='mt-3 text-base text-blue-100 max-w-2xl mx-auto'>
          Whether you’re a student seeking guidance or a mentor wanting to help others,
          our team is ready to assist you anytime.
        </p>
      </section>

    </div>
  )
}

export default Contact