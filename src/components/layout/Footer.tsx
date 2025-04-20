import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowRight 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Rocket className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold text-white">NASA Nepal</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Promoting astronomy, space science, and STEM education in Nepal through research, education, and public outreach.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">New Baneshwor, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+977 01-4444444</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@nasanepal.org.np" className="text-gray-300 hover:text-primary-400 transition-colors">
                  info@nasanepal.org.np
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter to receive updates on our activities, events, and opportunities.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 bg-dark-700 border border-dark-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="bg-primary-600 px-4 py-2 text-white rounded-r-md hover:bg-primary-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-dark-600 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NASA Nepal. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;