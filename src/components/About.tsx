export default function About() {
  const team = [
    {
      name: "Marcel Kempers",
      role: "Co-Founder & Director",
      description: "Serial social entrepreneur with a mission of bringing nature-based solutions and international outlook to local communities. After spending time in the Caribbean, he saw how threatened our marine ecosystems are and found that sustainable travel and technology can make a real impact on marine conservation.",
      linkedin: "https://www.linkedin.com/in/marcel-kempers/"
    },
    {
      name: "Yohan Runhaar",
      role: "Co-Founder & CTO",
      description: "Computer scientist with an affinity for artificial intelligence and big data. Having grown up around the globe and been exposed to various ecosystems, he is passionate about applying technology to help nature. At Reef Support he develops novel solutions for marine research.",
      linkedin: "https://www.linkedin.com/in/yohan-runhaar/"
    },
    {
      name: "Nikole Gualdron",
      role: "Marine Science Lead & Co-Director",
      description: "Marine scientist and conservationist, passionate about promoting inclusivity in science. She has experience in marine conservation initiatives across Colombia, Italy, France, and the Philippines. She leads the Reef Ranger Program and supports OpenCoralAI training.",
      linkedin: "https://www.linkedin.com/in/nikole-gualdron-chaparro-887819184/"
    },
    {
      name: "Sofía Pareja",
      role: "Community Manager",
      description: "Passionate diver and graphic designer, graduated from Universidad del Norte in Barranquilla, Colombia. She is convinced that graphic design is one of the most powerful tools to make visible everything that contributes to building a better, more sustainable world.",
      linkedin: "https://www.linkedin.com/in/sof%C3%ADa-pareja-galindo/"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#7891C1]/10 to-[#4268A9]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            About Reef Support
          </h2>
          <p className="text-xl text-slate-600 max-w-5xl mx-auto mb-8 leading-relaxed">
            We are a group of creative thinkers who have built upon a vision to save our oceans. 
            Our mission is to take practical action and support marine conservation and the blue economy 
            with technology, combining AI and satellite data, as well as sustainable travel through 
            the global Reef Rangers travel network.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl ocean-shadow-lg hover:ocean-shadow-xl transition-all duration-300 border border-[#7891C1]/20 hover:border-[#4268A9]">
                <h4 className="text-xl font-bold text-slate-800 mb-3">{member.name}</h4>
                <p className="text-[#4268A9] font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{member.description}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#4268A9] hover:text-[#7891C1] font-medium transition-colors"
                >
                  View LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-8">
              Our Mission
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We turn AI, satellite, and in-situ data into actionable insights for marine conservation, 
              coastal development, and sustainable ocean industries. We help organizations monitor 
              ecosystems more efficiently, make smarter decisions, and accelerate restoration efforts.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-[#4268A9] to-[#7891C1] rounded-full mr-4"></div>
                <span className="text-slate-700 font-medium">AI-powered marine monitoring</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-[#4268A9] to-[#7891C1] rounded-full mr-4"></div>
                <span className="text-slate-700 font-medium">Global conservation network</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-[#4268A9] to-[#7891C1] rounded-full mr-4"></div>
                <span className="text-slate-700 font-medium">Citizen science tourism</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-[#4268A9] to-[#7891C1] rounded-full mr-4"></div>
                <span className="text-slate-700 font-medium">Open source solutions</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#7891C1]/20 to-[#4268A9]/20 p-8 rounded-3xl ocean-shadow-lg border border-[#4268A9]/30">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Partners & Supporters
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We work with leading organizations, universities, and technology companies 
              to advance marine conservation through innovation.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center mb-8">
              <div className="bg-white p-6 rounded-2xl ocean-shadow">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#4268A9] to-[#7891C1] bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-slate-600 font-medium">Partners</div>
              </div>
              <div className="bg-white p-6 rounded-2xl ocean-shadow">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#4268A9] to-[#7891C1] bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-slate-600 font-medium">Awards</div>
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-3 font-medium">Key Partners:</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Universidad Nacional de Colombia • Fruitpunch AI • Indonesia Biru Foundation • 
                WWF • ESA BIC • Amazon Web Services • TU Delft
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
