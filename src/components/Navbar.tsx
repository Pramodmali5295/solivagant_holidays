import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tours & Destinations", href: "/tours" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] bg-white border-b border-gray-100 shadow-sm">
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link 
            to="/" 
            className="flex items-center gap-2 md:gap-3 transition-transform hover:scale-105 duration-300"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={logo} alt="Solivagant Holidays" className="h-12 md:h-20 w-auto object-contain rounded-lg" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-base font-bold transition-all duration-300 relative group ${
                  location.pathname === link.href ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-primary text-white font-body text-base font-bold shadow-lg hover:bg-coral-dark transition-all duration-300"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-8 px-6 space-y-6 transition-all duration-300 origin-top ${
        isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
      }`}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className={`block font-display text-2xl font-bold transition-colors ${
              location.pathname === link.href ? "text-primary" : "text-gray-900 hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="block text-center px-8 py-4 rounded-full bg-primary text-white font-body text-lg font-bold shadow-lg"
        >
          Enquire Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
