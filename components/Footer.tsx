import Link from 'next/link';
import { contactInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MMAF</h3>
            <p className="text-sm">
              Changing narratives, building bridges across Global Africa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-red-500">About Us</Link></li>
              <li><Link href="/pillars" className="hover:text-red-500">Our Pillars</Link></li>
              <li><Link href="/programs" className="hover:text-red-500">Programs</Link></li>
              <li><Link href="/impact" className="hover:text-red-500">Impact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-500">Annual Reports</Link></li>
              <li><Link href="#" className="hover:text-red-500">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-sm">{contactInfo.address}</p>
            <p className="text-sm mt-2">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-red-500">
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© 2025 Miss Maina Anoora Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

