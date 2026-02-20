import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24'>

      {/* Hero Section */}
      <section className='text-center py-16'>
        <h1 className='text-2xl md:text-4xl font-bold text-gray-900'>
          Guiding Students Towards the <span className='text-[#014787]'>Right Career Path</span>
        </h1>
        <p className='mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
          Career Path is a mentorship-driven platform that connects students with experienced
          college mentors to provide real guidance, clarity, and confidence while choosing
          the right academic and career journey.
        </p>
      </section>

      {/* Our Story / Problem Section */}
      <section className='grid md:grid-cols-2 gap-12 items-center'>
        <img
          src={assets.about_image}
          alt="Career Guidance"
          className='w-full h-[420px] object-cover rounded-2xl shadow-xl'
        />

        <div className='space-y-6'>
          <h2 className='text-3xl font-semibold text-gray-900'>Why Career Path Exists</h2>
          <p className='text-lg text-gray-600 leading-relaxed'>
            Every year, thousands of students complete school but feel confused about choosing
            the right career, college, or stream. Most decisions are made based on assumptions,
            peer pressure, or incomplete information.
          </p>
          <p className='text-lg text-gray-600 leading-relaxed'>
            Career Path solves this problem by directly connecting students with mentors who
            have already walked the same journey. Instead of guessing, students get practical
            insights, honest experiences, and step-by-step guidance.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className='text-center my-24'>
        <h2 className='text-3xl font-bold text-gray-900'>
          How <span className='text-[#014787]'>Career Path</span> Works
        </h2>
        <p className='text-lg text-gray-600 mt-4 max-w-2xl mx-auto'>
          A simple, transparent, and student-friendly process to get career clarity.
        </p>

        <div className='grid md:grid-cols-3 gap-10 mt-12 text-left'>
          <div className='p-8 border rounded-2xl shadow-sm hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>1. Explore Mentors</h3>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Browse mentors from top colleges across different fields and discover
              the ones aligned with your goals.
            </p>
          </div>

          <div className='p-8 border rounded-2xl shadow-sm hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>2. Book a Session</h3>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Schedule personalized mentorship sessions at your convenient time
              and get one-on-one guidance.
            </p>
          </div>

          <div className='p-8 border rounded-2xl shadow-sm hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>3. Gain Clarity</h3>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Understand career paths, college life, and opportunities so you can
              make confident and informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className='grid md:grid-cols-2 gap-12 my-24'>
        <div className='bg-white p-10 border rounded-2xl shadow-sm'>
          <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Our Vision</h3>
          <p className='text-lg text-gray-600 leading-relaxed'>
            To empower students with a trusted mentorship ecosystem that bridges the gap
            between school and college life by providing verified connections, real
            experiences, and career clarity.
          </p>
        </div>

        <div className='bg-white p-10 border rounded-2xl shadow-sm'>
          <h3 className='text-2xl font-semibold text-gray-900 mb-4'>Our Mission</h3>
          <p className='text-lg text-gray-600 leading-relaxed'>
            To become the most reliable student guidance platform that supports personal
            growth, academic success, and confident career decision-making through
            community-driven mentorship.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='text-center my-24'>
        <h2 className='text-3xl font-bold text-gray-900'>
          Why Students <span className='text-[#014787]'>Trust Us</span>
        </h2>

        <div className='grid md:grid-cols-3 gap-10 mt-12'>
          <div className='p-8 border rounded-2xl hover:bg-[#014787] hover:text-white transition-all duration-300'>
            <h3 className='text-xl font-bold mb-3'>Real Mentors</h3>
            <p className='text-lg leading-relaxed'>
              Connect with students from top colleges who provide real, honest
              guidance based on their own journey.
            </p>
          </div>

          <div className='p-8 border rounded-2xl hover:bg-[#014787] hover:text-white transition-all duration-300'>
            <h3 className='text-xl font-bold mb-3'>Personalized Guidance</h3>
            <p className='text-lg leading-relaxed'>
              Get one-on-one mentorship sessions tailored to your interests,
              goals, and academic background.
            </p>
          </div>

          <div className='p-8 border rounded-2xl hover:bg-[#014787] hover:text-white transition-all duration-300'>
            <h3 className='text-xl font-bold mb-3'>Safe & Trusted Platform</h3>
            <p className='text-lg leading-relaxed'>
              Verified mentor profiles and a secure environment ensure reliable
              and meaningful career conversations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='text-center bg-[#014787] text-white py-16 rounded-3xl mb-20'>
        <h2 className='text-3xl font-bold'>
          Start Your Career Journey with Confidence
        </h2>
        <p className='mt-4 text-lg text-blue-100 max-w-2xl mx-auto'>
          Join Career Path today and get guidance from mentors who have already
          achieved what you aspire to become.
        </p>
      </section>

    </div>
  )
}

export default About