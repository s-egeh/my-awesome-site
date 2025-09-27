"use client";

import { useState, useEffect } from "react";
import { 
  X, 
  Heart, 
  Smartphone, 
  CreditCard, 
  Copy, 
  Check,
  Star,
  Phone
} from "lucide-react";

export default function DonateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState({});

  useEffect(() => {
    const handleShowModal = () => setIsOpen(true);
    window.addEventListener('showDonateModal', handleShowModal);
    
    return () => window.removeEventListener('showDonateModal', handleShowModal);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const copyToClipboard = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus(prev => ({ ...prev, [key]: true }));
      
      // Reset after 2 seconds
      setTimeout(() => {
        setCopyStatus(prev => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-[#00483D] to-[#006B5D] text-white p-6 rounded-t-2xl">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center">
              <Heart size={24} className="text-[#00483D]" fill="currentColor" />
            </div>
            <div>
              <h2 className="text-xl font-bold"
                  style={{ fontFamily: "Merriweather, serif" }}>
                Support Our Mission
              </h2>
              <p className="text-gray-200 text-sm"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                Every donation makes a difference
              </p>
            </div>
          </div>
          
          <p className="text-gray-200 text-sm leading-relaxed"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Your generous contribution helps us continue our work in community development, 
            education, and empowerment across Ghana.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-[#00483D] mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}>
            Choose Your Donation Method
          </h3>

          <div className="space-y-4">
            {/* Mobile Money - POPULAR */}
            <div className="relative border-2 border-[#FFD700] rounded-lg p-4 bg-gradient-to-br from-[#FFD700] from-0% via-transparent via-10% to-transparent">
              {/* Popular Badge */}
              <div className="absolute -top-2 left-4 bg-[#FFD700] text-[#00483D] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Star size={12} fill="currentColor" />
                POPULAR
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00483D] rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#00483D] mb-2"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                    Mobile Money
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone Number</p>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[#00483D] font-semibold">
                          +233596257623
                        </span>
                        <button
                          onClick={() => copyToClipboard('+233596257623', 'momo-number')}
                          className="p-2 bg-[#00483D] bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-colors"
                          aria-label="Copy phone number"
                        >
                          {copyStatus['momo-number'] ? (
                            <Check size={16} className="text-green-600" />
                          ) : (
                            <Copy size={16} className="text-[#00483D]" />
                          )}
                        </button>
                        <button
                          onClick={() => handleCall('+233596257623')}
                          className="p-2 bg-[#00483D] bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-colors"
                          aria-label="Call number"
                        >
                          <Phone size={16} className="text-[#00483D]" />
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Recipient Name</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#00483D]">
                          Robert A Micah
                        </span>
                        <button
                          onClick={() => copyToClipboard('Robert A Micah', 'momo-name')}
                          className="p-2 bg-[#00483D] bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-colors"
                          aria-label="Copy recipient name"
                        >
                          {copyStatus['momo-name'] ? (
                            <Check size={16} className="text-green-600" />
                          ) : (
                            <Copy size={16} className="text-[#00483D]" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  ✓ Instant transfer • No fees • Available 24/7
                </p>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="border border-gray-200 rounded-lg p-4 hover:border-[#00483D] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard size={24} className="text-[#00483D]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#00483D] mb-2"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                    Bank Transfer
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Bank Name</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#00483D]">
                          Ecobank (Main Branch, Ghana)
                        </span>
                        <button
                          onClick={() => copyToClipboard('Ecobank (Main Branch, Ghana)', 'bank-name')}
                          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          aria-label="Copy bank name"
                        >
                          {copyStatus['bank-name'] ? (
                            <Check size={16} className="text-green-600" />
                          ) : (
                            <Copy size={16} className="text-[#00483D]" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Account Number</p>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[#00483D] font-semibold">
                          1441000218944
                        </span>
                        <button
                          onClick={() => copyToClipboard('1441000218944', 'account-number')}
                          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          aria-label="Copy account number"
                        >
                          {copyStatus['account-number'] ? (
                            <Check size={16} className="text-green-600" />
                          ) : (
                            <Copy size={16} className="text-[#00483D]" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Account Name</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#00483D]">
                          Robert A Micah
                        </span>
                        <button
                          onClick={() => copyToClipboard('Robert A Micah', 'account-name')}
                          className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          aria-label="Copy account name"
                        >
                          {copyStatus['account-name'] ? (
                            <Check size={16} className="text-green-600" />
                          ) : (
                            <Copy size={16} className="text-[#00483D]" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 Please include "AADIF Donation" in the transfer reference
                </p>
              </div>
            </div>
          </div>

          {/* Copy Feedback */}
          {Object.values(copyStatus).some(status => status) && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
              <Check size={16} className="text-green-600" />
              <span className="text-sm text-green-800 font-medium">
                Copied to clipboard!
              </span>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-[#00483D] mb-3"
                style={{ fontFamily: "Inter, sans-serif" }}>
              Your Impact
            </h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#00483D]">GH₵50</div>
                <div className="text-xs text-gray-600">Feeds 10 children</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#00483D]">GH₵200</div>
                <div className="text-xs text-gray-600">School supplies</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 p-4 bg-[#00483D] bg-opacity-5 rounded-lg">
            <p className="text-sm text-gray-700 text-center"
               style={{ fontFamily: "Inter, sans-serif" }}>
              Questions about donations? Contact us at{" "}
              <a href="mailto:ramicah007@gmail.com" className="text-[#00483D] hover:underline font-semibold">
                ramicah007@gmail.com
              </a>{" "}
              or{" "}
              <a href="tel:+233596257623" className="text-[#00483D] hover:underline font-semibold">
                +233 596 257 623
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}