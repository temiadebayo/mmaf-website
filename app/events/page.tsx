'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: 'Launch Ceremony',
    date: '27th November, 2025',
    description: 'Join us as we officially launch our latest initiatives and celebrate the foundation\'s growth and impact.'
  },
  {
    title: '400 Women Enrollment',
    date: '2026',
    description: 'A milestone event celebrating the enrollment of 400 women in our comprehensive health and empowerment programs.'
  },
  {
    title: 'Anoora Club Annual Festival',
    date: '2026',
    description: 'Celebrate African culture, heritage, and storytelling at our annual Anoora Club Festival featuring performances, exhibitions, and community gatherings.'
  }
];

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1649298173603-9c95aa950879?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Events - African community"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Join us in celebrating community, culture, and transformation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-brand-black mb-3">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

