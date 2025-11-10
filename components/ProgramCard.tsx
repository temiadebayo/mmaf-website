'use client';

import { motion } from 'framer-motion';
import { Users, DollarSign, TrendingUp } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  beneficiaries: string;
  investment: string;
  impact: string;
  imageUrl?: string;
}

const programImages = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop'
];

export default function ProgramCard({ title, description, beneficiaries, investment, impact, imageUrl }: ProgramCardProps) {
  const img = imageUrl || programImages[Math.floor(Math.random() * programImages.length)];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
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
          <p className="text-red-200 font-semibold text-sm">{description}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
            <Users className="w-5 h-5 text-red-600" />
            <div>
              <div className="text-xs text-gray-600">Beneficiaries</div>
              <div className="font-bold text-gray-900">{beneficiaries}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
            <DollarSign className="w-5 h-5 text-orange-600" />
            <div>
              <div className="text-xs text-gray-600">Investment</div>
              <div className="font-bold text-gray-900">{investment}</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
          <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-700">{impact}</p>
        </div>
      </div>
    </motion.div>
  );
}

