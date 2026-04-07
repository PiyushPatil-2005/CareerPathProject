import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24'>

      {/* Hero Section */}
      <section className='text-center py-16 animate-fade-up'>
        <h1 className='text-3xl md:text-5xl font-bold text-white glow-text'>
          Guiding Students Towards the <span className='text-indigo-400'>Right Career Path</span>
        </h1>
        <p className='mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed'>
          Career Path is a mentorship-driven platform that connects students with experienced
          college mentors to provide real guidance, clarity, and confidence while choosing
          the right academic and career journey.
        </p>
      </section>

      {/* Our Story / Problem Section */}
      <section className='grid md:grid-cols-2 gap-12 items-center animate-fade-up delay-100'>
        <div className='relative rounded-3xl overflow-hidden glass-card p-2'>
          <img
            src={assets.about_image}
            alt="Career Guidance"
            className='w-full h-[420px] object-cover rounded-2xl opacity-90'
          />
        </div>

        <div className='space-y-6 glass-card p-10 rounded-[2rem]'>
          <h2 className='text-3xl font-bold text-white mb-6'>Why Career Path Exists</h2>
          <p className='text-lg text-slate-400 leading-relaxed border-l-2 border-indigo-500 pl-4'>
            Every year, thousands of students complete school but feel confused about choosing
            the right career, college, or stream. Most decisions are made based on assumptions,
            peer pressure, or incomplete information.
          </p>
          <p className='text-lg text-slate-400 leading-relaxed pl-4'>
            Career Path solves this problem by directly connecting students with mentors who
            have already walked the same journey. Instead of guessing, students get practical
            insights, honest experiences, and step-by-step guidance.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className='text-center my-24 animate-fade-up delay-200'>
        <h2 className='text-3xl font-bold text-white glow-text'>
          How <span className='text-indigo-400'>Career Path</span> Works
        </h2>
        <p className='text-lg text-slate-400 mt-4 max-w-2xl mx-auto'>
          A simple, transparent, and student-friendly process to get career clarity.
        </p>

        <div className='grid md:grid-cols-3 gap-10 mt-12 text-left'>
          <div className='glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all'>
            <h3 className='text-xl font-bold text-white mb-3'>1. Explore Mentors</h3>
            <p className='text-lg text-slate-400 leading-relaxed'>
              Browse mentors from top colleges across different fields and discover
              the ones aligned with your goals.
            </p>
          </div>

          <div className='glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all'>
            <h3 className='text-xl font-bold text-white mb-3'>2. Book a Session</h3>
            <p className='text-lg text-slate-400 leading-relaxed'>
              Schedule personalized mentorship sessions at your convenient time
              and get one-on-one guidance.
            </p>
          </div>

          <div className='glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all'>
            <h3 className='text-xl font-bold text-white mb-3'>3. Gain Clarity</h3>
            <p className='text-lg text-slate-400 leading-relaxed'>
              Understand career paths, college life, and opportunities so you can
              make confident and informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className='grid md:grid-cols-2 gap-12 my-24'>
        <div className='glass-card p-10 rounded-[2rem]'>
          <h3 className='text-2xl font-bold text-white mb-4'>Our Vision</h3>
          <p className='text-lg text-slate-400 leading-relaxed'>
            To empower students with a trusted mentorship ecosystem that bridges the gap
            between school and college life by providing verified connections, real
            experiences, and career clarity.
          </p>
        </div>

        <div className='glass-card p-10 rounded-[2rem]'>
          <h3 className='text-2xl font-bold text-white mb-4'>Our Mission</h3>
          <p className='text-lg text-slate-400 leading-relaxed'>
            To become the most reliable student guidance platform that supports personal
            growth, academic success, and confident career decision-making through
            community-driven mentorship.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='text-center my-24'>
        <h2 className='text-3xl font-bold text-white glow-text'>
          Why Students <span className='text-indigo-400'>Trust Us</span>
        </h2>

        <div className='grid md:grid-cols-3 gap-10 mt-12'>
          <div className='glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300'>
            <h3 className='text-xl font-bold mb-3 text-white'>Real Mentors</h3>
            <p className='text-lg text-slate-400 leading-relaxed'>
              Connect with students from top colleges who provide real, honest
              guidance based on their own journey.
            </p>
          </div>

          <div className='glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300'>
            <h3 className='text-xl font-bold mb-3 text-white'>Personalized Guidance</h3>
            <p className='text-lg text-slate-400 leading-relaxed'>
              Get one-on-one mentorship sessions tailored to your interests,
              goals, and academic background.
            </p>
          </div>

          <div className='glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-300'>
            <h3 className='text-xl font-bold mb-3 text-white'>Safe & Trusted Platform</h3>
            <p className='text-lg text-slate-400 leading-relaxed'>
              Verified mentor profiles and a secure environment ensure reliable
              and meaningful career conversations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='text-center glass-card relative overflow-hidden bg-gradient-to-tr from-indigo-900/60 to-slate-900/40 p-16 rounded-[3rem] mb-20 shadow-[0_0_40px_rgba(79,70,229,0.2)] animate-fade-up'>
        <div className='absolute inset-0 bg-indigo-500/10 pointer-events-none' />
        <h2 className='text-3xl font-bold text-white glow-text relative z-10'>
          Start Your Career Journey with Confidence
        </h2>
        <p className='mt-4 text-lg text-indigo-200 max-w-2xl mx-auto relative z-10'>
          Join Career Path today and get guidance from mentors who have already
          achieved what you aspire to become.
        </p>
      </section>

    </div>
  )
}

export default About