"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Home, 
  Building2, 
  Shield, 
  Users, 
  Calendar,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";

export default function Infrastructure() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [jobsCount, setJobsCount] = useState(0);
  const [visitorsCount, setVisitorsCount] = useState(0);
  const [revenueCount, setRevenueCount] = useState(0);

  const sectionRef = useRef(null);

  // Animated counter hook
  const useAnimatedCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [shouldStart, setShouldStart] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setShouldStart(true);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!shouldStart) return;

      let startTime = null;
      let animationFrame = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, shouldStart]);

    return count;
  };

  const projects = [
    {
      title: "Affordable Housing Units",
      subtitle: "2,000 Modern Housing Units",
      description: "AADIF is committed to providing safe and affordable housing solutions for families in Adansi Akrofuom, improving living standards and ensuring dignity for every household.",
      image: "https://ucarecdn.com/c4b70edc-8be2-4cd5-ba87-d4b20a9487cc/-/format/auto/",
      details: {
        units: "2,000 Units",
        completion: "4 Years",
        features: [
          "Electronic Key Systems",
          "CCTV Surveillance", 
          "Modern Design",
          "Community Facilities"
        ],
        investment: "$75 Million"
      },
      gallery: [
        "https://ucarecdn.com/c4b70edc-8be2-4cd5-ba87-d4b20a9487cc/-/format/auto/",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&auto=format&q=80",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&auto=format&q=80"
      ]
    },
    {
      title: "Hotel & Casino Project",
      subtitle: "200-Room Luxury Resort",
      description: "As part of our commitment to sustainable community development, AADIF will invest in a hotel and casino project to create jobs, boost tourism, and fund future programs.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&auto=format&q=80",
      details: {
        rooms: "200 Rooms",
        completion: "4 Years", 
        features: [
          "Swimming Pools",
          "Electronic Key Systems",
          "CCTV Surveillance",
          "Modern Casino Floor",
          "Conference Facilities",
          "Restaurants & Bars"
        ],
        investment: "$50 Million"
      },
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&auto=format&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop&auto=format&q=80",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop&auto=format&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop&auto=format&q=80"
      ]
    }
  ];

  const openLightbox = (image) => {
    setLightboxImage(image);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setLightboxImage('');
    document.body.style.overflow = 'unset';
  };

  // Animated counters
  const jobsCreated = useAnimatedCounter(2500);
  const expectedVisitors = useAnimatedCounter(150000);
  const revenueReinvested = useAnimatedCounter(85);

  return (
    <>
      <section ref={sectionRef} id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00483D] mb-6"
                style={{ fontFamily: "Merriweather, serif" }}>
              Community Infrastructure Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
               style={{ fontFamily: "Inter, sans-serif" }}>
              Building modern infrastructure that provides safe, secure environments for residents, 
              investors, and tourists while creating sustainable economic opportunities.
            </p>
          </div>

          {/* Project Navigation */}
          <div className="flex flex-wrap justify-center mb-8 bg-gray-50 rounded-lg p-2">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 m-1 ${
                  selectedProject === index
                    ? 'bg-[#00483D] text-white shadow-lg'
                    : 'text-[#00483D] hover:bg-white'
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {index === 0 ? <Home size={20} /> : <Building2 size={20} />}
                <span className="font-semibold">{project.title}</span>
              </button>
            ))}
          </div>

          {/* Project Content */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              {/* Project Image */}
              <div className="relative group cursor-pointer" onClick={() => openLightbox(projects[selectedProject].image)}>
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300">
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FFD700] text-[#00483D] px-3 py-1 rounded-full text-sm font-semibold">
                      {projects[selectedProject].details.investment}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-[#00483D] mb-4"
                    style={{ fontFamily: "Merriweather, serif" }}>
                  {projects[selectedProject].title}
                </h3>
                
                <h4 className="text-xl text-[#FFD700] font-semibold mb-6"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                  {projects[selectedProject].subtitle}
                </h4>

                <p className="text-gray-700 leading-relaxed mb-8"
                   style={{ fontFamily: "Inter, sans-serif" }}>
                  {projects[selectedProject].description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[#00483D] mb-1">
                      {projects[selectedProject].details.units || projects[selectedProject].details.rooms}
                    </div>
                    <div className="text-sm text-gray-600">
                      {selectedProject === 0 ? 'Housing Units' : 'Hotel Rooms'}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[#00483D] mb-1">
                      {projects[selectedProject].details.completion}
                    </div>
                    <div className="text-sm text-gray-600">Completion Time</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h5 className="font-semibold text-[#00483D] mb-4"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                    Key Features:
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {projects[selectedProject].details.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Shield size={16} className="text-[#FFD700] flex-shrink-0" />
                        <span className="text-sm text-gray-700"
                              style={{ fontFamily: "Inter, sans-serif" }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Gallery Button */}
                <button
                  onClick={() => openLightbox(projects[selectedProject].gallery[0])}
                  className="bg-[#00483D] hover:bg-[#003830] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  View Project Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Hotel & Casino Impact Counters (only show when hotel project is selected) */}
          {selectedProject === 1 && (
            <div className="mt-16 bg-[#00483D] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-[#FFD700]"
                  style={{ fontFamily: "Merriweather, serif" }}>
                Projected Economic Impact
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users size={32} className="text-[#00483D]" />
                  </div>
                  <div className="text-3xl font-bold text-[#FFD700] mb-2">
                    {jobsCreated.toLocaleString()}+
                  </div>
                  <div className="text-gray-200">Jobs Created</div>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calendar size={32} className="text-[#00483D]" />
                  </div>
                  <div className="text-3xl font-bold text-[#FFD700] mb-2">
                    {expectedVisitors.toLocaleString()}+
                  </div>
                  <div className="text-gray-200">Visitors per Year</div>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign size={32} className="text-[#00483D]" />
                  </div>
                  <div className="text-3xl font-bold text-[#FFD700] mb-2">
                    {revenueReinvested}%
                  </div>
                  <div className="text-gray-200">Revenue Reinvested in Community</div>
                </div>
              </div>
            </div>
          )}

          {/* Security & Innovation Features */}
          <div className="mt-16 bg-gradient-to-r from-[#00483D] to-[#006B5D] text-white rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FFD700]"
                  style={{ fontFamily: "Merriweather, serif" }}>
                Security & Innovation Standards
              </h3>
              <p className="text-gray-200 max-w-2xl mx-auto"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                All housing units and hotel facilities are equipped with state-of-the-art security 
                and technology infrastructure to ensure safety and modern living standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <Shield className="w-12 h-12 text-[#FFD700] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Electronic Key Systems</h4>
                <p className="text-sm text-gray-200">Modern access control for all units</p>
              </div>
              
              <div className="text-center p-4">
                <Shield className="w-12 h-12 text-[#FFD700] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">CCTV Surveillance</h4>
                <p className="text-sm text-gray-200">24/7 security monitoring systems</p>
              </div>
              
              <div className="text-center p-4">
                <Shield className="w-12 h-12 text-[#FFD700] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Secure Layouts</h4>
                <p className="text-sm text-gray-200">Thoughtfully designed secure environments</p>
              </div>
              
              <div className="text-center p-4">
                <Shield className="w-12 h-12 text-[#FFD700] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Emergency Backup</h4>
                <p className="text-sm text-gray-200">Uninterrupted essential services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-60 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <img
              src={lightboxImage}
              alt="Project Gallery"
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Gallery Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              {projects[selectedProject].gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxImage(image)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    lightboxImage === image ? 'border-[#FFD700]' : 'border-white border-opacity-50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}