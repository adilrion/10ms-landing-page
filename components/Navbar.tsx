'use client';

import { Bell, ChevronDown, Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'কোর্স',
      labelEn: 'Courses',
      href: '/courses',
      hasDropdown: true,
      dropdownItems: [
        { label: 'IELTS Course', href: '/courses/ielts' },
        { label: 'ইংরেজি কোর্স', href: '/courses/english' },
        { label: 'প্রোগ্রামিং', href: '/courses/programming' },
        { label: 'ডিজাইন', href: '/courses/design' }
      ]
    },
    {
      label: 'দক্ষতা',
      labelEn: 'Skills',
      href: '/skills',
      hasDropdown: true,
      dropdownItems: [
        { label: 'ভাষা শিক্ষা', href: '/skills/language' },
        { label: 'প্রযুক্তি', href: '/skills/technology' },
        { label: 'ব্যবসা', href: '/skills/business' }
      ]
    },
    {
      label: 'চাকরি',
      labelEn: 'Jobs',
      href: '/jobs'
    },
    {
      label: 'পরীক্ষা',
      labelEn: 'Exams',
      href: '/exams'
    },
    {
      label: 'সার্টিফিকেট',
      labelEn: 'Certificates',
      href: '/certificates'
    }
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className={` top-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
      : 'bg-white'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="10 Minute School"
                width={56}
                height={56}
                className="w-12 h-12 lg:w-[100px] lg:h-14 object-contain"
                priority
              />
            </div>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 group"
                  >
                    <span className="font-bangla">{item.label}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium font-bangla transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transform transition-all duration-200 ${activeDropdown === item.label
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                    }`}>
                    {item.dropdownItems?.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-bangla transition-colors duration-200"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-gray-600 hover:text-blue-600 hover:bg-blue-50 relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
                2
              </span>
            </Button>

            {/* Login/Profile */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
            >
              <User className="w-4 h-4" />
              <span className="font-bangla">লগইন</span>
            </Button>

            {/* CTA Button */}
            <Button
              size="sm"
              className="hidden sm:flex bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse-glow"
            >
              <span className="font-bangla">ফ্রি ট্রায়াল</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="py-4 space-y-2 border-t border-gray-100">
            {/* Search Bar for Mobile */}
            <div className="px-3 py-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="কোর্স খুঁজুন..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bangla"
                />
              </div>
            </div>

            {navItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-bangla transition-colors duration-200"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="bg-gray-50 py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-6 py-2 text-gray-600 hover:text-blue-600 font-bangla transition-colors duration-200"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-bangla transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="px-3 py-4 space-y-3 border-t border-gray-100">
              <Button
                variant="outline"
                className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                <User className="w-4 h-4 mr-2" />
                <span className="font-bangla">লগইন</span>
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold"
              >
                <span className="font-bangla">ফ্রি ট্রায়াল শুরু করুন</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
