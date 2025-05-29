'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 动画变体
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export function Header() {
  // 移动端菜单状态
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white shadow-sm"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image 
                src="/mechanic.svg" 
                alt="Profixer Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Profixer</span>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-gray-700 hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/#process" className="text-gray-700 hover:text-orange-500 transition-colors">
              How It Works
            </Link>
            <Link href="/#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors">
              Testimonials
            </Link>
            <Link href="/#faq" className="text-gray-700 hover:text-orange-500 transition-colors">
              FAQ
            </Link>
            <Link 
              href="/#contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/#services" 
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/#process" 
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="/#testimonials" 
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="/#faq" 
                className="text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/#contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors inline-block w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}