'use client';

import { motion } from 'framer-motion';
import { impactStats } from '@/lib/data';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const icons = [Users, DollarSign, Target];

export default function StatsSection() {
  return (
    <div className="relative bg-brand-black py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Impact in Numbers</h2>
          <p className="text-gray-300 text-lg">Real change. Measurable results.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => {
            const Icon = icons[index] || TrendingUp;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-white/20 p-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-xl text-gray-300 font-semibold">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

