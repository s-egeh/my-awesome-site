import Header from "../components/Header";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import FutureOutlook from "../components/FutureOutlook";
import Testimonials from "../components/Testimonials";
import Transport from "../components/Transport";
import Infrastructure from "../components/Infrastructure";
import Agribusiness from "../components/Agribusiness";
import Leadership from "../components/Leadership";
import Location from "../components/Location";
import Footer from "../components/Footer";
import FloatingDonate from "../components/FloatingDonate";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import VolunteerSection from "../components/VolunteerSection";
import DonateModal from "../components/DonateModal";

export const metadata = {
  title: "AADIF - The World at Your Service | Adansi Akrofuom Development Initiative Foundation",
  description: "Building Communities, Empowering Futures. AADIF is committed to sustainable community development through youth employment, women's empowerment, education, agribusiness, and affordable housing initiatives.",
  keywords: "AADIF, community development, Ghana, Adansi Akrofuom, youth employment, women empowerment, education, agribusiness, affordable housing",
  openGraph: {
    title: "AADIF - The World at Your Service",
    description: "Building Communities, Empowering Futures through sustainable development initiatives.",
    type: "website",
    locale: "en_US",
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Mission & Core Objectives */}
      <Mission />

      {/* Future Outlook */}
      <FutureOutlook />

      {/* Agribusiness Section */}
      <Agribusiness />

      {/* Community Infrastructure Projects */}
      <Infrastructure />

      {/* Transport for Community */}
      <Transport />

      {/* Testimonials */}
      <Testimonials />

      {/* Leadership & Contact */}
      <Leadership />

      {/* Volunteer Section */}
      <VolunteerSection />

      {/* Location */}
      <Location />

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <FloatingDonate />
      <FloatingWhatsApp />
      <DonateModal />
    </div>
  );
}