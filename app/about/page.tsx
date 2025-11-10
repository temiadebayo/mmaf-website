'use client';

import { motion } from 'framer-motion';
import { Calendar, Heart, Target, Users } from 'lucide-react';
import StatsSection from '@/components/StatsSection';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
          alt="Community"
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
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              About MMAF
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Advancing wellness, dignity, opportunity, and connection across Global Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-red-600 font-semibold mb-4">
                <Calendar className="w-5 h-5" />
                <span>Established October 13, 2021</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">Our Journey</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  The Miss Maina Foundation (MMF) was born from a vision to enhance the health, 
                  well-being, and dignity of vulnerable Nigerians. What started as a mission to 
                  provide healthcare has evolved into a comprehensive movement touching every 
                  aspect of human dignity.
                </p>
                <p>
                  Over four transformative years, we've reached <strong className="text-red-600">320,625 lives</strong> 
                  and invested <strong className="text-red-600">₦175,751,904</strong> across programs that create 
                  lasting change—not just aid, but empowerment.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/src/assets/images/about-1.jpg"
                alt="Community impact"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600">Core values that guide every decision</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Dignity First', desc: 'Every person deserves respect, agency, and opportunity.' },
              { icon: Target, title: 'Sustainable Impact', desc: 'We build systems, not just solutions—change that lasts.' },
              { icon: Users, title: 'Community Power', desc: 'Communities know their needs best. We listen and amplify.' }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
    </>
  );
}

