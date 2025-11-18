'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, TrendingUp, Users, Calendar } from 'lucide-react';
import Link from 'next/link';

const reports: Record<string, {
  title: string;
  description: string;
  year: string;
  image: string;
  keyMetrics: Array<{ label: string; value: string }>;
  highlights: string[];
  fullReport: string;
}> = {
  'health-wellness-2024': {
    title: 'Health & Wellness Impact Report 2024',
    description: 'Comprehensive report on our health interventions, medical programs, and community wellness initiatives.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keyMetrics: [
      { label: 'Patients Treated', value: '199+' },
      { label: 'Women Enrolled', value: '200' },
      { label: 'Medical Camps', value: '12' },
      { label: 'Investment', value: '₦21M+' }
    ],
    highlights: [
      'Hospital Intervention Program expanded to 10 facilities',
      '200 women enrolled in Empowering Women\'s Health Initiative',
      '515 patients received prescription medication support',
      'Community health sensitization programs reached 5,000+ people'
    ],
    fullReport: 'Our health and wellness programs have made significant strides in improving healthcare access across communities. Through strategic partnerships with healthcare facilities, we have provided critical medical interventions, prescription medications, and health insurance coverage to those in need.'
  },
  'education-empowerment-2024': {
    title: 'Education & Empowerment Impact Report 2024',
    description: 'Detailed report on our educational programs, scholarships, and empowerment initiatives.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keyMetrics: [
      { label: 'Scholarships Awarded', value: '150+' },
      { label: 'Students Supported', value: '150+' },
      { label: 'Digital Labs', value: '10' },
      { label: 'Investment', value: '₦9.8M+' }
    ],
    highlights: [
      '150 new scholarships awarded through Ilimi Scholars Program',
      '10 digital literacy labs established in underserved communities',
      '300 teachers trained in modern teaching methodologies',
      '30 school clubs supported with resources and mentorship'
    ],
    fullReport: 'Education remains a cornerstone of our empowerment efforts. Through comprehensive scholarship programs, digital literacy initiatives, and teacher training, we are building a foundation for lasting educational transformation.'
  },
  'food-security-2024': {
    title: 'Food Security Impact Report 2024',
    description: 'Comprehensive report on our food security programs, feeding initiatives, and community nutrition efforts.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1458917524587-d3236cc8c2c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    keyMetrics: [
      { label: 'Meals Served', value: '120,000+' },
      { label: 'Community Gardens', value: '20' },
      { label: 'Families Reached', value: '15,000+' },
      { label: 'Investment', value: '₦32M+' }
    ],
    highlights: [
      '120,000 meals delivered annually through Compassion in Action Feeding',
      '20 community gardens established for sustainable food production',
      '2 Youth Agro Exchanges held to promote agricultural knowledge',
      '6 nutrition campaigns implemented across communities'
    ],
    fullReport: 'Our food security programs go beyond feeding to build sustainable food systems. Through community gardens, nutrition education, and youth agricultural programs, we are creating lasting solutions to food insecurity.'
  },
  'community-building-2024': {
    title: 'Community Building Impact Report 2024',
    description: 'Detailed report on our community development initiatives, cultural programs, and social cohesion efforts.',
    year: '2024',
    image: '/src/assets/images/community_building.jpg',
    keyMetrics: [
      { label: 'Communities Reached', value: '50+' },
      { label: 'Cultural Events', value: '15+' },
      { label: 'Participants', value: '10,000+' },
      { label: 'Investment', value: '₦15M+' }
    ],
    highlights: [
      'Anoora Club Annual Festival celebrated African culture and heritage',
      '10 StoryCraft Fellows supported in creative storytelling',
      '20 creatives enrolled in Creative Economy Incubator',
      '2 cultural exchange delegations facilitated'
    ],
    fullReport: 'Community building lies at the heart of our work. Through cultural programs, storytelling initiatives, and creative economy support, we are strengthening social bonds and preserving heritage for future generations.'
  }
};

export default function ImpactReportPage({ params }: { params: { reportId: string } }) {
  const report = reports[params.reportId];

  if (!report) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img
          src={report.image}
          alt={report.title}
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
              href="/impact"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Impact
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-white" />
              <span className="text-white font-semibold">{report.year} Report</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{report.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{report.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {report.keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl text-center border-2 border-gray-200"
              >
                <div className="text-4xl font-black text-brand-black mb-2">{metric.value}</div>
                <div className="text-gray-700 font-semibold">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-black text-gray-900 mb-6">Key Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {report.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-black"
                >
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Full Report */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-black text-gray-900 mb-4">Full Report</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{report.fullReport}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

