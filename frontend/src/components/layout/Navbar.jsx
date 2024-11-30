import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  BookOpen, 
  Home, 
  Users, 
  DollarSign, 
  Info 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { 
      name: 'Home', 
      path: '/', 
      icon: <Home className="w-5 h-5 mr-2" /> 
    },
    { 
      name: 'Courses', 
      path: '/courses', 
      icon: <BookOpen className="w-5 h-5 mr-2" /> 
    },
    { 
      name: 'About', 
      path: '/about', 
      icon: <Info className="w-5 h-5 mr-2" /> 
    },
    { 
      name: 'Financial Aid', 
      path: '/financial-aid', 
      icon: <DollarSign className="w-5 h-5 mr-2" /> 
    },
    { 
      name: 'Register', 
      path: '/register', 
      icon: <Users className="w-5 h-5 mr-2" /> 
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center text-2xl font-bold text-indigo-800 
          hover:text-indigo-600 transition-colors"
        >
          <img 
            src="/api/placeholder/50/50" 
            alt="Tech Tutorial Logo" 
            className="w-10 h-10 mr-3 rounded-full"
          />
          Tech Tutorial
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center text-gray-700 
              hover:text-indigo-600 transition-colors 
              hover:bg-indigo-50 px-3 py-2 rounded-lg"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className="flex items-center w-full py-3 px-4 
                text-gray-700 hover:bg-indigo-50 
                rounded-lg transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;