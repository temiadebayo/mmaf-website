'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';
import { contactInfo } from '@/lib/data';

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: 'dark' | 'light';
}

export default function CTASection({ 
  title = "Ready to Get Started?",
  description = "Have questions or want to learn more? We're here to help you make a difference.",
  variant = 'dark'
}: CTASectionProps) {
  const bgClass = variant === 'dark' ? 'bg-brand-black' : 'bg-white';
  const textClass = variant === 'dark' ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const buttonPrimaryClass = variant === 'dark' 
    ? 'bg-white text-brand-black hover:bg-gray-100' 
    : 'bg-brand-black text-white hover:bg-gray-900';
  const buttonSecondaryClass = variant === 'dark'
    ? 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300';

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl md:text-5xl font-black ${textClass} mb-6`}>
            {title}
          </h2>
          <p className={`text-xl ${textSecondaryClass} mb-8 max-w-2xl mx-auto`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contactInfo.email}?subject=General Inquiry`}
              className={`inline-flex items-center justify-center gap-2 ${buttonPrimaryClass} font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105`}
            >
              <Mail className="w-5 h-5" />
              Make an Enquiry
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 ${buttonSecondaryClass} font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 backdrop-blur`}
            >
              <Info className="w-5 h-5" />
              Learn More about us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

