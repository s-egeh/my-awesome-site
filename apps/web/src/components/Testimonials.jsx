"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Testimonials data - can be moved to external JSON file later
  const testimonials = [
    {
      id: 1,
      name: "Akwasi Boateng",
      role: "Local Farmer & Community Leader",
      message: "AADIF has been a beacon of hope for our community. Their agricultural training programs have transformed my farm's productivity, and now I'm able to support my family better than ever before.",
      image: ""
    },
    {
      id: 2,
      name: "Ama Serwaa",
      role: "Women's Group Secretary",
      message: "The women's empowerment program has given me the skills and confidence to start my own business. AADIF truly believes in the power of women to transform communities.",
      image: ""
    },
    {
      id: 3,
      name: "Kwame Asante",
      role: "High School Student",
      message: "Thanks to AADIF's scholarship program, I'm able to continue my education. Their commitment to youth development is inspiring and life-changing for students like me.",
      image: ""
    },
    {
      id: 4,
      name: "Nana Osei Kwadwo",
      role: "Traditional Council Elder",
      message: "AADIF respects our traditions while bringing modern development to Adansi Akrofuom. Their approach honors our heritage while building a better future for our children.",
      image: ""
    },
    {
      id: 5,
      name: "Efua Mensah",
      role: "School Principal",
      message: "The educational support AADIF provides has dramatically improved school attendance and student performance. Their holistic approach to community development is exactly what we needed.",
      image: ""
    },
    {
      id: 6,
      name: "Joseph Owusu",
      role: "Local Business Owner",
      message: "AADIF's economic development programs have created opportunities I never thought possible. Their vision for sustainable growth is transforming our entire region.",
      image: ""
    },
    {
      id: 7,
      name: "Grace Adjei",
      role: "Community Health Worker",
      message: "The healthcare initiatives have improved the quality of life for so many families. AADIF's comprehensive approach addresses the root causes of our challenges.",
      image: ""
    },
    {
      id: 8,
      name: "Samuel Opoku",
      role: "Youth Leader",
      message: "As a young person in Adansi Akrofuom, I've seen how AADIF creates real opportunities for employment and skill development. They're building a foundation for our future success.",
      image: ""
    },
    {
      id: 9,
      name: "Victoria Danso",
      role: "Market Trader",
      message: "The microfinance program has allowed me to expand my business and support other women in the community. AADIF understands what we need to thrive.",
      image: ""
    },
    {
      id: 10,
      name: "Emmanuel Adjei",
      role: "Agricultural Extension Officer",
      message: "Working with AADIF has been incredible. Their modern agricultural techniques and equipment have revolutionized farming practices in our area.",
      image: ""
    },
    
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isPaused, testimonials.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === ' ') {
        event.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Calculate visible testimonials for responsive design
  const getVisibleTestimonials = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const result = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    
    return result;
  };

  const [visibleTestimonials, setVisibleTestimonials] = useState([testimonials[0]]);

  useEffect(() => {
    const updateVisibleTestimonials = () => {
      setVisibleTestimonials(getVisibleTestimonials());
    };

    updateVisibleTestimonials();
    window.addEventListener('resize', updateVisibleTestimonials);
    
    return () => window.removeEventListener('resize', updateVisibleTestimonials);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-gradient-to-br from-[#00483D] to-[#006B5D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white bg-opacity-10 rounded-full px-6 py-3 backdrop-blur-sm mb-6">
            <Quote size={24} className="text-[#FFD700]" />
            <span className="text-lg font-semibold text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}>
              Community Voices
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFD700]"
              style={{ fontFamily: "Merriweather, serif" }}>
            What People Are Saying
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Real words of encouragement and impact shared by those touched by our mission.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Testimonials Display */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full lg:w-1/3 md:w-1/2 p-4"
                >
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 h-full hover:bg-opacity-20 transition-all duration-300">
                    {/* Quote Icon */}
                    <Quote size={32} className="text-[#FFD700] mb-4" />
                    
                    {/* Testimonial Message */}
                    <p className="text-gray-100 leading-relaxed mb-6 text-base"
                       style={{ fontFamily: "Inter, sans-serif" }}>
                      "{testimonial.message}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-white"
                            style={{ fontFamily: "Inter, sans-serif" }}>
                          {testimonial.name}
                        </h4>
                        <p className="text-[#FFD700] text-sm"
                           style={{ fontFamily: "Inter, sans-serif" }}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            {/* Left Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              
              <button
                onClick={goToNext}
                className="w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? (
                  <Pause size={20} className="text-white" />
                ) : (
                  <Play size={20} className="text-white ml-1" />
                )}
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#FFD700] scale-125'
                      : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Current Position */}
            <div className="text-gray-300 text-sm"
                 style={{ fontFamily: "Inter, sans-serif" }}>
              {currentIndex + 1} / {testimonials.length}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-[#FFD700]"
              style={{ fontFamily: "Merriweather, serif" }}>
            Add Your Voice
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Have you been impacted by AADIF's work? We'd love to hear your story 
            and share how our foundation is making a difference in your life.
          </p>
          
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#FFD700] hover:bg-[#e6c200] text-[#00483D] font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
}