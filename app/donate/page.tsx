'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, Heart, Gift, ArrowRight, CheckCircle } from 'lucide-react';
import StatsSection from '@/components/StatsSection';
import { contactInfo } from '@/lib/data';

export default function DonatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604881987922-99456b0e8b5a?q=80&w=1974&auto=format&fit=crop"
          alt="Donate"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20">
              <HeartHandshake className="w-5 h-5 text-red-400" />
              <span className="text-white font-semibold">Make a Difference</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
              Your Generosity<br />Transforms Lives
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
              Every contribution creates lasting change. Join us in building dignity, hope, and opportunity across Global Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Donation Inquiry`}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-5 rounded-lg text-lg transition-all hover:scale-105"
              >
                <Heart className="w-6 h-6" /> Donate Now <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur px-10 py-5 rounded-lg text-lg"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      {/* Why Donate Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Your Support Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2021, we've reached over 320,000 lives through comprehensive, dignity-first programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: HeartHandshake, title: 'Direct Impact', desc: '100% of donations go directly to programs that transform lives' },
              { icon: Gift, title: 'Transparent Giving', desc: 'Full accountability and regular impact reports on every contribution' },
              { icon: CheckCircle, title: 'Sustainable Change', desc: 'We build systems, not just solutions—change that lasts generations' }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Impact Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
              alt="Impact"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
              <h3 className="text-3xl font-black mb-4">Your Donation in Action</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-black text-red-400 mb-2">₦5,000</div>
                  <div className="text-white/90">Feeds a family for a week</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-red-400 mb-2">₦50,000</div>
                  <div className="text-white/90">Covers medical treatment for 2 patients</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-red-400 mb-2">₦500,000</div>
                  <div className="text-white/90">Sponsors a student for a year</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-red-100 mb-8">
              Contact us to learn more about donation options or to discuss a custom giving plan
            </p>
            <a
              href={`mailto:${contactInfo.email}?subject=Donation Inquiry`}
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-gray-100 font-bold px-10 py-5 rounded-lg text-lg transition-all hover:scale-105"
            >
              <HandHeart className="w-6 h-6" /> Get Started <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

