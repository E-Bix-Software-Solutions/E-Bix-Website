import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function PosonBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the ad during this active session
    const hasSeenAd = sessionStorage.getItem("hasSeenPosonAd");
    
    if (!hasSeenAd) {
      // Delay showing the popup slightly for a smoother entry feel
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Persist session-state so it doesn't show up again on subsequent page refreshes
    sessionStorage.setItem("hasSeenPosonAd", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-[420px] bg-background rounded-2xl overflow-hidden border border-border shadow-2xl animate-in zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors border border-white/20 shadow"
          aria-label="Close advertisement"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Poster Image Area */}
        <div className="relative aspect-[3/4] w-full bg-muted">
          <img
            src="/banners/poson-banner.jpeg"
            alt="Blessed Poson Poya Day"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}