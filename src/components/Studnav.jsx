import { Bars3Icon, EnvelopeIcon, MapPinIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from "react";

export function Studnav() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#F7C301] text-black py-5">
        <div className="container mx-auto flex justify-between items-center px-6 text-sm">
          <div className="flex items-center space-x-4">
            <MapPinIcon className="h-5 w-5" />
            <span>7VVJ+QFR, Natalio B. Bacalso Ave, Cebu City, 6000 Cebu</span>
          </div>
          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-5 w-5" />
            <span>(032) 261 7741</span>
            <EnvelopeIcon className="h-5 w-5" />
            <span>hi@happydental.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-5 py-7">
          <div className="flex justify-between items-center">
            {/* Brand logo */}
            <a href="/home" className="flex items-center text-xl font-bold text-black">
              HAPPY <span className="text-gray-800">DENTAL</span>
            </a>
            
            {/* Navigation links */}
            <nav className="hidden lg:flex space-x-8">
              <a href="/home" className="text-gray-700 hover:text-black">Home</a>
              <a href="/aboutus" className="text-gray-700 hover:text-black">About Us</a>
              <a href="/services" className="text-gray-700 hover:text-black">Services</a>
              <a href="/student-calendar" className="text-gray-700 hover:text-black">Book now</a>
              <a href="/contact" className="text-gray-700 hover:text-black">Contact Us</a>
            </nav>

            {/* Get Started button */}
            <a href="/login-student" className="hidden lg:inline-block bg-[#88343B] text-white px-4 py-2 rounded">
              Logout
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600"
              onClick={() => setIsToggleOpen(!isToggleOpen)}
            >
              {isToggleOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`${isToggleOpen ? "block" : "hidden"} lg:hidden`}>
            <nav className="mt-4 space-y-2">
              <a href="/" className="block text-gray-600 hover:text-gray-900">Home</a>
              <a href="/Aboutus" className="block text-gray-600 hover:text-gray-900">About Us</a>
              <a href="/services" className="block text-gray-600 hover:text-gray-900">Services</a>
              <a href="/blog" className="block text-gray-600 hover:text-gray-900">Blog</a>
              <a href="/contact" className="block text-gray-600 hover:text-gray-900">Contact Us</a>
              <a href="/get-started" className="block bg-red-600 text-white px-4 py-2 rounded">
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Studnav;
