"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 200px from top
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "233596257623"; // Robert A Micah's phone number
    const message = encodeURIComponent(
      "Hello AADIF! I'm interested in learning more about your community development initiatives and how I can get involved. Can you please provide more information about your programs?"
    );
    
    // Try WhatsApp Web first, fallback to mobile app
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    const whatsappMobileUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Detect if user is on mobile
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.open(whatsappMobileUrl, '_blank');
    } else {
      window.open(whatsappWebUrl, '_blank');
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle 
        size={24} 
        className="transition-transform duration-300 group-hover:scale-110" 
        fill="currentColor"
      />
      
      {/* Tooltip */}
      <div className="absolute left-16 bg-[#00483D] text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
           style={{ fontFamily: "Inter, sans-serif" }}>
        Chat with us on WhatsApp
        {/* Arrow */}
        <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 border-4 border-transparent border-r-[#00483D]"></div>
      </div>

      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>

      {/* Online Indicator */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white">
        <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse"></div>
      </div>
    </button>
  );
}