import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Financial Aid', path: '/financial-aid' },
    { name: 'Register', path: '/register' }
  ];

  const supportLinks = [
    { name: 'Contact Support', path: '/support' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Help Center', path: '/help' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">
              Tech Tutorial Class
            </h2>
            <p className="text-gray-400 mb-6">
              Empowering tech professionals through comprehensive, innovative learning experiences.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, link: '#', color: 'text-blue-500' },
                { Icon: Twitter, link: '#', color: 'text-sky-400' },
                { Icon: Instagram, link: '#', color: 'text-pink-500' },
                { Icon: Linkedin, link: '#', color: 'text-blue-600' }
              ].map(({ Icon, link, color }, index) => (
                <a 
                  key={index} 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${color} hover:opacity-75 transition-opacity`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="mr-3 w-5 h-5 text-indigo-500" />
                support@techtutorial.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="mr-3 w-5 h-5 text-indigo-500" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="mr-3 w-5 h-5 text-indigo-500" />
                123 Tech Learning St, Innovation City
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Additional Info */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {currentYear} Tech Tutorial Class. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Transforming Tech Education, One Student at a Time
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;