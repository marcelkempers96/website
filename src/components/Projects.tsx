'use client';

import { useRef, useState } from 'react';

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const projects = [
    {
      title: "OpenCoralAI",
      subtitle: "AI-Powered Coral Analysis",
      description: "Accelerating data analysis and reporting of coral reef health by developing a free, online tool that employs AI to determine live coral cover and address bottlenecks in coral reef monitoring.",
      status: "Ongoing",
      year: "2021-Present",
      collaboration: "Universidad Nacional de Colombia",
      image: "/38004015301.jpg",
      link: "#contact"
    },
    {
      title: "MangroveAI",
      subtitle: "Mangrove Ecosystem Monitoring",
      description: "Developing and combining in-situ observations, advanced remote sensing and computer vision technologies to monitor and conserve mangrove ecosystems.",
      status: "Ongoing",
      year: "2024-Present",
      collaboration: "Indonesia Biru Foundation",
      image: "/67eaaa50e9a94882ca90db3d_ChatGPT Image 31 mrt 2025, 14_08_04-p-800.png",
      link: "#contact"
    },
    {
      title: "Coral Reef Hackathons",
      subtitle: "AI Challenge Series",
      description: "Collaborating with Fruitpunch AI since 2021 as challenge partner for challenges related to coral reef monitoring, exploring underwater image segmentation and ML pipelines.",
      status: "Ongoing",
      year: "2021-Present",
      collaboration: "Fruitpunch AI",
      image: "/614b64126180ec79cfeaa824_1631541529161.jpeg",
      link: "#contact"
    },
    {
      title: "Mussel & Starfish AI",
      subtitle: "Aquaculture Monitoring",
      description: "Automated monitoring and management of mussel health within aquaculture farms using advanced machine learning techniques to analyze underwater imagery.",
      status: "Completed",
      year: "2022-2023",
      collaboration: "Lobster Robotics",
      image: "/b847574d-9c87-40ca-a0d8-1db37792d21d.jpeg",
      link: "#contact"
    },
    {
      title: "3D Photogrammetry",
      subtitle: "Underwater 3D Mapping",
      description: "Exploring how young scientists could help facilitate 3D Photogrammetry procedures with new tools and methodologies for coral reef research.",
      status: "Completed",
      year: "2023",
      collaboration: "WWF & Angela Alegria",
      image: "/6555e825eebcc03678e75dc3_Copy of Photomosaics-p-800.png",
      link: "#contact"
    },
    {
      title: "Algae Monitoring",
      subtitle: "Water Quality Assessment",
      description: "Monitoring and managing water quality by identifying and quantifying algal blooms, which can indicate eutrophication and pose risks to aquatic ecosystems.",
      status: "Completed",
      year: "2024",
      collaboration: "RanMarine Technology & Water Insight",
      image: "/Testing ALgae Netherlands In-Situ.png",
      link: "#contact"
    },
    {
      title: "Coral Segmentation Study",
      subtitle: "A Study of Segmentation Methods for Corals in Benthic Photograph",
      description: "Yohan, CTO of Reef Support, conducted a study to evaluate state-of-the-art methods for coral classification and segmentation. The findings show that patch-based classification, combined with a sliding window algorithm, proves to be an effective approach for identifying coral presence in underwater images.",
      status: "Completed",
      year: "2023",
      collaboration: "University of Amsterdam",
      image: "/Screenshot 2025-09-16 at 01.27.49.png",
      link: "#contact"
    },
    {
      title: "OceanHub Africa Hackathon",
      subtitle: "Coral Classification Challenge",
      description: "OceanHub Africa's vision to inspire ocean-conscious entrepreneurs aligned with our mission. Reef Support was invited to this event by the inspiring organization, contributing to the movement for a more ocean-minded economy.",
      status: "Completed",
      year: "2021",
      collaboration: "OceanHub Africa",
      image: "/619d57043df60b120381b484_IMG_20211107_170320-p-1080.jpeg",
      link: "#contact"
    },
    {
      title: "SOA San Francisco Hackathon",
      subtitle: "Coral Segmentation Challenge",
      description: "Reef Support had the privilege of being the challenge owner of the AI for Coral Bleaching hackathon with Sustainable Ocean Alliance in Sausalito, California. The event brought together bright minds in marine conservation and technology to develop innovative solutions for coral bleaching.",
      status: "Completed",
      year: "2022",
      collaboration: "Sustainable Ocean Alliance & The Nature Conservancy",
      image: "/Screenshot 2025-09-16 at 01.26.53.png",
      link: "#contact"
    },
    {
      title: "Coral Lab in Lombok",
      subtitle: "First Coral Lab in Central Indonesia",
      description: "Reef Support and Indonesia Biru Foundation came together to set up the first coral lab in the Central Indonesia region. The project tapped into new coral reef restoration techniques including micro-fragmentation, assisted evolution and land-based farming. As an open lab, visitors from schools and companies can participate in learning about coral restoration.",
      status: "Completed",
      year: "2021-2022",
      collaboration: "Indonesia Biru Foundation, Houtwerk, Sloos ICT, Soul divers, S4S, Delft Centre for Entrepreneurship, TU Delft, Fátima Delgado PhD",
      image: "/1_csMsk-D2G9_-6PScW1eHpA.jpeg",
      link: "https://www.supporttudelft.nl/project/reef-support?locale=en"
    },
    {
      title: "3D Reef Rugosity Analysis",
      subtitle: "SFM-based Photogrammetry Research",
      description: "Marc Baauw conducted this research as part of his MSc studies in GIMA, a program offered by TU Delft, Wageningen University, Utrecht University, and the University of Twente. His aim was to gain insights into the differences between two rugosity calculation approaches using SFM-based photogrammetry.",
      status: "Completed",
      year: "2022",
      collaboration: "TU Delft, Wageningen University, Utrecht University, University of Twente",
      image: "/64674775961d6e6f972fdc96_Screenshot 2023-05-19 at 17.51.46-p-500.png",
      link: "#contact"
    },
    {
      title: "AI for Coral Reefs",
      subtitle: "Contribution to the UN Ocean Decade",
      description: "In September 2021, Reef Support's vision for strong international coordination and community building of an ocean prediction capacity for the future has led to a science programme submitted to the UN Decade of Ocean Science.",
      status: "Completed",
      year: "2021",
      collaboration: "UN Decade of Ocean Science",
      image: "/614b5bfd1b83b95a0228df55_djkwend.png",
      link: "#contact"
    },
    {
      title: "Plastic Tracker",
      subtitle: "GAN-enhanced Satellite Imagery for Plastic Detection",
      description: "A Simple Tool built on a Complicated model to Track Plastic flows in Waterways. Welcome to Plastic Tracker, a powerful tool at the forefront of combating plastic pollution. Leveraging cutting-edge technologies such as GAN-enhanced satellite imagery, we are developing a robust model capable of detecting plastic debris in oceans, riverways, and lakes worldwide.",
      status: "Completed",
      year: "2023-2024",
      collaboration: "Reef Support",
      image: "/Screenshot 2025-09-16 at 01.39.11.png",
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


  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#7891C1]/10 to-[#4268A9]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Innovative AI and technology solutions for marine conservation and research
          </p>
        </div>

        {/* Decorative dots */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-[#4268A9] rounded-full"></div>
            <div className="w-2 h-2 bg-[#7891C1] rounded-full"></div>
            <div className="w-2 h-2 bg-[#4268A9]/70 rounded-full"></div>
          </div>
        </div>

        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto py-8 px-4 sm:px-6 lg:px-8 scrollbar-black"
        >
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 w-80 group relative">
              <a
                href={project.link}
                className="block h-full"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`bg-white p-8 rounded-3xl ocean-shadow-lg transition-all duration-500 border border-[#7891C1]/20 hover:border-[#4268A9] h-full flex flex-col cursor-pointer ${
                    hoveredCard === index
                      ? 'ocean-shadow-xl scale-105'
                      : 'hover:ocean-shadow-xl'
                  }`}
                  style={{
                    transform: hoveredCard === index
                      ? `scale(1.05) translate(${(mousePosition.x - 160) * 0.02}px, ${(mousePosition.y - 200) * 0.02}px)`
                      : undefined
                  }}
                >
                  <div className="flex items-center justify-end mb-6">
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Ongoing' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {project.status}
                      </span>
                      <p className="text-sm text-slate-500 mt-1">{project.year}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-[#4268A9] to-[#7891C1] bg-clip-text text-transparent mb-4">
                    {project.subtitle}
                  </h4>
                  
                  {/* Project Image */}
                  <div className="mb-4">
                    <img 
                      src={project.image} 
                      alt={`${project.title} project image`}
                      className="w-full aspect-square object-cover rounded-2xl"
                    />
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <p className="text-sm text-slate-500 mb-1">Collaboration:</p>
                    <p className="text-sm font-medium text-slate-700">{project.collaboration}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>


        {/* Scroll indicator */}
        <div className="text-center mt-6">
          <p className="text-sm text-slate-500">
            ← Scroll to explore more projects →
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-black {
          scrollbar-width: thin;
          scrollbar-color: #4268A9 #e0f2fe;
        }
        .scrollbar-black::-webkit-scrollbar {
          height: 4px !important;
        }
        .scrollbar-black::-webkit-scrollbar-track {
          background: #e0f2fe;
          border-radius: 2px;
        }
        .scrollbar-black::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #4268A9, #7891C1);
          border-radius: 2px;
          border: 1px solid #e0f2fe;
        }
        .scrollbar-black::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #7891C1, #4268A9);
        }
      `}</style>
    </section>
  );
}
