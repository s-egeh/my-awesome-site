"use client";

import { Mail, Phone, MapPin, Award } from "lucide-react";
import richardImage from '../assets/richard.jpg';
import giftyImage from '../assets/gifty.jpg';

export default function Leadership() {
  const leaders = [
    {
      name: "Robert A Micah",
      position: "President & CEO",
      description: "Visionary leader driving AADIF's mission to transform Adansi Akrofuom through sustainable development initiatives and community empowerment programs.",
      phone: "+233596257623",
      email: "ramicah007@gmail.com",
      image: richardImage,
      achievements: [
        "Community Development Pioneer",
        "Agricultural Innovation Advocate",
        "Youth Empowerment Champion"
      ]
    },
    {
      name: "Gifty Micah",
      position: "Vice President",
      description: "Dedicated leader focused on women's empowerment and educational development, ensuring AADIF's programs reach and uplift every member of our community.",
      phone: "+233503325559",
      email: "ppkess007@gmail.com",
      image: giftyImage,
      achievements: [
        "Women's Rights Advocate",
        "Educational Program Director",
        "Community Health Leader"
      ]
    }
  ];

  const handlePhoneClick = (phone) => {
    window.open(`tel:${phone}`, '_blank');
  };

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#00483D] rounded-full px-6 py-3 shadow-lg mb-6">
            <Award size={24} className="text-[#FFD700]" />
            <span className="text-lg font-semibold text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}>
              Leadership Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#00483D] mb-6"
              style={{ fontFamily: "Merriweather, serif" }}>
            Leadership & Contact
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Meet the dedicated leaders driving AADIF's mission to transform communities 
            through sustainable development and empowerment programs.
          </p>
        </div>

        {/* Leadership Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Profile Header */}
              <div className="relative h-64 bg-gradient-to-br from-[#00483D] to-[#006B5D]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full object-cover absolute bottom-4 left-8 border-4 border-white shadow-lg"
                />
                <div className="absolute bottom-4 right-8 text-white">
                  <div className="text-right">
                    <h3 className="text-2xl font-bold mb-1"
                        style={{ fontFamily: "Merriweather, serif" }}>
                      {leader.name}
                    </h3>
                    <p className="text-[#FFD700] font-semibold"
                       style={{ fontFamily: "Inter, sans-serif" }}>
                      {leader.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="p-8">
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6"
                   style={{ fontFamily: "Inter, sans-serif" }}>
                  {leader.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#00483D] mb-3"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                    Key Areas of Focus:
                  </h4>
                  <div className="space-y-2">
                    {leader.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#FFD700] rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700"
                              style={{ fontFamily: "Inter, sans-serif" }}>
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 gap-3">
                  <button
                    onClick={() => handlePhoneClick(leader.phone)}
                    className="flex items-center gap-3 p-3 bg-[#00483D] bg-opacity-5 hover:bg-opacity-10 rounded-lg transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-[#00483D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm text-gray-600"
                         style={{ fontFamily: "Inter, sans-serif" }}>
                        Phone
                      </p>
                      <p className="font-semibold text-[#00483D]"
                         style={{ fontFamily: "Inter, sans-serif" }}>
                        {leader.phone}
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleEmailClick(leader.email)}
                    className="flex items-center gap-3 p-3 bg-[#FFD700] bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail size={18} className="text-[#00483D]" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm text-gray-600"
                         style={{ fontFamily: "Inter, sans-serif" }}>
                        Email
                      </p>
                      <p className="font-semibold text-[#00483D]"
                         style={{ fontFamily: "Inter, sans-serif" }}>
                        {leader.email}
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className="bg-gradient-to-r from-[#00483D] to-[#006B5D] text-white rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#FFD700]"
                style={{ fontFamily: "Merriweather, serif" }}>
              Get In Touch
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto"
               style={{ fontFamily: "Inter, sans-serif" }}>
              Ready to make a difference? Contact us to learn more about our programs, 
              volunteer opportunities, or partnership possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Office Location */}
            <div className="group">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={32} className="text-[#00483D]" />
              </div>
              <h4 className="text-lg font-semibold text-[#FFD700] mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}>
                Office Location
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                Community 25, Golf Junction<br />
                Tema, Greater Accra Region<br />
                Ghana
              </p>
            </div>

            {/* Service Area */}
            <div className="group">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={32} className="text-[#00483D]" />
              </div>
              <h4 className="text-lg font-semibold text-[#FFD700] mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}>
                Service Area
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                Adansi Akrofuom<br />
                & Beyond<br />
                Ghana
              </p>
            </div>

            {/* Project Coordination */}
            <div className="group">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award size={32} className="text-[#00483D]" />
              </div>
              <h4 className="text-lg font-semibold text-[#FFD700] mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}>
                Project Coordination
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                Robert Ato Micah<br />
                Project Coordinator<br />
                +233 596 257 623
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#00483D] mb-4"
              style={{ fontFamily: "Merriweather, serif" }}>
            Join Our Mission
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Whether you're interested in volunteering, partnering with us, or learning more 
            about our impact, we'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => handlePhoneClick('+233596257623')}
              className="bg-[#00483D] hover:bg-[#003830] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Phone size={20} />
              Call Us Now
            </button>
            <button 
              onClick={() => handleEmailClick('ramicah007@gmail.com')}
              className="border-2 border-[#00483D] text-[#00483D] hover:bg-[#00483D] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Mail size={20} />
              Send Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}