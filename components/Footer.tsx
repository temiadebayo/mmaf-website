import Link from 'next/link';
import { contactInfo } from '@/lib/data';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="src/assets/images/logo_2.png" alt="MMAF" className="w-48 h-12 object-contain mb-6 brightness-0 invert" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Changing Narratives. Building Bridges.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We advance health, education, food security, and culture across Global Africa—
              centering dignity, inclusion, and community power.
            </p>
            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pillars" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Pillars
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 uppercase tracking-wide">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Media Kit
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 uppercase tracking-wide">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">{contactInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
            
            {/* CAC Number */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-xs">
                {contactInfo.cacNumber}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Miss Maina Anoora Foundation. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
