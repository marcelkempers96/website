'use client';

import { useState } from 'react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      title: "Marimap",
      subtitle: "Interactive Marine Ecosystem Platform",
      description: "Interactive platform for mapping, monitoring and reporting on marine ecosystems. Brings together in-situ data, geospatial layers and reporting, making data more accessible and promoting informed decision making.",
      features: [
        "Coral Reef monitoring with benthic surveys",
        "Mangrove growth and biodiversity tracking", 
        "Extensible to other marine ecosystems",
        "Standard APIs and integrations"
      ],
      image: "/marimap-image.png",
      fallbackIcon: "🗺️",
      link: "https://marimap.reef.support/"
    },
    {
      title: "R&D BlueTech",
      subtitle: "AI-Powered Marine Solutions",
      description: "Software that supports coastal activities worldwide for a responsible and sustainable blue future. We use AI, satellite, and in-situ data to enable informed decision-making in marine conservation.",
      features: [
        "OpenCoralAI for coral reef analysis",
        "MangroveAI for ecosystem monitoring",
        "Coral Reef Fruitpunch AI Hackathons",
        "3D Photogrammetry solutions"
      ],
      image: "/rd-bluetech-image.png",
      fallbackIcon: "🤖",
      link: "#contact"
    },
    {
      title: "Reef Ranger",
      subtitle: "Citizen Science Tourism",
      description: "A unique opportunity to explore destinations around the world while learning and contributing directly to marine conservation. Join our global network of conservation projects.",
      features: [
        "Hands-on marine research experience",
        "Global network of conservation projects",
        "Educational diving programs",
        "24/7 travel support"
      ],
      image: "/reef-ranger-image.webp",
      fallbackIcon: "🌊",
      link: "#contact"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-[#7891C1]/10">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Three powerful tools for marine ecosystem monitoring and conservation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {services.map((service, index) => (
            <div key={index} className={`group relative h-full transition-all duration-500 ${
              expandedCard !== null && expandedCard !== index 
                ? 'lg:col-span-3' 
                : expandedCard === index 
                  ? 'lg:col-span-6' 
                  : index === 0 
                    ? 'lg:col-span-4' 
                    : 'lg:col-span-4'
            }`}>
              <div
                className="block h-full cursor-pointer"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCardClick(index)}
              >
                <div 
                  className={`p-8 rounded-3xl ocean-shadow-lg transition-all duration-500 border h-full flex flex-col ${
                    expandedCard === index
                      ? 'bg-gradient-to-br from-[#7891C1]/20 to-[#4268A9]/20 border-[#4268A9] ring-4 ring-[#4268A9] ring-opacity-70 scale-105'
                      : expandedCard !== null
                        ? 'bg-white border-[#7891C1]/30 hover:border-[#4268A9] hover:ocean-shadow-xl hover:-translate-y-1 cursor-pointer'
                        : 'bg-white border-[#7891C1]/20 hover:border-[#4268A9] hover:ocean-shadow-xl hover:-translate-y-2'
                  } ${
                    hoveredCard === index && expandedCard !== index
                      ? 'ocean-shadow-xl scale-105' 
                      : ''
                  }`}
                  style={{
                    transform: hoveredCard === index 
                      ? `scale(1.05) translate(${(mousePosition.x - 200) * 0.02}px, ${(mousePosition.y - 200) * 0.02}px)` 
                      : undefined
                  }}
                >
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-[#4268A9] to-[#7891C1] bg-clip-text text-transparent mb-6">
                    {service.subtitle}
                  </h4>
                  <div className="mb-6 text-center group-hover:scale-110 transition-transform duration-300 px-4">
                    <img 
                      src={service.image} 
                      alt={`${service.title} image`}
                      className={`w-full object-cover rounded-2xl transition-all duration-500 ${
                        expandedCard === index ? 'h-80' : 'h-48'
                      }`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="text-6xl hidden" style={{display: 'none'}}>
                      {service.fallbackIcon}
                    </div>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <h5 className="font-semibold text-slate-800 mb-4 text-lg">Key Features:</h5>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#4268A9] to-[#7891C1] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
