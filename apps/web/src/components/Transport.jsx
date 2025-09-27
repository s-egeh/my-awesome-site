"use client";

import { useState } from "react";
import { Bus, Users, Award, X } from "lucide-react";

export default function Transport() {
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const buses = [
    {
      title: "Community Transport Bus",
      description: "Dedicated transportation for school children, ensuring safe and reliable daily commutes to educational facilities across Adansi Akrofuom.",
      status: "Planned Donation",
      image: "https://ucarecdn.com/c82b48ad-762b-4d00-9709-add8df984676/-/format/auto/",
      capacity: "45 Students",
      purpose: "School Transportation",
      features: [
        "Air Conditioning",
        "Safety Harnesses", 
        "GPS Tracking",
        "First Aid Kit",
        "Emergency Exits"
      ],
      beneficiaries: "1,200+ Students Daily",
      icon: "👶"
    },
    {
      title: "Traditional Council Bus",
      description: "Special transportation vehicle for the Adansi Akrofuom Traditional Council, supporting official duties and community ceremonies.",
      status: "Planned Donation",
      image: "https://ucarecdn.com/aac41d4d-53bf-4043-96ee-99473791e1a9/-/format/auto/",
      capacity: "35 Passengers",
      purpose: "Council Transportation",
      features: [
        "Luxury Seating",
        "Climate Control",
        "Sound System",
        "Traditional Decorations",
        "Ceremonial Setup"
      ],
      beneficiaries: "Council Members & Community Leaders",
      icon: "👑"
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

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
              <Bus size={32} className="text-[#00483D]" />
              <span className="text-lg font-semibold text-[#00483D]"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                Transport Initiative
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#00483D] mb-6"
                style={{ fontFamily: "Merriweather, serif" }}>
              Transport for Community
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
               style={{ fontFamily: "Inter, sans-serif" }}>
              Providing essential transportation services to support education and community governance 
              through our dedicated bus fleet for students and traditional leaders.
            </p>
          </div>

          {/* Bus Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {buses.map((bus, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Bus Image */}
                <div className="relative group cursor-pointer" onClick={() => openLightbox(bus.image)}>
                  <img
                    src={bus.image}
                    alt={bus.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300">
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FFD700] text-[#00483D] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {bus.status}
                      </span>
                    </div>
                    
                    {/* Bus Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="text-4xl">{bus.icon}</div>
                    </div>

                    {/* View Larger Button */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        Click to view larger
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bus Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#00483D] mb-4"
                      style={{ fontFamily: "Merriweather, serif" }}>
                    {bus.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6"
                     style={{ fontFamily: "Inter, sans-serif" }}>
                    {bus.description}
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#00483D] bg-opacity-5 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-[#00483D] mb-1">
                        {bus.capacity}
                      </div>
                      <div className="text-sm text-gray-600">Capacity</div>
                    </div>
                    <div className="bg-[#FFD700] bg-opacity-20 rounded-lg p-4 text-center">
                      <div className="text-lg font-bold text-[#00483D] mb-1">
                        {bus.purpose}
                      </div>
                      <div className="text-xs text-gray-600">Primary Use</div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#00483D] mb-3"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {bus.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#FFD700] rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-700"
                                style={{ fontFamily: "Inter, sans-serif" }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Beneficiaries */}
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={20} className="text-[#00483D]" />
                      <span className="font-semibold text-[#00483D]"
                            style={{ fontFamily: "Inter, sans-serif" }}>
                        Beneficiaries
                      </span>
                    </div>
                    <p className="text-sm text-gray-700"
                       style={{ fontFamily: "Inter, sans-serif" }}>
                      {bus.beneficiaries}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#00483D] mb-4"
                  style={{ fontFamily: "Merriweather, serif" }}>
                Community Impact
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                Our transport initiative addresses critical mobility needs, ensuring access to education 
                and supporting effective governance in our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users size={32} className="text-[#00483D]" />
                </div>
                <h4 className="text-2xl font-bold text-[#00483D] mb-2">1,200+</h4>
                <p className="text-gray-600 text-sm">Students Transported Daily</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#00483D] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award size={32} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-[#00483D] mb-2">95%</h4>
                <p className="text-gray-600 text-sm">Improved School Attendance</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Bus size={32} className="text-[#00483D]" />
                </div>
                <h4 className="text-2xl font-bold text-[#00483D] mb-2">50+</h4>
                <p className="text-gray-600 text-sm">Council Events Supported</p>
              </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="bg-gradient-to-r from-[#00483D] to-[#006B5D] text-white rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#FFD700]"
                  style={{ fontFamily: "Merriweather, serif" }}>
                Implementation Timeline
              </h3>
              <p className="text-gray-200 max-w-2xl mx-auto"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                Our phased approach ensures systematic deployment and maximum community benefit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                <h4 className="text-lg font-bold text-[#FFD700] mb-2">Phase 1</h4>
                <p className="text-sm text-gray-200">Community Assessment & Planning</p>
                <div className="text-xs text-gray-300 mt-2">Month 1-2</div>
              </div>
              
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                <h4 className="text-lg font-bold text-[#FFD700] mb-2">Phase 2</h4>
                <p className="text-sm text-gray-200">Bus Procurement & Setup</p>
                <div className="text-xs text-gray-300 mt-2">Month 3-4</div>
              </div>
              
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                <h4 className="text-lg font-bold text-[#FFD700] mb-2">Phase 3</h4>
                <p className="text-sm text-gray-200">Driver Training & Safety</p>
                <div className="text-xs text-gray-300 mt-2">Month 5</div>
              </div>
              
              <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                <h4 className="text-lg font-bold text-[#FFD700] mb-2">Phase 4</h4>
                <p className="text-sm text-gray-200">Service Launch & Operations</p>
                <div className="text-xs text-gray-300 mt-2">Month 6+</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-[#00483D] mb-4"
                style={{ fontFamily: "Merriweather, serif" }}>
              Support Our Transport Initiative
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto"
               style={{ fontFamily: "Inter, sans-serif" }}>
              Help us provide reliable transportation that connects our community 
              and ensures no child is left behind in their educational journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#donate');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#FFD700] hover:bg-[#e6c200] text-[#00483D] font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Donate for Transport
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#volunteer');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#00483D] text-[#00483D] hover:bg-[#00483D] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Volunteer as Driver
              </button>
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
              alt="Bus Detail"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}