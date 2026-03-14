/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Dashboard from './Dashboard';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4" type="video/mp4" />
      </video>

      {/* Navbar Overlay */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-[16px] lg:px-[120px] w-full">
        {/* Logo */}
        <div className="flex items-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M1.04356 6.35771L13.6437 0.666504C14.8874 0.104764 16.3126 0.104764 17.5563 0.666504L30.1564 6.35771C31.2828 6.86653 32 8.00066 32 9.24155V22.7584C32 23.9993 31.2828 25.1335 30.1564 25.6423L17.5563 31.3335C16.3126 31.8952 14.8874 31.8952 13.6437 31.3335L1.04356 25.6423C-0.0827665 25.1335 -0.8 23.9993 -0.8 22.7584V9.24155C-0.8 8.00066 -0.0827665 6.86653 1.04356 6.35771Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Desktop Links - Centered */}
        <div className="hidden lg:flex items-center gap-8 font-manrope font-medium text-[14px] text-white absolute left-1/2 -translate-x-1/2">
          <a href="#" className="hover:opacity-80 transition-opacity">Home</a>
          <a href="#" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            Services <ChevronDown size={16} />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">Reviews</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Contact us</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-manrope font-semibold text-[14px] px-6 py-2.5 hover:bg-white/20 transition-colors">
            Sign In
          </button>
          <button className="bg-primary rounded-full text-[#fafafa] font-manrope font-semibold text-[14px] px-6 py-2.5 shadow-sm hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col p-6">
          <div className="flex justify-end">
            <button 
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 mt-12 font-manrope font-medium text-lg text-white">
            <a href="#" className="hover:opacity-80 transition-opacity">Home</a>
            <a href="#" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              Services <ChevronDown size={20} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">Reviews</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Contact us</a>
            <div className="flex flex-col gap-4 w-full mt-8">
              <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-manrope font-semibold text-[16px] px-4 py-3 w-full hover:bg-white/20 transition-colors">
                Sign In
              </button>
              <button className="bg-primary rounded-full text-[#fafafa] font-manrope font-semibold text-[16px] px-4 py-3 shadow-sm w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-16 lg:mt-24 px-4 w-full max-w-7xl mx-auto">

        {/* Headline */}
        <h1 className="font-instrument text-white text-5xl lg:text-[96px] leading-[1.1] max-w-4xl mb-6">
          Book your perfect stay instantly <span className="italic pr-2">and</span> hassle-free
        </h1>

        {/* Subtext */}
        <p className="font-inter font-normal text-[18px] text-white/70 max-w-[662px] mb-10">
          Discover handpicked hotels, resorts, and stays across your favorite destinations. Enjoy exclusive deals, fast booking, and 24/7 support.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button className="bg-primary hover:bg-primary/90 transition-colors rounded-full text-white font-cabin font-medium text-[16px] px-8 py-4 w-full sm:w-auto">
            Book a Free Demo
          </button>
          <button className="bg-dark-purple hover:bg-dark-purple/90 transition-colors rounded-full text-[#f6f7f9] font-cabin font-medium text-[16px] px-8 py-4 w-full sm:w-auto">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Dashboard Preview */}
      <Dashboard />
    </div>
  );
}
