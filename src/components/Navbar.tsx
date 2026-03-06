import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] bg-white border-b border-gray-100 shadow-sm">
      <div className="w-full px-6 md:px-12 lg:px-20 mx-auto">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="#home" className="font-display text-2xl md:text-3xl font-bold text-gray-900 transition-colors hover:text-primary">
            Solivagant <span className="text-primary">Holidays</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-base font-bold text-gray-600 hover:text-primary transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-primary text-white font-body text-base font-bold shadow-lg hover:bg-coral-dark transition-all duration-300"
            >
              Enquire Now
            </a>
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
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-8 px-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-display text-2xl font-bold text-gray-900 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center px-8 py-4 rounded-full bg-primary text-white font-body text-lg font-bold shadow-lg"
          >
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
