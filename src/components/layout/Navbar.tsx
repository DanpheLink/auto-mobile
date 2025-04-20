import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Rocket } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { NavItem } from '../../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
    setActiveDropdown(null);
  }, [location]);

  const renderNavItems = (items: NavItem[], isMobile = false) => {
    return items.map((item) => {
      const isActive = location.pathname === item.path || 
                       location.pathname.startsWith(item.path + '/');
      
      if (item.dropdown) {
        return (
          <div key={item.title} className="relative group">
            <button
              className={`flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors ${
                isActive 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
              } ${isMobile ? 'w-full justify-between' : ''}`}
              onClick={isMobile ? () => toggleDropdown(item.title) : undefined}
            >
              {item.title}
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                isMobile && activeDropdown === item.title ? 'rotate-180' : ''
              }`} />
            </button>
            
            <div className={`${
              isMobile 
                ? 'mt-1 pl-4 space-y-2' 
                : 'absolute left-0 w-48 mt-2 py-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'
            } ${
              isMobile && activeDropdown !== item.title ? 'hidden' : ''
            } ${
              !isMobile ? 'opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300' : ''
            }`}>
              {item.dropdown.map((dropdownItem) => (
                <Link
                  key={dropdownItem.title}
                  to={dropdownItem.path}
                  className={`${
                    isMobile 
                      ? 'block py-2 text-gray-600 hover:text-primary-600'
                      : 'block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {dropdownItem.title}
                </Link>
              ))}
            </div>
          </div>
        );
      }
      
      return (
        <Link
          key={item.title}
          to={item.path}
          className={`px-3 py-2 text-base font-medium rounded-md transition-colors ${
            isActive 
              ? 'text-primary-600 bg-primary-50' 
              : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/50'
          } ${isMobile ? 'block' : ''}`}
        >
          {item.title}
        </Link>
      );
    });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <Rocket className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-dark-800">NASA Nepal</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {renderNavItems(navigationItems)}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {renderNavItems(navigationItems, true)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;