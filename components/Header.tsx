'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Heart, Users, BookOpen, Utensils, Lightbulb, FileText, Calendar, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { pillarsData } from '@/lib/data';
import * as Icons from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const getPillarIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName] || Icons.Heart;
  return IconComponent;
};

const getPillarColor = (pillarId: string) => {
  switch (pillarId) {
    case 'sadaqqah':
      return '#f05c25';
    case 'lafiya':
      return '#46a948';
    case 'ilimi':
      return '#2b79bd';
    case 'anoora':
      return '#000000';
    default:
      return '#000000';
  }
};

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About',
      dropdown: [
        { label: 'Our Story', href: '/about', description: 'Learn about our journey', icon: FileText },
        { label: 'Mission & Vision', href: '/about#mission', description: 'Our core values', icon: Heart },
        { label: 'Impact Stats', href: '/about#stats', description: 'See our impact', icon: Users },
      ]
    },
    {
      label: 'Pillars',
      dropdown: pillarsData.map(pillar => ({
        label: pillar.title,
        href: `/pillars/${pillar.id}`,
        description: pillar.subtitle,
        icon: getPillarIcon(pillar.icon),
        color: getPillarColor(pillar.id)
      }))
    },
    {
      label: 'Programs',
      dropdown: [
        { label: 'All Programs', href: '/programs', description: 'View all programs', icon: FileText },
        { label: 'Sadaqqah Program', href: '/programs/program-1', description: 'Feeding with dignity', icon: Utensils },
        { label: 'Hospital Intervention', href: '/programs/program-2', description: 'Medical aid programs', icon: Heart },
        { label: 'Education Programs', href: '/programs/program-6', description: 'Scholarships & learning', icon: BookOpen },
        { label: 'Women\'s Health', href: '/programs/program-6', description: 'Health initiatives', icon: Users },
      ]
    },
    {
      label: 'Impact',
      dropdown: [
        { label: 'Overview', href: '/impact', description: 'See our overall impact', icon: FileText },
        { label: 'Health & Wellness Report', href: '/impact/health-wellness-2024', description: 'Medical interventions', icon: Heart },
        { label: 'Education Report', href: '/impact/education-empowerment-2024', description: 'Educational programs', icon: BookOpen },
        { label: 'Food Security Report', href: '/impact/food-security-2024', description: 'Nutrition programs', icon: Utensils },
        { label: 'Community Building', href: '/impact/community-building-2024', description: 'Community initiatives', icon: Users },
      ]
    },
    {
      label: 'Events',
      dropdown: [
        { label: 'All Events', href: '/events', description: 'View all events', icon: Calendar },
        { label: 'Launch Ceremony', href: '/events', description: '27th November, 2025', icon: Calendar },
        { label: '400 Women Enrollment', href: '/events', description: '2026', icon: Users },
        { label: 'Anoora Club Festival', href: '/events', description: '2026', icon: Lightbulb },
      ]
    },
    {
      label: 'Resources',
      dropdown: [
        { label: 'Annual Reports', href: '#', description: 'Download our reports', icon: FileText },
        { label: 'Blog', href: '#', description: 'Latest news & updates', icon: FileText },
        { label: 'Media Kit', href: '#', description: 'Press resources', icon: FileText },
      ]
    },
    {
      label: 'Contact',
      dropdown: [
        { label: 'Get in Touch', href: '/contact', description: 'Send us a message', icon: Mail },
        { label: 'Email Us', href: 'mailto:hereforyou@missmfoundation.com', description: 'hereforyou@missmfoundation.com', icon: Mail },
        { label: 'Call Us', href: 'tel:+2349087297330', description: '+234 908 729 7330', icon: Phone },
        { label: 'Visit Us', href: '/contact', description: 'Abuja, Nigeria', icon: MapPin },
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setShowMegaMenu(false);
      }
    };

    if (showMegaMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMegaMenu]);

  // Check if a nav item is active based on current pathname
  const isNavItemActive = (item: NavItem) => {
    if (!item.href) {
      // For items with dropdowns, check if any dropdown item matches the current path
      if (item.dropdown) {
        return item.dropdown.some(dropdownItem => {
          if (pathname === '/') return false;
          // Handle exact matches and path prefixes
          if (dropdownItem.href === '#' || dropdownItem.href.startsWith('mailto:') || dropdownItem.href.startsWith('tel:')) {
            return false;
          }
          // Check if pathname matches dropdown href exactly or starts with it
          if (pathname === dropdownItem.href) return true;
          // For paths like /about, /pillars, /programs, etc., check if pathname starts with the base path
          const basePath = dropdownItem.href.split('/').slice(0, 2).join('/'); // Get base path like /about, /pillars
          if (basePath && pathname.startsWith(basePath)) return true;
          return false;
        });
      }
      return false;
    }
    if (item.href === '/') {
      return pathname === '/';
    }
    return pathname === item.href || pathname.startsWith(item.href + '/');
  };

  const itemsWithDropdowns = navItems.filter(item => item.dropdown && item.dropdown.length > 0);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-sm shadow-md'
        }`}
        ref={navRef}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="flex items-center justify-between h-24"
            onMouseEnter={() => itemsWithDropdowns.length > 0 && setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group z-50 pr-8"
              onMouseEnter={() => setShowMegaMenu(false)}
            >
              <img 
                src="src/assets/images/logo.png" 
                alt="MMAF" 
                className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = isNavItemActive(item);
                return item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-4 py-2 font-medium text-base transition-colors relative ${
                      isActive 
                        ? 'text-brand-black font-semibold' 
                        : 'text-gray-700 hover:text-brand-black'
                    }`}
                    onMouseEnter={() => item.dropdown && setShowMegaMenu(true)}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-black"></span>
                    )}
                  </Link>
                ) : (
                  <div
                    key={item.label}
                    className={`px-4 py-2 font-medium text-base transition-colors cursor-pointer relative ${
                      isActive 
                        ? 'text-brand-black font-semibold' 
                        : 'text-gray-700 hover:text-brand-black'
                    }`}
                    onMouseEnter={() => item.dropdown && setShowMegaMenu(true)}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-black"></span>
                    )}
                  </div>
                );
              })}

              {/* Donate Button */}
              <Link
                href="/donate"
                className="ml-6 flex items-center space-x-2 bg-brand-black hover:bg-gray-900 text-brand-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onMouseEnter={() => setShowMegaMenu(false)}
              >
                <Heart className="w-5 h-5" />
                <span>Donate</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-brand-black transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = isNavItemActive(item);
                  return (
                    <Link
                      key={item.label}
                      href={item.href || '#'}
                      className={`block px-6 py-3 font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-black/10 text-brand-black font-semibold border-l-4 border-brand-black'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-brand-black'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/donate"
                  className="block mx-4 mt-4 bg-brand-black hover:bg-gray-900 text-brand-white font-semibold px-6 py-3 rounded-lg text-center shadow-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>Donate</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Mega Menu - Shows all dropdowns at once, positioned absolutely */}
      <AnimatePresence>
        {showMegaMenu && itemsWithDropdowns.length > 0 && (
          <motion.div
            ref={megaMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-0 w-full bg-white border-t border-gray-200 shadow-2xl z-40"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowMegaMenu(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-brand-black hover:bg-gray-100 rounded-full transition-all"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {itemsWithDropdowns.map((item) => (
                  <div key={item.label} className="space-y-4">
                    <h3 className="text-lg font-bold text-brand-black mb-5 pb-3 border-b-2 border-brand-black uppercase tracking-wide">
                      {item.label}
                    </h3>
                    <div className="space-y-4">
                      {item.dropdown?.map((dropdownItem, index) => {
                        const IconComponent = dropdownItem.icon || ArrowRight;
                        return (
                          <Link
                            key={index}
                            href={dropdownItem.href}
                            className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-all"
                            onClick={() => setShowMegaMenu(false)}
                          >
                            <div 
                              className="mt-0.5 p-2.5 rounded-lg flex-shrink-0"
                              style={{
                                backgroundColor: dropdownItem.color ? `${dropdownItem.color}15` : '#f3f4f6',
                              }}
                            >
                              <IconComponent 
                                className="w-5 h-5" 
                                style={{ color: dropdownItem.color || '#000000' }} 
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div 
                                className="font-semibold text-base text-gray-900 group-hover:text-brand-black transition-colors mb-1.5"
                                style={{
                                  color: dropdownItem.color || undefined
                                }}
                              >
                                {dropdownItem.label}
                              </div>
                              {dropdownItem.description && (
                                <div className="text-sm text-gray-500 leading-relaxed">
                                  {dropdownItem.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

