import { useState } from 'react'
import { Download } from 'lucide-react'

const About = () => {
  const [activeTab, setActiveTab] = useState('biography')

  const tabs = [
    { id: 'biography', label: 'Biography' },
    { id: 'skills', label: 'Skills & Tech' },
    { id: 'experience', label: 'Experience' },
  ]

  const coreTech = [
    { name: 'React', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Tailwind', color: '#38B2AC' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'Figma', color: '#F24E1E' },
  ]

  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-center w-full pt-8 pb-8">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Image & Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Profile Image Card */}
            <div className="glass-panel glass-highlight rounded-[2rem] p-4 flex flex-col gap-4 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div 
                className="aspect-[4/5] w-full rounded-[1.5rem] bg-center bg-cover bg-no-repeat relative overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: 'url("/tegene2.jpg")'
                }}
                role="img"
                aria-label="Tegene Wondimu - Professional portrait"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 mb-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-medium text-primary tracking-wide uppercase">Open to work</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Tegene Wondimu</h3>
                  <p className="text-white/60 text-sm mt-1">Full Stack Developer & UI Designer</p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="glass-panel rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors group">
                <span className="text-3xl font-black text-white group-hover:text-primary transition-colors">05+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Years</span>
              </div>
              <div className="glass-panel rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors group">
                <span className="text-3xl font-black text-white group-hover:text-primary transition-colors">42</span>
                <span className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Projects</span>
              </div>
              <div className="glass-panel rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors group">
                <span className="material-symbols-outlined text-3xl text-white group-hover:text-primary transition-colors mb-1">code</span>
                <span className="text-[10px] uppercase tracking-widest text-white/50">Infinite</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Header Text */}
            <div className="glass-panel rounded-[2rem] p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex flex-col gap-2 relative z-10">
                <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-white">
                  Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Code.</span>
                </h1>
                <p className="text-lg lg:text-xl text-white/70 font-light mt-4 leading-relaxed max-w-2xl">
                  Exploring the intersection of design and technology. I build digital experiences that are not only functional but visually immersive.
                </p>
              </div>

              {/* Tabs Navigation */}
              <div className="flex flex-wrap gap-2 mt-8 border-b border-white/10 pb-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setActiveTab(tab.id)
                      }
                    }}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark ${
                      activeTab === tab.id
                        ? 'bg-white/10 text-white border border-transparent hover:border-white/10'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                    aria-pressed={activeTab === tab.id}
                    aria-controls={`tab-panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content Area */}
              <div className="mt-8 space-y-6">
                {activeTab === 'biography' && (
                  <div role="tabpanel" id="tab-panel-biography" aria-labelledby="tab-biography">
                    <div className="space-y-4">
                      <p className="text-white/80 leading-relaxed font-light">
                        I started my journey 5 years ago tinkering with HTML & CSS in a college dorm room. Since then, I've had the privilege of building software for a <span className="text-primary font-medium">fintech startup</span>, a <span className="text-primary font-medium">creative agency</span>, and contributing to open-source projects.
                      </p>
                      <p className="text-white/80 leading-relaxed font-light">
                        My main focus these days is building accessible, inclusive products and digital experiences at <span className="border-b border-primary/50 text-white font-medium">Upstatement</span> for a variety of clients.
                      </p>
                    </div>

                    {/* Mini Skill Cloud */}
                    <div className="pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Core Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {coreTech.map((tech) => (
                          <span
                            key={tech.name}
                            className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white/80 text-xs font-medium flex items-center gap-2"
                          >
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }}></span>
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="space-y-4" role="tabpanel" id="tab-panel-skills" aria-labelledby="tab-skills">
                    <p className="text-white/80 leading-relaxed font-light">
                      I specialize in modern web technologies with a focus on React, TypeScript, and Next.js. My expertise spans from frontend UI/UX design to full-stack development.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'Figma', 'GraphQL', 'PostgreSQL'].map((skill) => (
                        <div key={skill} className="glass-panel rounded-xl p-4 text-center">
                          <span className="text-white font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-6" role="tabpanel" id="tab-panel-experience" aria-labelledby="tab-experience">
                    <div className="glass-panel rounded-xl p-6">
                      <h3 className="text-white font-bold text-lg mb-2">Full Stack Developer</h3>
                      <p className="text-primary text-sm mb-2">Upstatement • 2022 - Present</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Building accessible, inclusive products and digital experiences for a variety of clients.
                      </p>
                    </div>
                    <div className="glass-panel rounded-xl p-6">
                      <h3 className="text-white font-bold text-lg mb-2">Frontend Engineer</h3>
                      <p className="text-primary text-sm mb-2">Creative Agency • 2020 - 2022</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Developed modern web applications using React and TypeScript for various client projects.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom CTA Card */}
            <div className="glass-panel rounded-[2rem] p-6 lg:px-10 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Curious about the details?</h3>
                  <p className="text-white/50 text-sm">Download my resume to see the full timeline.</p>
                </div>
              </div>
              <a
                href="/resume.pdf"
                download="Tegene_Wondimu_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-200 text-black font-bold rounded-full transition-all active:scale-95 w-full md:w-auto justify-center group"
              >
                <span>Download Resume</span>
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
