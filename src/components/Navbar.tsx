import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tours & Destinations", href: "/tours" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] bg-white border-b border-gray-100 shadow-sm">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 mx-auto">
        <div className="flex items-center h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36">
          {/* Left: Logo */}
          <div className="flex-1 flex items-center">
            <Link 
              to="/" 
              className="flex items-center transition-transform hover:scale-105 duration-300 shrink-0"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img 
                src={logo} 
                alt="Solivagant Holidays" 
                className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto max-w-[150px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[360px] xl:max-w-[450px] object-contain pointer-events-none" 
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex flex-[3] justify-center items-center gap-6 lg:gap-12 xl:gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-base lg:text-lg xl:text-xl font-bold transition-all duration-300 relative group whitespace-nowrap ${
                  location.pathname === link.href ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* Right: Action Button & Mobile Toggle */}
          <div className="flex-1 flex items-center justify-end gap-3 sm:gap-6">
            <Link
              to="/contact"
              className="hidden lg:flex px-6 lg:px-8 xl:px-12 py-2.5 lg:py-4 xl:py-5 rounded-full bg-primary text-white font-body text-base lg:text-lg xl:text-xl font-bold shadow-lg hover:bg-coral-dark transition-all duration-300 whitespace-nowrap"
            >
              Enquire Now
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-xl transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[60svh] opacity-100 py-8 px-6" : "max-h-0 opacity-0 py-0 px-6"
        }`}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block font-display text-2xl font-bold transition-colors ${
                location.pathname === link.href ? "text-primary pl-4 border-l-4 border-primary" : "text-gray-900 pr-4"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6 border-t border-gray-100 mt-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block flex items-center justify-center w-full px-8 py-4 rounded-full bg-primary text-white font-body text-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
