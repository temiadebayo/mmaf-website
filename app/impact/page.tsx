'use client';

import { motion } from 'framer-motion';
import { Heart, TrendingUp, Award } from 'lucide-react';
import StatsSection from '@/components/StatsSection';
import { programs } from '@/lib/data';

export default function ImpactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1974&auto=format&fit=crop"
          alt="Impact"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              320,625 Lives Touched. One Mission of Dignity and Hope.
            </p>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      {/* Impact Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Behind Every Number is a Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since inception, the Miss Maina Foundation has transformed lives through dignity-first programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Heart, title: 'Lives Transformed', value: '320,625+', desc: 'People reached across all programs' },
              { icon: TrendingUp, title: 'Investment', value: '₦175M+', desc: 'Committed to sustainable change' },
              { icon: Award, title: 'Programs Active', value: '7+', desc: 'Comprehensive initiatives running' }
            ].map((stat, idx) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-xl font-bold text-gray-800 mb-2">{stat.title}</div>
                <div className="text-gray-600">{stat.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Impact Gallery */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2069&auto=format&fit=crop', title: 'Health & Wellness', desc: 'Medical interventions and health programs' },
              { img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1974&auto=format&fit=crop', title: 'Education & Empowerment', desc: 'Scholarships and learning opportunities' },
              { img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1974&auto=format&fit=crop', title: 'Food Security', desc: 'Meals served with dignity' },
              { img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop', title: 'Community Building', desc: 'Strengthening communities together' }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl group h-64"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

