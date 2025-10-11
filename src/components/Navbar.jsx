import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import TopBar from './TopBar';

export default function AmbulanceNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
    }`;

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Emergency TopBar */}
      <TopBar />

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logoo.png"
              alt="Ambulance Logo"
              className="w-36 sm:w-44 md:w-52 lg:w-60 h-auto"

            />
          </Link>

          {/* Desktop & Tablet Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About Us</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>

            {/* Call Button */}
            <button className="bg-[#96080B] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-xl flex items-center gap-2">
              <Phone className="w-4 h-4 md:w-5 md:h-5 animate-ring" />
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-red-600 transition-colors duration-200"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-md transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-red-600 font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-red-600 font-medium"
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-red-600 font-medium"
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-red-600 font-medium"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-red-600 font-medium"
          >
            Contact
          </NavLink>

          {/* Mobile CTA Button */}
          <button className="w-full bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-200 shadow-md flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 animate-ring" />
            Book Ambulance Now
          </button>
        </div>
      </div>

      {/* Phone Icon Animation */}
      <style jsx>{`
        @keyframes ring {
          0%, 20%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(-15deg); }
          15% { transform: rotate(15deg); }
        }
        .animate-ring {
          display: inline-block;
          animation: ring 1s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
}
