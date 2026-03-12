import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="text-center max-w-lg">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-body text-xs font-bold tracking-widest uppercase">
          Error 404
        </div>
        <h1 className="mb-6 text-6xl md:text-8xl font-display font-bold text-foreground tracking-tighter">Oops!</h1>
        <p className="mb-10 text-xl font-body text-muted-foreground leading-relaxed">
          The page you're looking for seems to have vanished into thin air. Let's get you back on track for your next adventure.
        </p>
        <a 
          href="/" 
          className="inline-block px-10 py-4 rounded-full bg-primary text-white font-body font-bold uppercase tracking-widest shadow-xl hover:bg-foreground transition-all duration-300 transform hover:-translate-y-1"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
