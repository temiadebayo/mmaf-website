'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ProgramCard from '@/components/ProgramCard';
import StatsSection from '@/components/StatsSection';
import { programs } from '@/lib/data';

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
          alt="Programs"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">Transformative Programs</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Comprehensive initiatives that create lasting change across health, education, food security, and culture
            </p>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Program Portfolio</h2>
            <p className="text-xl text-gray-600">Each program is designed for maximum impact and sustainable change</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

