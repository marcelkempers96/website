export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Ocean gradient overlay */}
      <div className="absolute inset-0 ocean-gradient opacity-60"></div>
      <div className="absolute inset-0 wave-pattern"></div>
      
      
      <div className="relative z-10 py-32 lg:py-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Tools for Marine
              <span className="block bg-gradient-to-r from-[#E6F0FF] to-[#F0F8FF] bg-clip-text text-transparent">
                Ecosystem Monitoring
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto font-light">
              Unlocking the power of data for decisions that matter
            </p>
            
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contact"
                className="bg-white text-[#4268A9] px-10 py-4 rounded-full font-semibold hover:bg-[#7891C1]/10 transition-all duration-300 ocean-shadow-lg hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Our Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
