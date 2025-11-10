'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { pillarsData } from '@/lib/data';
import * as Icons from 'lucide-react';

const getPillarStyles = (pillarId: string) => {
  switch (pillarId) {
    case 'sadaqqah':
      return {
        bgGradient: 'from-orange-50 to-orange-100',
        textGradient: 'from-sadaqqah to-orange-600',
        iconColor: 'text-sadaqqah',
        borderColor: 'border-sadaqqah',
        bgColor: 'bg-sadaqqah',
        heroImage: 'https://images.unsplash.com/photo-1639432047673-91ea142f9cf5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287'
      };
    case 'lafiya':
      return {
        bgGradient: 'from-green-50 to-green-100',
        textGradient: 'from-lafiya to-green-600',
        iconColor: 'text-lafiya',
        borderColor: 'border-lafiya',
        bgColor: 'bg-lafiya',
        heroImage: 'https://images.unsplash.com/photo-1666886573590-5815157da865?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740'
      };
    case 'ilimi':
      return {
        bgGradient: 'from-blue-50 to-blue-100',
        textGradient: 'from-ilimi to-blue-600',
        iconColor: 'text-ilimi',
        borderColor: 'border-ilimi',
        bgColor: 'bg-ilimi',
        heroImage: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740'
      };
    case 'anoora':
      return {
        bgGradient: 'from-gray-900 to-black',
        textGradient: 'from-gray-200 to-white',
        iconColor: 'text-white',
        borderColor: 'border-anoora',
        bgColor: 'bg-anoora',
        heroImage: 'https://images.unsplash.com/photo-1710116307402-31eae9bbfb62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1536' 
      };
    default:
      return {
        bgGradient: 'from-gray-50 to-gray-100',
        textGradient: 'from-brand-black to-gray-800',
        iconColor: 'text-brand-black',
        borderColor: 'border-brand-black',
        bgColor: 'bg-brand-black',
        heroImage: 'https://images.unsplash.com/photo-1710116307402-31eae9bbfb62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1536'
      };
  }
};

export default function PillarDetailPage({ params }: { params: { id: string } }) {
  const pillar = pillarsData.find((p) => p.id === params.id);

  if (!pillar) {
    notFound();
  }

  const IconComponent = (Icons as any)[pillar.icon] || Icons.Heart;
  const styles = getPillarStyles(pillar.id);
  const isAnoora = pillar.id === 'anoora';

  return (
    <>
      {/* Hero Section with Background */}
      <section className={`relative min-h-[70vh] flex items-center overflow-hidden ${isAnoora ? 'bg-black' : `bg-gradient-to-br ${styles.bgGradient}`}`}>
        <img
          src={styles.heroImage}
          alt={pillar.title}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className={`absolute inset-0 ${isAnoora ? 'bg-black/80' : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent'}`} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className={`p-6 rounded-full ${isAnoora ? 'bg-white/10' : 'bg-white/20'} backdrop-blur-sm`}>
                <IconComponent className={`w-24 h-24 ${styles.iconColor}`} />
              </div>
            </div>
            <h1 className={`text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r ${styles.textGradient} bg-clip-text text-transparent`}>
              {pillar.title}
            </h1>
            <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${isAnoora ? 'text-white' : 'text-gray-800'}`}>
              {pillar.subtitle}
            </h2>
            <p className={`text-xl md:text-2xl ${isAnoora ? 'text-gray-300' : 'text-gray-600'} italic`}>
              {pillar.meaning}
            </p>
            <p className={`mt-4 text-lg ${isAnoora ? 'text-gray-400' : 'text-gray-700'}`}>
              {pillar.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">{pillar.description}</p>
          
          <h3 className="text-3xl font-bold mb-6">Flagship Initiatives</h3>
          <ul className="space-y-4">
            {pillar.initiatives.map((initiative, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gray-50 p-4 rounded-lg border-l-4 ${styles.borderColor} hover:shadow-md transition-all`}
              >
                {initiative}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">Key Outputs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillar.outputs.map((output, index) => (
              <Link
                key={index}
                href="/impact"
                className={`bg-white p-6 rounded-xl border-l-4 ${styles.borderColor} hover:shadow-lg transition-all cursor-pointer group`}
              >
                <p className="font-semibold group-hover:scale-105 transition-transform">{output}</p>
                <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-700">Click to view impact report →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

