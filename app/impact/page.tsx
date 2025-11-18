'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, TrendingUp, Award, ArrowRight } from 'lucide-react';
import StatsSection from '@/components/StatsSection';
import { programs } from '@/lib/data';

export default function ImpactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1603998382124-c9835bf50409?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
          alt="Impact - African community"
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
                className="text-center p-8 bg-gray-50 rounded-2xl border-2 border-gray-200"
              >
                <div className="w-16 h-16 rounded-full bg-brand-black flex items-center justify-center mx-auto mb-4">
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
              { 
                img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
                title: 'Health & Wellness Report', 
                desc: 'Medical interventions and health programs',
                reportId: 'health-wellness-2024',
                color: 'lafiya'
              },
              { 
                img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
                title: 'Education & Empowerment Report', 
                desc: 'Scholarships and learning opportunities',
                reportId: 'education-empowerment-2024',
                color: 'ilimi'
              },
              { 
                img: 'https://images.unsplash.com/photo-1458917524587-d3236cc8c2c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
                title: 'Food Security Report', 
                desc: 'Meals served with dignity',
                reportId: 'food-security-2024',
                color: 'sadaqqah'
              },
              { 
                img: '/src/assets/images/community_building.jpg', 
                title: 'Community Building Report', 
                desc: 'Strengthening communities together',
                reportId: 'community-building-2024',
                color: 'anoora'
              }
            ].map((item, idx) => {
              const colorClass = item.color === 'sadaqqah' ? 'text-sadaqqah' : 
                                 item.color === 'lafiya' ? 'text-lafiya' : 
                                 item.color === 'ilimi' ? 'text-ilimi' : 'text-brand-black';
              return (
                <Link key={item.title} href={`/impact/${item.reportId}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative overflow-hidden rounded-2xl group h-64 cursor-pointer"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-black mb-2 group-hover:underline">{item.title}</h3>
                      <p className="text-white/90 mb-2">{item.desc}</p>
                      <p className={`${colorClass} text-sm font-semibold flex items-center gap-2`}>
                        View Full Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

