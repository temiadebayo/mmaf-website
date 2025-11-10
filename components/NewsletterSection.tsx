'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-black mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on our programs, impact stories, and upcoming events.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 text-gray-900 bg-white border-2 border-gray-300 rounded-lg focus:border-brand-black focus:outline-none transition-colors text-lg"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-brand-black hover:bg-gray-900 text-white font-bold rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg whitespace-nowrap"
              >
                {subscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Subscribe
                  </>
                )}
              </button>
            </div>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 mt-4 font-semibold"
              >
                Thank you for subscribing! Check your email for confirmation.
              </motion.p>
            )}
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

