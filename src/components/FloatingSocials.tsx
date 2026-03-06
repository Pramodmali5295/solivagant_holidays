import { Instagram, Facebook, MessageCircle } from "lucide-react";

const FloatingSocials = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex flex-col gap-1 md:gap-2 p-0 md:p-2">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 md:w-12 md:h-12 bg-green-500 text-white flex items-center justify-center rounded-l-xl shadow-lg hover:w-10 md:hover:w-14 hover:-translate-x-1 md:hover:-translate-x-2 transition-all duration-300 group"
        aria-label="WhatsApp"
      >
        <MessageCircle size={16} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://instagram.com/solivagantholidays"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 md:w-12 md:h-12 bg-pink-600 text-white flex items-center justify-center rounded-l-xl shadow-lg hover:w-10 md:hover:w-14 hover:-translate-x-1 md:hover:-translate-x-2 transition-all duration-300 group"
        aria-label="Instagram"
      >
        <Instagram size={16} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://facebook.com/solivagantholidays"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 text-white flex items-center justify-center rounded-l-xl shadow-lg hover:w-10 md:hover:w-14 hover:-translate-x-1 md:hover:-translate-x-2 transition-all duration-300 group"
        aria-label="Facebook"
      >
        <Facebook size={16} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default FloatingSocials;
