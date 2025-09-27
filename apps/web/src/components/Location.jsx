"use client";

import { MapPin, Building, Users, Phone, Mail } from "lucide-react";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export default function Location() {
  // Adansi Akrofuom coordinates (approximate location in Ghana)
  const adansiLocation = {
    lat: 6.4833,
    lng: -1.4167
  };

  // Office location in Tema
  const officeLocation = {
    lat: 5.6698,
    lng: -0.0166
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#00483D] rounded-full px-6 py-3 shadow-lg mb-6">
            <MapPin size={24} className="text-[#FFD700]" />
            <span className="text-lg font-semibold text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}>
              Our Locations
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#00483D] mb-6"
              style={{ fontFamily: "Merriweather, serif" }}>
            Where We Serve
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
             style={{ fontFamily: "Inter, sans-serif" }}>
            From our headquarters in Tema to the communities of Adansi Akrofuom, 
            AADIF is making a difference across Ghana and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Location Information */}
          <div className="space-y-8">
            {/* Office Location */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                  <Building size={24} className="text-[#00483D]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#00483D] mb-2"
                      style={{ fontFamily: "Merriweather, serif" }}>
                    AADIF Headquarters
                  </h3>
                  <p className="text-gray-700 leading-relaxed"
                     style={{ fontFamily: "Inter, sans-serif" }}>
                    Our main office coordinates all foundation activities and serves as 
                    the hub for program management and administrative operations.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#00483D] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-semibold text-[#00483D]"
                       style={{ fontFamily: "Inter, sans-serif" }}>
                      Community 25, Golf Junction<br />
                      Tema, Greater Accra Region, Ghana
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#00483D] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:+233596257623" 
                       className="font-semibold text-[#00483D] hover:underline"
                       style={{ fontFamily: "Inter, sans-serif" }}>
                      +233 596 257 623
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#00483D] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:ramicah007@gmail.com" 
                       className="font-semibold text-[#00483D] hover:underline"
                       style={{ fontFamily: "Inter, sans-serif" }}>
                      ramicah007@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#00483D] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#00483D] mb-2"
                      style={{ fontFamily: "Merriweather, serif" }}>
                    Primary Service Area
                  </h3>
                  <p className="text-gray-700 leading-relaxed"
                     style={{ fontFamily: "Inter, sans-serif" }}>
                    Adansi Akrofuom is our primary focus area where we implement 
                    comprehensive development programs for sustainable community growth.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#00483D] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-[#00483D]"
                       style={{ fontFamily: "Inter, sans-serif" }}>
                      Adansi Akrofuom & Beyond<br />
                      Ghana, West Africa
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00483D] mb-1">50,000+</div>
                    <div className="text-sm text-gray-600">People Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00483D] mb-1">25+</div>
                    <div className="text-sm text-gray-600">Communities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Impact */}
            <div className="bg-gradient-to-r from-[#00483D] to-[#006B5D] text-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#FFD700] mb-4"
                  style={{ fontFamily: "Merriweather, serif" }}>
                Regional Impact
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                While our headquarters is in Tema and our primary focus is Adansi Akrofuom, 
                our impact extends throughout Ghana and West Africa through partnerships, 
                knowledge sharing, and collaborative development initiatives.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-[#FFD700]">Ghana</div>
                  <div className="text-sm text-gray-300">Primary Operations</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#FFD700]">West Africa</div>
                  <div className="text-sm text-gray-300">Regional Partnerships</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#FFD700]">Global</div>
                  <div className="text-sm text-gray-300">International Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-[#00483D] text-white">
              <h3 className="text-xl font-bold text-[#FFD700] mb-2"
                  style={{ fontFamily: "Merriweather, serif" }}>
                Find Us on the Map
              </h3>
              <p className="text-gray-200 text-sm"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                Interactive map showing our locations across Ghana
              </p>
            </div>
            
            // Paste your new iframe code here
<div className="h-96">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31759.634803814264!2d-0.0032565!3d5.7197157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10208106e56c9bed%3A0xd17b59abf78dcebd!2sCommunity%2025%20junction!5e0!3m2!1sen!2sgh!4v1759010734301!5m2!1sen!2sgh" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
</div>
            <div className="p-4 bg-gray-50">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">AADIF Locations</span>
                </div>
                <p className="text-gray-600"
                   style={{ fontFamily: "Inter, sans-serif" }}>
                  Click markers for more information
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#00483D] mb-4"
              style={{ fontFamily: "Merriweather, serif" }}>
            Visit Us or Get Directions
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Planning to visit our office or communities we serve? Contact us for directions, 
            meeting arrangements, or to schedule a community tour.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://maps.google.com/?q=Community+25+Golf+Junction+Tema+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00483D] hover:bg-[#003830] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <MapPin size={20} />
              Get Directions
            </a>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-[#00483D] text-[#00483D] hover:bg-[#00483D] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Phone size={20} />
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}