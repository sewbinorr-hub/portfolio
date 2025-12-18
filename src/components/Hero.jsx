import ProfileCard from './ProfileCard'

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
      {/* Left Column: Typography & Actions */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:order-1 order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Available for freelance
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
          Crafting <br />
          <span className="text-gradient">Digital</span> <br />
          <span className="text-white relative inline-block pr-6">
            Experiences
            <span className="text-primary text-6xl leading-none absolute -right-2 sm:-right-4 bottom-2">.</span>
          </span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-lg font-light leading-relaxed">
          I build accessible, pixel-perfect, and performant web applications that blend aesthetic with functionality.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
          <a
            href="#work"
            className="flex items-center gap-2 h-12 px-8 rounded-full bg-white text-black hover:bg-gray-200 text-base font-bold transition-transform hover:scale-105"
          >
            <span>View Projects</span>
            <span className="material-symbols-outlined text-lg">arrow_outward</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 h-12 px-8 rounded-full border border-white/20 hover:bg-white/5 text-white text-base font-medium transition-colors backdrop-blur-sm"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Tech Stack Ticker */}
        <div className="mt-12 pt-8 border-t border-white/5 w-full">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-bold">
            Powering Next-Gen Apps With
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <TechIcon icon="code_blocks" title="React" />
            <TechIcon icon="css" title="Tailwind" />
            <TechIcon icon="deployed_code" title="NextJS" />
            <TechIcon icon="design_services" title="Figma" />
          </div>
        </div>
      </div>

      {/* Right Column: 3D Glass Card */}
      <div className="relative w-full flex justify-center lg:justify-end lg:order-2 order-1">
        <ProfileCard />
      </div>
    </div>
  )
}

const TechIcon = ({ icon, title }) => {
  return (
    <span 
      className="material-symbols-outlined text-3xl cursor-help" 
      title={title}
      aria-label={title}
    >
      {icon}
    </span>
  )
}

export default Hero
