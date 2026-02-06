import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoIcon from '../assets/logo-icon.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navItems = [
    { type: 'link', label: 'Home', href: '/' },
    {
      type: 'dropdown',
      label: 'Services',
      children: [
        { label: 'Governance', href: '/governance' },
        { label: 'Management', href: '/management' },
        { label: 'Advisory', href: '/advisory' },
      ]
    },
    { type: 'link', label: 'Reconciliation Statement', href: '/reconciliation' },
    { type: 'link', label: 'Treaty Relationships Matter', href: '/treaty-relationships' },
    { type: 'link', label: 'Our Staff', href: '/staff' },
    { type: 'link', label: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isChildActive = (children: { href: string }[]) => children.some(c => isActive(c.href));

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled || isMenuOpen ? 'bg-white border-neutral-200 py-3 shadow-sm' : 'bg-white/95 border-transparent py-5 backdrop-blur-md'
        }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex justify-between items-center">

        <Link to="/" className="flex items-center gap-3 group z-50 relative" onClick={() => setIsMenuOpen(false)}>
          <div className="w-9 h-9 flex items-center justify-center rounded-sm transition-colors duration-300">
            <img src={logoIcon} alt="Bigfoot & Eagle Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-lg leading-none tracking-tight transition-colors duration-300 ${isMenuOpen ? 'text-black' : 'text-black'}`}>
              BIGFOOT & EAGLE
            </span>

          </div>
        </Link>

        {/* Desktop Navigation - Visible on lg and up */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => {
            if (item.type === 'dropdown' && item.children) {
              const parentActive = isChildActive(item.children);
              return (
                <div key={index} className="relative group">
                  <button className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 py-2 focus:outline-none ${parentActive ? 'text-brand-red' : 'text-neutral-500 group-hover:text-black'
                    }`}>
                    {item.label}
                    <ChevronDown size={12} className={`transition-transform duration-300 group-hover:rotate-180 ${parentActive ? 'text-brand-red' : ''}`} />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 w-48">
                    <div className="bg-white border border-neutral-100 shadow-xl rounded-sm p-2 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={`block px-4 py-3 text-[11px] uppercase tracking-wider font-medium hover:bg-neutral-50 transition-colors ${isActive(child.href) ? 'text-brand-red bg-neutral-50' : 'text-neutral-600'
                            }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="relative group py-2"
                >
                  <span className={`text-[11px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${isActive(item.href!) ? 'text-brand-red' : 'text-neutral-500 group-hover:text-black'
                    }`}>
                    {item.label}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-brand-red transform origin-left transition-transform duration-300 ${isActive(item.href!) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                </Link>
              );
            }
          })}
        </div>

        {/* Mobile Menu Toggle - Visible on md and below */}
        <button
          className="lg:hidden z-50 text-black p-2 hover:bg-neutral-100 rounded-full transition-colors focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-all duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
        <div className="h-full w-full flex flex-col justify-center items-center gap-6 p-6 overflow-y-auto">
          {navItems.map((item, idx) => {
            if (item.type === 'dropdown' && item.children) {
              return (
                <div key={item.label} className={`flex flex-col items-center gap-4 transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${100 + idx * 50}ms` }}>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="text-2xl md:text-4xl font-serif text-black hover:text-brand-red transition-all flex items-center gap-2"
                  >
                    {item.label} <ChevronDown size={24} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`flex flex-col items-center gap-4 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    {item.children.map(child => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg text-neutral-500 hover:text-brand-red font-serif"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={item.label}
                to={item.href!}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl md:text-4xl font-serif text-black hover:text-brand-red transition-all duration-500 transform text-center ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
              >
                {item.label}
              </Link>
            )
          })}

          <div className={`mt-8 w-12 h-1 bg-brand-red transition-all duration-700 delay-500 ${isMenuOpen ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;