'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  beneficiaries: string;
  investment: string;
  impact: string;
  imageUrl?: string;
  programId?: string;
}

const programImages = [
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop'
];

export default function ProgramCard({ title, description, beneficiaries, investment, impact, imageUrl, programId }: ProgramCardProps) {
  const img = imageUrl || programImages[Math.floor(Math.random() * programImages.length)];
  const slug = programId || title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  return (
    <Link href={`/programs/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-black text-white mb-1">{title}</h3>
            <p className="text-white/90 font-semibold text-sm">{description}</p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <Users className="w-5 h-5 text-brand-black" />
              <div>
                <div className="text-xs text-gray-600">Beneficiaries</div>
                <div className="font-bold text-gray-900">{beneficiaries}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
              <DollarSign className="w-5 h-5 text-sadaqqah" />
              <div>
                <div className="text-xs text-gray-600">Investment</div>
                <div className="font-bold text-gray-900">{investment}</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg mb-4">
            <TrendingUp className="w-5 h-5 text-lafiya mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">{impact}</p>
          </div>
          
          <div className="flex items-center gap-2 text-brand-black font-semibold group-hover:text-gray-700 transition-colors">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

