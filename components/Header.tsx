'use client';

import { Bell, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="https://cdn.10minuteschool.com/images/logo_10ms_2023.png" 
              alt="10 Minute School" 
              className="h-8"
            />
          </div>
          
          {/* Special Offer Banner */}
          <div className="hidden md:flex items-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
            <Bell className="w-4 h-4 mr-2" />
            <span className="font-bangla">৫০% ছাড়! সীমিত সময়ের অফার</span>
          </div>
          
          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}