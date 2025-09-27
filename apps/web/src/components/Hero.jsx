"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Foundation activity images that rotate every 7 seconds
  const backgroundImages = [
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&h=1080&fit=crop&auto=format&q=80",
      alt: "Community volunteers distributing food to families in need"
    },
    {
      url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1920&h=1080&fit=crop&auto=format&q=80",
      alt: "Children in classroom learning with teacher guidance"
    },
    {
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&auto=format&q=80",
      alt: "Community members working together on development project"
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&auto=format&q=80",
      alt: "Healthcare volunteers providing medical assistance to community"
    },
    {
      url: "https://images.unsplash.com/photo-1573492037576-a8fc6b2c4d9e?w=1920&h=1080&fit=crop&auto=format&q=80",
      alt: "Agricultural development and farming community initiatives"
    }
  ];

  // Auto-rotate images every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="https://ucarecdn.com/78aca528-3f52-4084-a895-154e7ae0d8aa/-/format/auto/"
            alt="AADIF Logo"
            className="h-20 w-20 mx-auto object-contain mb-4"
          />
        </div>

        {/* Main Motto */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#FFD700]">
          THE WORLD AT YOUR SERVICE
        </h1>

        {/* Foundation Name */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6" 
            style={{ fontFamily: "Merriweather, serif" }}>
          Adansi Akrofuom Development Initiative Foundation
        </h2>

        {/* Welcome Text */}
        <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light"
           style={{ fontFamily: "Inter, sans-serif" }}>
          Building Communities, Empowering Futures
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('#donate')}
            className="bg-[#FFD700] hover:bg-[#e6c200] text-[#00483D] font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Donate Now
          </button>
          <button
            onClick={() => scrollToSection('#volunteer')}
            className="border-2 border-white text-white hover:bg-white hover:text-[#00483D] font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Volunteer
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-[#FFD700] scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}