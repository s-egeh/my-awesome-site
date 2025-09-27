"use client";

import { 
  Target, 
  TrendingUp, 
  Users2, 
  Award 
} from "lucide-react";

export default function FutureOutlook() {
  const goals = [
    {
      icon: Target,
      title: "Partnerships",
      description: "Build strategic alliances with local and international organizations to amplify our impact and reach more communities.",
      stats: "50+ Strategic Partners"
    },
    {
      icon: TrendingUp,
      title: "Innovation & Growth",
      description: "Leverage technology and innovative approaches to scale our programs and create sustainable solutions for community challenges.",
      stats: "10x Impact Multiplier"
    },
    {
      icon: Users2,
      title: "Community Engagement",
      description: "Foster active participation from community members to ensure locally-driven development that meets real needs.",
      stats: "10,000+ Lives Touched"
    },
    {
      icon: Award,
      title: "Lasting Legacy",
      description: "Create sustainable institutions and programs that will continue to benefit future generations long after initial implementation.",
      stats: "Generational Impact"
    }
  ];

  return (
    <section id="future-outlook" className="py-20 bg-[#00483D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFD700]"
              style={{ fontFamily: "Merriweather, serif" }}>
            Future Outlook
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Our vision for the next decade focuses on sustainable growth, innovative solutions, 
            and creating lasting positive change in Adansi Akrofuom and beyond.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {goals.map((goal, index) => {
            const IconComponent = goal.icon;
            return (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={32} className="text-[#00483D]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-[#FFD700]"
                    style={{ fontFamily: "Inter, sans-serif" }}>
                  {goal.title}
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm mb-4"
                   style={{ fontFamily: "Inter, sans-serif" }}>
                  {goal.description}
                </p>
                
                {/* Stats */}
                <div className="text-[#FFD700] font-semibold text-sm"
                     style={{ fontFamily: "Inter, sans-serif" }}>
                  {goal.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFD700]"
                style={{ fontFamily: "Merriweather, serif" }}>
              Our Vision for 2035
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8"
               style={{ fontFamily: "Inter, sans-serif" }}>
              By 2035, Adansi Akrofuom will be a thriving hub of sustainable development, 
              where every community member has access to quality education, healthcare, employment opportunities, 
              and modern infrastructure. Our integrated approach will have transformed the region into a model 
              of community-driven development that inspires similar initiatives across Ghana and West Africa.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
                  2,000+
                </div>
                <div className="text-gray-200 text-sm"
                     style={{ fontFamily: "Inter, sans-serif" }}>
                  Housing Units Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
                  10,000+
                </div>
                <div className="text-gray-200 text-sm"
                     style={{ fontFamily: "Inter, sans-serif" }}>
                  Jobs Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
                  50,000+
                </div>
                <div className="text-gray-200 text-sm"
                     style={{ fontFamily: "Inter, sans-serif" }}>
                  Lives Impacted
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-[#FFD700]"
              style={{ fontFamily: "Merriweather, serif" }}>
            Be Part of Our Journey
          </h3>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Together, we can transform communities and create lasting change. 
            Join us in building a brighter future for Adansi Akrofuom.
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
              Support Our Vision
            </button>
            <button 
              onClick={() => {
                const element = document.querySelector('#volunteer');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#00483D] font-semibold py-3 px-8 rounded-full transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}