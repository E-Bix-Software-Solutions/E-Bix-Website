import React, { createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoaderContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Start as true so the loader screens the app immediately on fresh visit
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleInitialLoad = () => {
      // Small artificial delay (e.g., 1.2s) to guarantee the premium animation plays out nicely 
      // even if the user has a hyper-fast fiber connection
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1200);
      return () => clearTimeout(timer);
    };

    // If the browser window has already loaded resources, clear it out. 
    // Otherwise, wait for the window 'load' event natively.
    if (document.readyState === "complete") {
      handleInitialLoad();
    } else {
      window.addEventListener("load", handleInitialLoad);
      return () => window.removeEventListener("load", handleInitialLoad);
    }
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {/* Animated full screen backdrop */}
      <AnimatePresence>
        {isLoading && <GlobalLoaderOverlay />}
      </AnimatePresence>
    </LoaderContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) throw new Error("useLoader must be used within a LoaderProvider");
  return context;
};

// Premium Next-Gen Overlay UI
const GlobalLoaderOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/95 backdrop-blur-md select-none"
    >
      {/* Brand Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#1877F2]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative flex flex-col items-center">
        {/* Animated Rings & Monogram */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="absolute inset-0 border-2 border-t-[#1877F2] border-r-transparent border-b-transparent border-l-transparent rounded-full"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0.6 }}
            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="text-2xl font-black text-[#1877F2] drop-shadow-[0_0_12px_rgba(24,119,242,0.4)]"
          >
            E
          </motion.div>
        </div>

        {/* Minimal Progress/Branding Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 flex flex-col items-center"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
            E-BIX SOLUTIONS
          </span>
          <div className="w-20 h-[2px] bg-muted mt-2 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1/2 bg-[#1877F2]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};