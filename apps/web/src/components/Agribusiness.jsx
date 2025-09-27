"use client";

import { useState } from "react";
import { 
  Factory, 
  Beef, 
  Wheat, 
  Settings, 
  TrendingUp, 
  Globe,
  DollarSign,
  Clock
} from "lucide-react";

export default function Agribusiness() {
  const [selectedTab, setSelectedTab] = useState('processing');

  const processingPlants = [
    {
      name: "Fruit Juice Processing",
      description: "State-of-the-art facility for processing locally grown fruits into high-quality juices for domestic and export markets.",
      capacity: "10,000L/day",
      products: ["Mango Juice", "Pineapple Juice", "Orange Juice", "Mixed Fruit Blends"],
      investment: "$2.5M"
    },
    {
      name: "Coconut Processing",
      description: "Comprehensive coconut processing facility producing oil, milk, flour, and value-added coconut products.",
      capacity: "5,000 nuts/day",
      products: ["Coconut Oil", "Coconut Milk", "Coconut Flour", "Desiccated Coconut"],
      investment: "$1.8M"
    }
  ];

  const livestock = [
    {
      type: "Poultry Farming",
      description: "Modern poultry facilities with automated feeding and climate control systems.",
      capacity: "50,000 birds",
      icon: "🐔"
    },
    {
      type: "Cattle Ranching",
      description: "Sustainable cattle ranching with rotational grazing and modern veterinary care.",
      capacity: "2,000 head",
      icon: "🐄"
    },
    {
      type: "Sheep & Goats",
      description: "Small ruminant farming focused on meat production and breeding programs.",
      capacity: "5,000 animals",
      icon: "🐐"
    }
  ];

  const cropPlantations = [
    {
      name: "Mango Plantation",
      area: "500 hectares",
      yield: "15,000 tons/year",
      varieties: ["Keitt", "Kent", "Tommy Atkins"],
      icon: "🥭"
    },
    {
      name: "Cashew Plantation",
      area: "300 hectares",
      yield: "1,200 tons/year",
      varieties: ["Brazilian Dwarf", "Indian Selection"],
      icon: "🌰"
    },
    {
      name: "Pineapple Farm",
      area: "200 hectares",
      yield: "8,000 tons/year",
      varieties: ["MD2", "Smooth Cayenne"],
      icon: "🍍"
    },
    {
      name: "Guava Orchards",
      area: "150 hectares",
      yield: "3,000 tons/year",
      varieties: ["Pink Supreme", "White Indonesian"],
      icon: "🍈"
    }
  ];

  const tabs = [
    { id: 'processing', label: 'Processing Plants', icon: Factory },
    { id: 'livestock', label: 'Livestock & Poultry', icon: Beef },
    { id: 'crops', label: 'Crop Plantations', icon: Wheat },
    { id: 'mechanization', label: 'Mechanization', icon: Settings }
  ];

  const mechanizationEquipment = [
    {
      name: "Tractors & Implements",
      description: "Modern tractors with various implements for land preparation, planting, and harvesting.",
      quantity: "25 units",
      impact: "5,000 hectares served"
    },
    {
      name: "Irrigation Systems",
      description: "Drip and sprinkler irrigation systems for efficient water management.",
      coverage: "1,200 hectares",
      impact: "40% water savings"
    },
    {
      name: "Harvesting Equipment",
      description: "Specialized harvesting machines for different crops to reduce post-harvest losses.",
      quantity: "15 units",
      impact: "25% loss reduction"
    },
    {
      name: "Storage Facilities",
      description: "Climate-controlled storage and cold chain facilities for produce preservation.",
      capacity: "5,000 tons",
      impact: "6 months extended shelf life"
    }
  ];

  return (
    <section id="agribusiness" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00483D] mb-6"
              style={{ fontFamily: "Merriweather, serif" }}>
            Agribusiness Development
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
             style={{ fontFamily: "Inter, sans-serif" }}>
            Transforming Adansi Akrofuom into a leading agribusiness hub through mechanization, 
            processing facilities, and integrated value chains that maximize productivity and exports.
          </p>
        </div>

        {/* Investment Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign size={24} className="text-[#00483D]" />
            </div>
            <h3 className="text-2xl font-bold text-[#00483D] mb-2">$180M</h3>
            <p className="text-gray-600 text-sm">Total Investment</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-[#00483D] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#00483D] mb-2">4 Years</h3>
            <p className="text-gray-600 text-sm">Break-even Timeline</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={24} className="text-[#00483D]" />
            </div>
            <h3 className="text-2xl font-bold text-[#00483D] mb-2">5,000+</h3>
            <p className="text-gray-600 text-sm">Jobs Created</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-[#00483D] rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#00483D] mb-2">15+</h3>
            <p className="text-gray-600 text-sm">Export Markets</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg p-2 shadow-lg">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                  selectedTab === tab.id
                    ? 'bg-[#00483D] text-white shadow-md'
                    : 'text-[#00483D] hover:bg-gray-100'
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <IconComponent size={20} />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {selectedTab === 'processing' && (
            <div>
              <h3 className="text-2xl font-bold text-[#00483D] mb-6"
                  style={{ fontFamily: "Merriweather, serif" }}>
                Food Processing Plants
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {processingPlants.map((plant, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-semibold text-[#00483D]"
                          style={{ fontFamily: "Inter, sans-serif" }}>
                        {plant.name}
                      </h4>
                      <span className="bg-[#FFD700] text-[#00483D] px-3 py-1 rounded-full text-sm font-medium">
                        {plant.investment}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed"
                       style={{ fontFamily: "Inter, sans-serif" }}>
                      {plant.description}
                    </p>
                    <div className="mb-4">
                      <span className="font-semibold text-[#00483D]">Capacity: </span>
                      <span className="text-gray-700">{plant.capacity}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#00483D] mb-2 block">Key Products:</span>
                      <div className="flex flex-wrap gap-2">
                        {plant.products.map((product, i) => (
                          <span key={i} className="bg-green-100 text-[#00483D] px-3 py-1 rounded-full text-sm">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'livestock' && (
            <div>
              <h3 className="text-2xl font-bold text-[#00483D] mb-6"
                  style={{ fontFamily: "Merriweather, serif" }}>
                Livestock & Poultry Operations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {livestock.map((animal, index) => (
                  <div key={index} className="text-center border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="text-6xl mb-4">{animal.icon}</div>
                    <h4 className="text-xl font-semibold text-[#00483D] mb-4"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                      {animal.type}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm"
                       style={{ fontFamily: "Inter, sans-serif" }}>
                      {animal.description}
                    </p>
                    <div className="bg-[#FFD700] bg-opacity-20 rounded-lg p-3">
                      <span className="font-semibold text-[#00483D]">Capacity: </span>
                      <span className="text-gray-700">{animal.capacity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'crops' && (
            <div>
              <h3 className="text-2xl font-bold text-[#00483D] mb-6"
                  style={{ fontFamily: "Merriweather, serif" }}>
                Crop Plantations & Orchards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cropPlantations.map((crop, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-4">{crop.icon}</div>
                    <h4 className="text-lg font-semibold text-[#00483D] mb-3"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                      {crop.name}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Area: </span>
                        <span>{crop.area}</span>
                      </div>
                      <div>
                        <span className="font-medium">Yield: </span>
                        <span>{crop.yield}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="font-medium text-[#00483D] text-sm block mb-2">Varieties:</span>
                      <div className="space-y-1">
                        {crop.varieties.map((variety, i) => (
                          <div key={i} className="bg-green-50 text-[#00483D] px-2 py-1 rounded text-xs">
                            {variety}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'mechanization' && (
            <div>
              <h3 className="text-2xl font-bold text-[#00483D] mb-6"
                  style={{ fontFamily: "Merriweather, serif" }}>
                Agricultural Mechanization Program
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed"
                 style={{ fontFamily: "Inter, sans-serif" }}>
                Our mechanization initiative focuses on integrated value chains for maximum productivity 
                through modern equipment, efficient systems, and technology-driven solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mechanizationEquipment.map((equipment, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-semibold text-[#00483D] mb-3"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                      {equipment.name}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed"
                       style={{ fontFamily: "Inter, sans-serif" }}>
                      {equipment.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#FFD700] bg-opacity-20 rounded-lg p-3 text-center">
                        <div className="font-semibold text-[#00483D] text-sm">
                          {equipment.quantity || equipment.coverage || equipment.capacity}
                        </div>
                        <div className="text-xs text-gray-600">
                          {equipment.quantity ? 'Equipment' : equipment.coverage ? 'Coverage' : 'Capacity'}
                        </div>
                      </div>
                      <div className="bg-green-100 rounded-lg p-3 text-center">
                        <div className="font-semibold text-[#00483D] text-sm">
                          {equipment.impact}
                        </div>
                        <div className="text-xs text-gray-600">Impact</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Implementation Timeline */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#00483D] text-center mb-8"
              style={{ fontFamily: "Merriweather, serif" }}>
            Implementation Roadmap
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border-2 border-[#FFD700] rounded-lg">
              <h4 className="text-lg font-semibold text-[#00483D] mb-2">Years 2-5</h4>
              <p className="text-sm text-gray-600">Agribusiness Processing Plants</p>
            </div>
            <div className="text-center p-6 border-2 border-[#00483D] rounded-lg">
              <h4 className="text-lg font-semibold text-[#00483D] mb-2">Years 3-7</h4>
              <p className="text-sm text-gray-600">Poultry & Livestock Farms</p>
            </div>
            <div className="text-center p-6 border-2 border-[#FFD700] rounded-lg">
              <h4 className="text-lg font-semibold text-[#00483D] mb-2">Years 1-4</h4>
              <p className="text-sm text-gray-600">Crop Plantations</p>
            </div>
            <div className="text-center p-6 border-2 border-[#00483D] rounded-lg">
              <h4 className="text-lg font-semibold text-[#00483D] mb-2">Years 2-6</h4>
              <p className="text-sm text-gray-600">Mechanization Program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}