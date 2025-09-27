"use client";

import { 
  Users, 
  GraduationCap, 
  Heart, 
  Home, 
  BookOpen, 
  Globe2,
  MapPin 
} from "lucide-react";

export default function Mission() {
  const objectives = [
    {
      icon: Users,
      title: "Youth Employment Creation",
      description: "Provide training, mentorship, and entrepreneurial support for young people. Establish community-based projects that generate sustainable jobs.",
      color: "#FFD700"
    },
    {
      icon: Heart,
      title: "Women's Empowerment",
      description: "Facilitate skills training and microfinance opportunities for women. Advocate for gender equity and inclusive leadership.",
      color: "#00483D"
    },
    {
      icon: Heart,
      title: "Free Feeding Programs",
      description: "Implement community kitchens and school feeding initiatives. Partner with donors and stakeholders to reduce hunger and malnutrition.",
      color: "#FFD700"
    },
    {
      icon: Home,
      title: "Affordable Housing",
      description: "Support initiatives that provide safe, low-cost housing for underprivileged families. Collaborate with stakeholders to address housing deficits.",
      color: "#00483D"
    },
    {
      icon: BookOpen,
      title: "Educational Opportunities",
      description: "Offer scholarships, mentorship, and career guidance for students. Develop ICT and digital literacy programs for schools and communities.",
      color: "#FFD700"
    },
    {
      icon: GraduationCap,
      title: "Faculty & Student Exchange Programs",
      description: "Build partnerships with international institutions for knowledge sharing. Promote academic collaboration and cultural exchange for mutual development.",
      color: "#00483D"
    },
    {
      icon: MapPin,
      title: "Tourism & Cultural Development",
      description: "Promote the rich cultural heritage and natural attractions of Adansi Akrofuom. Develop sustainable tourism initiatives that generate income and global recognition.",
      color: "#FFD700"
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00483D] mb-6"
              style={{ fontFamily: "Merriweather, serif" }}>
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Our comprehensive approach to community development encompasses seven core areas that address the fundamental needs of our communities.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                     style={{ backgroundColor: objective.color }}>
                  <IconComponent 
                    size={32} 
                    className={objective.color === "#FFD700" ? "text-[#00483D]" : "text-white"} 
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#00483D] mb-3"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm"
                   style={{ fontFamily: "Inter, sans-serif" }}>
                  {objective.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Through these objectives, we aim to create a comprehensive framework for sustainable community development and global partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                const element = document.querySelector('#volunteer');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#00483D] hover:bg-[#003830] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Partner With Us
            </button>
            <button 
              onClick={() => {
                const element = document.querySelector('#projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-[#00483D] text-[#00483D] hover:bg-[#00483D] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              View Our Projects
            </button>
          </div>
        </div>

        {/* Foundation Timeline */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#00483D] mb-4"
                style={{ fontFamily: "Merriweather, serif" }}>
              Foundation Establishment - 2025
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users size={24} className="text-[#00483D]" />
                </div>
                <h4 className="font-semibold text-[#00483D] mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                  Youth Employment & Empowerment
                </h4>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#00483D] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-[#00483D] mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                  Women's Development Programs
                </h4>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe2 size={24} className="text-[#00483D]" />
                </div>
                <h4 className="font-semibold text-[#00483D] mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                  Community Support Services
                </h4>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#00483D] rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-[#00483D] mb-2"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                  Educational Development
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}