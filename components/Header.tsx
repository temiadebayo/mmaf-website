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
      href: '/about',
      dropdown: [
        { label: 'Our Story', href: '/about', description: 'Learn about our journey', icon: FileText },
        { label: 'Mission & Vision', href: '/about#mission', description: 'Our core values', icon: Heart },
        { label: 'Impact Stats', href: '/about#stats', description: 'See our impact', icon: Users },
      ]
    },
    {
      label: 'Pillars',
      href: '/pillars',
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
      href: '/programs',
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
      href: '/impact',
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
      href: '/events',
      dropdown: [
        { label: 'All Events', href: '/events', description: 'View all events', icon: Calendar },
        { label: 'Launch Ceremony', href: '/events', description: '27th November, 2025', icon: Calendar },
        { label: '400 Women Enrollment', href: '/events', description: '2026', icon: Users },
        { label: 'Anoora Club Festival', href: '/events', description: '2026', icon: Lightbulb },
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      dropdown: [
        { label: 'Annual Reports', href: '#', description: 'Download our reports', icon: FileText },
        { label: 'Blog', href: '#', description: 'Latest news & updates', icon: FileText },
        { label: 'Media Kit', href: '#', description: 'Press resources', icon: FileText },
      ]
    },
    {
      label: 'Contact',
      href: '/contact',
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
        <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div 
            className="flex items-center justify-between h-20 md:h-24 lg:h-28"
            onMouseEnter={() => itemsWithDropdowns.length > 0 && setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group z-50 flex-shrink-0 pr-6 lg:pr-8"
              onMouseEnter={() => setShowMegaMenu(false)}
            >
              <img 
                src="src/assets/images/logo.png" 
                alt="MMAF" 
                className="h-20 md:h-24 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </Link>

            {/* Desktop Navigation - Scrollable on medium screens */}
            <div className="hidden md:flex items-center flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex items-center space-x-1 lg:space-x-1.5 min-w-max">
                {navItems.map((item) => {
                  const isActive = isNavItemActive(item);
                  return (
                    <Link
                      key={item.label}
                      href={item.href || '#'}
                      className={`px-2 lg:px-2.5 py-2 font-medium text-sm lg:text-base transition-all relative whitespace-nowrap rounded-md ${
                        isActive 
                          ? 'text-brand-black font-bold bg-brand-black/5' 
                          : 'text-gray-700 hover:text-brand-black hover:bg-gray-100'
                      }`}
                      onMouseEnter={() => item.dropdown && setShowMegaMenu(true)}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-brand-black rounded-full"></span>
                      )}
                    </Link>
                  );
                })}

                {/* Donate Button */}
                <Link
                  href="/donate"
                  className="ml-2 lg:ml-2.5 flex items-center space-x-2 bg-brand-black hover:bg-gray-900 text-brand-white font-semibold px-4 lg:px-5 py-2.5 lg:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
                  onMouseEnter={() => setShowMegaMenu(false)}
                >
                  <Heart className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="text-sm lg:text-base">Donate</span>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-brand-black transition-colors flex-shrink-0 ml-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
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
              className="md:hidden overflow-hidden border-t border-gray-200 max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = isNavItemActive(item);
                  return (
                    <Link
                      key={item.label}
                      href={item.href || '#'}
                      className={`block px-6 py-3 font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-black text-brand-white font-bold border-l-4 border-brand-black shadow-sm'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-brand-black'
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
            className="fixed top-20 md:top-24 lg:top-28 left-0 w-full bg-white border-t border-gray-200 shadow-2xl z-40 max-h-[calc(100vh-5rem)] md:max-h-[calc(100vh-6rem)] lg:max-h-[calc(100vh-7rem)] overflow-y-auto"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowMegaMenu(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-brand-black hover:bg-gray-100 rounded-full transition-all z-50"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
                {itemsWithDropdowns.map((item) => (
                  <div key={item.label} className="space-y-3 md:space-y-4">
                    <h3 className="text-base md:text-lg font-bold text-brand-black mb-3 md:mb-5 pb-2 md:pb-3 border-b-2 border-brand-black uppercase tracking-wide">
                      {item.label}
                    </h3>
                    <div className="space-y-3 md:space-y-4">
                      {item.dropdown?.map((dropdownItem, index) => {
                        const IconComponent = dropdownItem.icon || ArrowRight;
                        return (
                          <Link
                            key={index}
                            href={dropdownItem.href}
                            className="group flex items-start space-x-3 md:space-x-4 p-2 md:p-3 rounded-lg hover:bg-gray-50 transition-all"
                            onClick={() => setShowMegaMenu(false)}
                          >
                            <div 
                              className="mt-0.5 p-2 md:p-2.5 rounded-lg flex-shrink-0"
                              style={{
                                backgroundColor: dropdownItem.color ? `${dropdownItem.color}15` : '#f3f4f6',
                              }}
                            >
                              <IconComponent 
                                className="w-4 h-4 md:w-5 md:h-5" 
                                style={{ color: dropdownItem.color || '#000000' }} 
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div 
                                className="font-semibold text-sm md:text-base text-gray-900 group-hover:text-brand-black transition-colors mb-1 md:mb-1.5"
                                style={{
                                  color: dropdownItem.color || undefined
                                }}
                              >
                                {dropdownItem.label}
                              </div>
                              {dropdownItem.description && (
                                <div className="text-xs md:text-sm text-gray-500 leading-relaxed">
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

