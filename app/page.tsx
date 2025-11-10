'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, HeartHandshake, Heart, Users, Play } from 'lucide-react';
import PillarCard from '@/components/PillarCard';
import TestimonialCard from '@/components/TestimonialCard';
import StatsSection from '@/components/StatsSection';
import ImpactCarousel from '@/components/ImpactCarousel';
import NewsletterSection from '@/components/NewsletterSection';
import TypewriterText from '@/components/TypewriterText';
import { pillarsData, testimonials } from '@/lib/data';

export default function Home() {
  return (
    <>
      {/* HERO - Cinematic NGO Storytelling */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src="/src/assets/images/hero-community.jpg"
          alt="Hero Community - Changing lives together - African community"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white min-h-[120px] md:min-h-[180px]">
              <TypewriterText
                texts={[
                  'Changing Narratives.',
                  'Building Bridges.',
                  'Transforming Lives.',
                  'Empowering Communities.'
                ]}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="block"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl"
            >
              <p>We advance health, education, food security, and culture across Global Africa—
              centering dignity, inclusion, and community power.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/donate" className="inline-flex items-center justify-center gap-2 bg-brand-black hover:bg-gray-900 text-white font-semibold px-7 py-4 rounded-lg">
                <Heart className="w-5 h-5" /> Donate Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur px-7 py-4 rounded-lg">
                <Play className="w-5 h-5" /> Learn Our Story
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating stats cards */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl">
            {[{label:'Lives Reached',value:'320K+'},{label:'Meals Served',value:'120K+'},{label:'Women Covered',value:'208+'},{label:'Patients Aided',value:'199+'},{label:'Invested',value:'₦175M+'},{label:'Vision',value:'2030'}].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i*0.06 }}
                className="rounded-xl bg-white/90 backdrop-blur shadow-sm p-4 text-center"
              >
                <div className="text-xl font-extrabold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-600">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Carousel Section */}
      <ImpactCarousel />

      {/* Image-first Pillars Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black">Four Pillars of Impact</h2>
            <p className="text-lg md:text-xl text-gray-600 mt-3">Integrated programs that transform lives with dignity</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pillarsData.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-2xl group"
              >
                <img
                  src={
                    pillar.id === 'lafiya'
                      ? 'https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740'
                      : pillar.id === 'ilimi'
                      ? 'https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1746'
                      : pillar.id === 'sadaqqah'
                      ? 'https://images.unsplash.com/photo-1591503049013-993ae5cf7e7c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335'
                      : 'https://images.unsplash.com/photo-1660675133902-acd1b057f75d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740'
                  }
                  alt={pillar.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                    <span className={`inline-block h-2 w-2 rounded-full ${
                      pillar.id === 'sadaqqah' ? 'bg-sadaqqah' :
                      pillar.id === 'lafiya' ? 'bg-lafiya' :
                      pillar.id === 'ilimi' ? 'bg-ilimi' :
                      'bg-gray-400'
                    }`} />
                    <span className="text-xs tracking-wide uppercase">{pillar.subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-white/85 max-w-2xl">{pillar.description}</p>
                  <Link 
                    href={`/pillars/${pillar.id}`} 
                    className={`mt-4 inline-flex items-center gap-2 ${
                      pillar.id === 'sadaqqah' ? 'text-orange-300 hover:text-orange-200' :
                      pillar.id === 'lafiya' ? 'text-green-300 hover:text-green-200' :
                      pillar.id === 'ilimi' ? 'text-blue-300 hover:text-blue-200' :
                      'text-gray-200 hover:text-white'
                    } font-semibold transition-colors`}
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black">Stories That Move Us</h2>
            <p className="text-lg text-gray-600 mt-3">Impact that you can see and feel</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1603998382124-c9835bf50409?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
          alt="Volunteer - African community"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">Your Hands. Their Hope.</h3>
              <p className="text-white/80 mt-4 text-lg">Join a growing movement of people building dignity-first solutions.
              Every hour, every gift, every share matters.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/donate" className="inline-flex items-center gap-2 bg-brand-black hover:bg-gray-900 text-white font-semibold px-7 py-4 rounded-lg">
                  <HeartHandshake className="w-5 h-5" /> Donate Now
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur px-7 py-4 rounded-lg">
                  <Users className="w-5 h-5" /> Volunteer
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1742"
                alt="Community work - African community"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact in Numbers - Moved before footer */}
      <StatsSection />

      {/* Newsletter Subscription */}
      <NewsletterSection />
    </>
  );
}

