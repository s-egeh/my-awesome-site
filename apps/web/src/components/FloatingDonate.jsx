"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

export default function FloatingDonate() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px from top
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToDonate = () => {
    // Show donate modal instead of just scrolling
    const event = new CustomEvent('showDonateModal');
    window.dispatchEvent(event);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToDonate}
      className="fixed bottom-6 right-6 z-40 bg-[#FFD700] hover:bg-[#e6c200] text-[#00483D] w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Donate to AADIF"
    >
      <Heart 
        size={24} 
        className="transition-transform duration-300 group-hover:scale-110" 
        fill="currentColor"
      />
      
      {/* Tooltip */}
      <div className="absolute right-16 bg-[#00483D] text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
           style={{ fontFamily: "Inter, sans-serif" }}>
        Support Our Mission
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-[#00483D]"></div>
      </div>

      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-[#FFD700] animate-ping opacity-20"></div>
    </button>
  );
}