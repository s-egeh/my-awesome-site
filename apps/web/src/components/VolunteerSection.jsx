"use client";

import { useState } from "react";
import { 
  Heart, 
  Users, 
  HandHeart, 
  CheckCircle,
  AlertCircle,
  Loader
} from "lucide-react";

export default function VolunteerSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset form status
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      errorMessage: ''
    });

    // Validate form
    if (!formData.name || !formData.email || !formData.message || !formData.consent) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Please fill in all required fields and accept the consent.'
      });
      return;
    }

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xeorjlvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `New Volunteer Application from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          errorMessage: ''
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          consent: false
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'There was an error submitting your application. Please try again.'
      });
    }
  };

  const opportunities = [
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Help with feeding programs, health initiatives, and community events.",
      commitment: "4-8 hours/week"
    },
    {
      icon: Users,
      title: "Educational Support",
      description: "Assist with teaching, tutoring, and educational program development.",
      commitment: "6-10 hours/week"
    },
    {
      icon: HandHeart,
      title: "Administrative Support",
      description: "Help with office work, communications, and program coordination.",
      commitment: "2-6 hours/week"
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-br from-[#00483D] to-[#006B5D]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white bg-opacity-10 rounded-full px-6 py-3 backdrop-blur-sm mb-6">
            <Heart size={24} className="text-[#FFD700]" />
            <span className="text-lg font-semibold text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}>
              Join Our Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFD700]"
              style={{ fontFamily: "Merriweather, serif" }}>
            Volunteer With AADIF
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Make a meaningful impact in your community. Join our dedicated team of volunteers 
            working to transform lives and build a better future for Adansi Akrofuom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Volunteer Opportunities */}
          <div>
            <h3 className="text-2xl font-bold text-[#FFD700] mb-8"
                style={{ fontFamily: "Merriweather, serif" }}>
              Volunteer Opportunities
            </h3>
            
            <div className="space-y-6 mb-8">
              {opportunities.map((opportunity, index) => {
                const IconComponent = opportunity.icon;
                return (
                  <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent size={24} className="text-[#00483D]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2"
                            style={{ fontFamily: "Inter, sans-serif" }}>
                          {opportunity.title}
                        </h4>
                        <p className="text-gray-200 text-sm mb-3"
                           style={{ fontFamily: "Inter, sans-serif" }}>
                          {opportunity.description}
                        </p>
                        <div className="inline-flex items-center gap-2 bg-[#FFD700] bg-opacity-20 rounded-full px-3 py-1">
                          <span className="text-[#FFD700] text-xs font-medium">
                            {opportunity.commitment}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Benefits of Volunteering */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-lg font-semibold text-[#FFD700] mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}>
                Benefits of Volunteering
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#FFD700] flex-shrink-0" />
                  <span>Community Impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#FFD700] flex-shrink-0" />
                  <span>Skill Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#FFD700] flex-shrink-0" />
                  <span>Networking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#FFD700] flex-shrink-0" />
                  <span>Personal Growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Application Form */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#00483D] mb-6"
                style={{ fontFamily: "Merriweather, serif" }}>
              Apply to Volunteer
            </h3>
            
            {/* Success Message */}
            {formStatus.isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-medium">Application Submitted!</p>
                  <p className="text-green-700 text-sm">
                    Thanks — your volunteer request has been received! We'll contact you soon.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {formStatus.isError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-medium">Submission Error</p>
                  <p className="text-red-700 text-sm">{formStatus.errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#00483D] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00483D] focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                  disabled={formStatus.isSubmitting}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#00483D] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00483D] focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                  disabled={formStatus.isSubmitting}
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#00483D] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00483D] focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                  disabled={formStatus.isSubmitting}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#00483D] mb-2">
                  Why do you want to volunteer? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00483D] focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us about your interests, skills, and availability..."
                  disabled={formStatus.isSubmitting}
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 text-[#00483D] focus:ring-[#00483D] border-gray-300 rounded"
                  disabled={formStatus.isSubmitting}
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  I consent to AADIF contacting me about volunteer opportunities and understand 
                  that my personal information will be used in accordance with the foundation's privacy policy. *
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className="w-full bg-[#00483D] hover:bg-[#003830] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {formStatus.isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Heart size={20} />
                    Submit Application
                  </>
                )}
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                Questions about volunteering? Contact us at{" "}
                <a href="mailto:ramicah007@gmail.com" className="text-[#00483D] hover:underline">
                  ramicah007@gmail.com
                </a>{" "}
                or call{" "}
                <a href="tel:+233596257623" className="text-[#00483D] hover:underline">
                  +233 596 257 623
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}