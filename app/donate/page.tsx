'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Heart, Gift, ArrowRight, CheckCircle, Building2, Copy, Check } from 'lucide-react';
import StatsSection from '@/components/StatsSection';
import { contactInfo } from '@/lib/data';

const bankDetails = {
  bankName: 'Access Bank',
  accountName: 'Miss Maina Anoora Foundation',
  accountNumber: '1234567890',
  accountType: 'Current Account'
};

export default function DonatePage() {
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1675651151785-ae8d84eddbea?q=80&w=3156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Donate - African community"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20">
              <HeartHandshake className="w-5 h-5 text-white" />
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
                className="inline-flex items-center justify-center gap-2 bg-brand-black hover:bg-gray-900 text-white font-bold px-10 py-5 rounded-lg text-lg transition-all hover:scale-105"
              >
                <Heart className="w-6 h-6" /> Support Our Cause <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur px-10 py-5 rounded-lg text-lg"
              >
                Learn About Our Cause
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      {/* Payment Options Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Payment Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred payment method to make a donation
            </p>
          </motion.div>

          {/* Bank Transfer Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-brand-black flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-1">Direct Bank Transfer</h3>
                <p className="text-gray-600">Transfer directly to our bank account</p>
              </div>
            </div>
            
            <button
              onClick={() => setShowBankDetails(!showBankDetails)}
              className="w-full md:w-auto bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-lg border-2 border-gray-300 transition-all hover:border-brand-black flex items-center justify-center gap-2 mb-6"
            >
              {showBankDetails ? 'Hide' : 'Show'} Bank Details
              <ArrowRight className={`w-5 h-5 transition-transform ${showBankDetails ? 'rotate-90' : ''}`} />
            </button>

            {showBankDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white rounded-xl p-6 border-2 border-brand-black"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Bank Name</div>
                      <div className="text-lg font-bold text-gray-900">{bankDetails.bankName}</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankDetails.bankName)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-600" />}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Account Name</div>
                      <div className="text-lg font-bold text-gray-900">{bankDetails.accountName}</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankDetails.accountName)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-600" />}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Account Number</div>
                      <div className="text-lg font-bold text-gray-900 font-mono">{bankDetails.accountNumber}</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankDetails.accountNumber)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-600" />}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Account Type</div>
                      <div className="text-lg font-bold text-gray-900">{bankDetails.accountType}</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankDetails.accountType)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-600" />}
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> After making your transfer, please send proof of payment to{' '}
                    <a href={`mailto:${contactInfo.email}`} className="underline font-semibold">
                      {contactInfo.email}
                    </a>{' '}
                    to receive your receipt and impact report.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

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
                className="text-center p-8 bg-gray-50 rounded-2xl border-2 border-gray-200"
              >
                <div className="w-16 h-16 rounded-full bg-brand-black flex items-center justify-center mx-auto mb-4">
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
              src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Impact - African community"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
              <h3 className="text-3xl font-black mb-4">Your Donation in Action</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-black text-white mb-2">₦5,000</div>
                  <div className="text-white/90">Feeds a family for a week</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2">₦50,000</div>
                  <div className="text-white/90">Covers medical treatment for 2 patients</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2">₦500,000</div>
                  <div className="text-white/90">Sponsors a student for a year</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to learn more about donation options or to discuss a custom giving plan
            </p>
            <a
              href={`mailto:${contactInfo.email}?subject=Donation Inquiry`}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-black hover:bg-gray-100 font-bold px-10 py-5 rounded-lg text-lg transition-all hover:scale-105"
            >
              <HeartHandshake className="w-6 h-6" /> Get Started <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

