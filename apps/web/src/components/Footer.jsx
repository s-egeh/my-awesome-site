"use client";

import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  Home,
  Building2,
  Bus,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Follow on Facebook" },
    { icon: Twitter, href: "#", label: "Follow on Twitter" },
    { icon: Instagram, href: "#", label: "Follow on Instagram" },
    { icon: Linkedin, href: "#", label: "Connect on LinkedIn" }
  ];

  const quickLinks = [
    { label: "About Us", href: "#mission" },
    { label: "Our Impact", href: "#future-outlook" },
    { label: "Projects", href: "#projects" },
    { label: "Agribusiness", href: "#agribusiness" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "Contact", href: "#contact" }
  ];

  const programs = [
    { label: "Youth Employment", href: "#mission" },
    { label: "Women's Empowerment", href: "#mission" },
    { label: "Educational Opportunities", href: "#mission" },
    { label: "Affordable Housing", href: "#mission" },
    { label: "Community Transport", href: "#projects" },
    { label: "Agricultural Development", href: "#agribusiness" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#00483D] text-white">
      {/* Upcoming Projects Strip */}
      <div className="bg-gradient-to-r from-[#FFD700] to-[#e6c200] text-[#00483D] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-lg font-bold"
                   style={{ fontFamily: "Merriweather, serif" }}>
                Upcoming Projects:
              </div>
              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Home size={16} />
                  <span>Housing Units</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-[#00483D] opacity-30"></div>
                <div className="flex items-center gap-2">
                  <Building2 size={16} />
                  <span>Hotel & Casino</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-[#00483D] opacity-30"></div>
                <div className="flex items-center gap-2">
                  <Bus size={16} />
                  <span>Transport Buses</span>
                </div>
              </div>
            </div>
            <div className="text-sm font-semibold">
              Building the Future Together
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Foundation Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://ucarecdn.com/78aca528-3f52-4084-a895-154e7ae0d8aa/-/format/auto/"
                  alt="AADIF Logo"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#FFD700]"
                      style={{ fontFamily: "Merriweather, serif" }}>
                    AADIF
                  </h3>
                  <p className="text-sm text-gray-300">
                    "The World at Your Service"
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                Adansi Akrofuom Development Initiative Foundation is committed to 
                transforming communities through sustainable development, education, 
                and empowerment programs across Ghana and beyond.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#FFD700] flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    Community 25, Golf Junction<br />
                    Tema, Greater Accra Region, Ghana
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#FFD700] flex-shrink-0" />
                  <a href="tel:+233596257623" 
                     className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors">
                    +233 596 257 623
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#FFD700] flex-shrink-0" />
                  <a href="mailto:ramicah007@gmail.com" 
                     className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors">
                    ramicah007@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-[#FFD700] mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors cursor-pointer flex items-center gap-2 group"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Programs */}
            <div>
              <h4 className="text-lg font-semibold text-[#FFD700] mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}>
                Our Programs
              </h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(program.href)}
                      className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors cursor-pointer flex items-center gap-2 group"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {program.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Newsletter */}
      <div className="border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media Links */}
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-300 font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                Follow Us:
              </span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white bg-opacity-10 hover:bg-[#FFD700] text-gray-300 hover:text-[#00483D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => scrollToSection('#donate')}
                className="bg-[#FFD700] hover:bg-[#e6c200] text-[#00483D] font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Heart size={16} />
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-black bg-opacity-20 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left"
                 style={{ fontFamily: "Inter, sans-serif" }}>
              © 2025 Adansi Akrofuom Development Initiative Foundation — All Rights Reserved
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#FFD700] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}