'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Users, DollarSign, TrendingUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { programs } from '@/lib/data';

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const programIndex = parseInt(params.slug.replace('program-', '')) - 1;
  const program = programs[programIndex];

  if (!program) {
    notFound();
  }

  const programImages = [
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img
          src={programImages[programIndex % programImages.length]}
          alt={program.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Programs
            </Link>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{program.title}</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">{program.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Beneficiaries</div>
                  <div className="text-2xl font-black text-gray-900">{program.beneficiaries}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-sadaqqah flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Investment</div>
                  <div className="text-2xl font-black text-gray-900">{program.investment}</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Impact</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{program.impact}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

