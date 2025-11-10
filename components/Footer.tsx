import Link from 'next/link';
import { contactInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="src/assets/images/logo_2.png" alt="MMAF" className="w-40 h-10 object-contain mb-6" />
            <br />
            <p className="text-sm">
              Changing Narratives. Building Bridges.
            </p>
            <p className="text-sm mt-4">
              We advance health, education, food security, and culture across Global Africa—
              centering dignity, inclusion, and community power.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-300 mb-6">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-red-500">About Us</Link></li>
              <li><Link href="/pillars" className="hover:text-orange-500">Our Pillars</Link></li>
              <li><Link href="/programs" className="hover:text-orange-500">Programs</Link></li>
              <li><Link href="/impact" className="hover:text-orange-500">Impact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-300 mb-6">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-orange-500">Annual Reports</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-300 mb-6">Contact</h4>
            <p className="text-sm">{contactInfo.address}</p>
            <p className="text-sm mt-2">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-orange-500">
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

