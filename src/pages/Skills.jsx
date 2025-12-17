import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const skills = [
  {
    name: 'React',
    level: 95,
    category: 'Frontend',
    icon: 'code',
    bgIcon: 'code_blocks',
    color: 'blue',
    description: 'Component Architecture',
    years: 5,
  },
  {
    name: 'TypeScript',
    level: 90,
    category: 'Frontend',
    icon: 'data_object',
    bgIcon: 'integration_instructions',
    color: 'blue',
    description: 'Strict Typing',
    years: 4,
  },
  {
    name: 'Next.js',
    level: 88,
    category: 'Frontend',
    icon: 'web',
    bgIcon: 'language',
    color: 'blue',
    description: 'Full Stack Framework',
    years: 3,
  },
  {
    name: 'Node.js',
    level: 85,
    category: 'Backend',
    icon: 'javascript',
    bgIcon: 'dns',
    color: 'green',
    description: 'Runtime Environment',
    years: 4,
  },
  {
    name: 'Python',
    level: 85,
    category: 'Backend',
    icon: 'code_off',
    bgIcon: 'terminal',
    color: 'yellow',
    description: 'Scripting & AI',
    years: 5,
  },
  {
    name: 'PostgreSQL',
    level: 80,
    category: 'Backend',
    icon: 'storage',
    bgIcon: 'database',
    color: 'blue',
    description: 'Relational Database',
    years: 3,
  },
  {
    name: 'MongoDB',
    level: 75,
    category: 'Backend',
    icon: 'database',
    bgIcon: 'cloud_sync',
    color: 'green',
    description: 'NoSQL Database',
    years: 2,
  },
  {
    name: 'GraphQL',
    level: 82,
    category: 'Backend',
    icon: 'account_tree',
    bgIcon: 'share',
    color: 'pink',
    description: 'Query Language',
    years: 3,
  },
  {
    name: 'Tailwind CSS',
    level: 98,
    category: 'Frontend',
    icon: 'brush',
    bgIcon: 'style',
    color: 'teal',
    description: 'Utility First',
    years: 4,
  },
  {
    name: 'Figma',
    level: 80,
    category: 'Design',
    icon: 'palette',
    bgIcon: 'design_services',
    color: 'purple',
    description: 'UI/UX Design',
    years: 3,
  },
  {
    name: 'AWS',
    level: 70,
    category: 'DevOps',
    icon: 'cloud',
    bgIcon: 'cloud_circle',
    color: 'orange',
    description: 'Cloud Infrastructure',
    years: 2,
  },
  {
    name: 'Docker',
    level: 75,
    category: 'DevOps',
    icon: 'deployed_code',
    bgIcon: 'view_in_ar',
    color: 'cyan',
    description: 'Containerization',
    years: 3,
  },
  {
    name: 'Git',
    level: 90,
    category: 'DevOps',
    icon: 'commit',
    bgIcon: 'fork_right',
    color: 'orange',
    description: 'Version Control',
    years: 5,
  },
  {
    name: 'Vue.js',
    level: 75,
    category: 'Frontend',
    icon: 'view_module',
    bgIcon: 'widgets',
    color: 'green',
    description: 'Progressive Framework',
    years: 2,
  },
  {
    name: 'Redux',
    level: 85,
    category: 'Frontend',
    icon: 'settings',
    bgIcon: 'tune',
    color: 'purple',
    description: 'State Management',
    years: 4,
  },
  {
    name: 'Jest',
    level: 80,
    category: 'Frontend',
    icon: 'verified',
    bgIcon: 'check_circle',
    color: 'red',
    description: 'Testing Framework',
    years: 3,
  },
  {
    name: 'Express.js',
    level: 85,
    category: 'Backend',
    icon: 'api',
    bgIcon: 'cloud',
    color: 'gray',
    description: 'Web Framework',
    years: 4,
  },
  {
    name: 'Redis',
    level: 70,
    category: 'Backend',
    icon: 'bolt',
    bgIcon: 'flash_on',
    color: 'red',
    description: 'Caching & Sessions',
    years: 2,
  },
]

const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Design']

const SkillCard = ({ skill, colors, index, isVisible }) => {
  const progressRef = useRef(null)

  useEffect(() => {
    if (isVisible && progressRef.current) {
      const progressBar = progressRef.current
      progressBar.style.width = '0%'
      setTimeout(() => {
        progressBar.style.transition = 'width 1s ease-out'
        progressBar.style.width = `${skill.level}%`
      }, index * 50)
    }
  }, [isVisible, skill.level, index])

  return (
    <div
      className="group relative glass-card rounded-xl p-6 flex flex-col justify-between h-52 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(70,236,19,0.1)]"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <span className="material-symbols-outlined text-6xl text-white">{skill.bgIcon}</span>
      </div>
      <div className="z-10 flex justify-between items-start">
        <div className={`${colors.bg} p-3 rounded-full ${colors.text} border ${colors.border} ${colors.shadow} group-hover:scale-110 transition-transform duration-300`}>
          <span className="material-symbols-outlined text-3xl">{skill.icon}</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="px-2 py-1 rounded text-xs font-bold bg-white/5 text-gray-300 border border-white/10">
            {skill.level}%
          </span>
          {skill.years && (
            <span className="text-[10px] text-gray-500">{skill.years}y</span>
          )}
        </div>
      </div>
      <div className="z-10 mt-auto">
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
          {skill.name}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{skill.description}</p>
        <div className="w-full bg-gray-800 h-1.5 mt-4 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className={`${colors.progress} h-full ${colors.progressShadow} rounded-full`}
            style={{ width: isVisible ? `${skill.level}%` : '0%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleCards, setVisibleCards] = useState({})
  const gridRef = useRef(null)

  const filteredSkills = activeFilter === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeFilter)

  // Calculate stats
  const stats = {
    total: skills.length,
    categories: new Set(skills.map(s => s.category)).size,
    avgLevel: Math.round(skills.reduce((sum, s) => sum + s.level, 0) / skills.length),
    topSkill: skills.reduce((top, skill) => skill.level > top.level ? skill : top, skills[0]),
  }

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => ({ ...prev, [entry.target.dataset.index]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = gridRef.current?.querySelectorAll('[data-index]')
    cards?.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [filteredSkills])

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500/30',
        shadow: 'shadow-[0_0_10px_rgba(59,130,246,0.2)]',
        progress: 'bg-blue-500',
        progressShadow: 'shadow-[0_0_10px_rgba(59,130,246,0.5)]',
      },
      green: {
        bg: 'bg-green-500/20',
        text: 'text-green-400',
        border: 'border-green-500/30',
        shadow: 'shadow-[0_0_10px_rgba(34,197,94,0.2)]',
        progress: 'bg-green-500',
        progressShadow: 'shadow-[0_0_10px_rgba(34,197,94,0.5)]',
      },
      purple: {
        bg: 'bg-purple-500/20',
        text: 'text-purple-400',
        border: 'border-purple-500/30',
        shadow: 'shadow-[0_0_10px_rgba(168,85,247,0.2)]',
        progress: 'bg-purple-500',
        progressShadow: 'shadow-[0_0_10px_rgba(168,85,247,0.5)]',
      },
      orange: {
        bg: 'bg-orange-500/20',
        text: 'text-orange-400',
        border: 'border-orange-500/30',
        shadow: 'shadow-[0_0_10px_rgba(249,115,22,0.2)]',
        progress: 'bg-orange-500',
        progressShadow: 'shadow-[0_0_10px_rgba(249,115,22,0.5)]',
      },
      yellow: {
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-400',
        border: 'border-yellow-500/30',
        shadow: 'shadow-[0_0_10px_rgba(234,179,8,0.2)]',
        progress: 'bg-yellow-500',
        progressShadow: 'shadow-[0_0_10px_rgba(234,179,8,0.5)]',
      },
      cyan: {
        bg: 'bg-cyan-500/20',
        text: 'text-cyan-400',
        border: 'border-cyan-500/30',
        shadow: 'shadow-[0_0_10px_rgba(6,182,212,0.2)]',
        progress: 'bg-cyan-500',
        progressShadow: 'shadow-[0_0_10px_rgba(6,182,212,0.5)]',
      },
      teal: {
        bg: 'bg-teal-500/20',
        text: 'text-teal-400',
        border: 'border-teal-500/30',
        shadow: 'shadow-[0_0_10px_rgba(20,184,166,0.2)]',
        progress: 'bg-teal-500',
        progressShadow: 'shadow-[0_0_10px_rgba(20,184,166,0.5)]',
      },
      pink: {
        bg: 'bg-pink-500/20',
        text: 'text-pink-400',
        border: 'border-pink-500/30',
        shadow: 'shadow-[0_0_10px_rgba(236,72,153,0.2)]',
        progress: 'bg-pink-500',
        progressShadow: 'shadow-[0_0_10px_rgba(236,72,153,0.5)]',
      },
      red: {
        bg: 'bg-red-500/20',
        text: 'text-red-400',
        border: 'border-red-500/30',
        shadow: 'shadow-[0_0_10px_rgba(239,68,68,0.2)]',
        progress: 'bg-red-500',
        progressShadow: 'shadow-[0_0_10px_rgba(239,68,68,0.5)]',
      },
      gray: {
        bg: 'bg-gray-500/20',
        text: 'text-gray-400',
        border: 'border-gray-500/30',
        shadow: 'shadow-[0_0_10px_rgba(107,114,128,0.2)]',
        progress: 'bg-gray-500',
        progressShadow: 'shadow-[0_0_10px_rgba(107,114,128,0.5)]',
      },
    }
    return colors[color] || colors.blue
  }

  return (
    <>
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="blob bg-purple-900 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 mix-blend-screen animate-pulse"></div>
        <div className="blob bg-blue-900 w-[500px] h-[500px] rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3 mix-blend-screen opacity-40"></div>
        <div className="blob bg-cyan-900/40 w-80 h-80 rounded-full top-1/3 right-1/4 mix-blend-screen"></div>
      </div>

      {/* Decorative Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

      <main className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 sm:px-8 pt-28 pb-16 w-full max-w-[1280px] mx-auto">
        {/* Hero Section for Skills */}
        <div className="w-full">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Technical Expertise
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              My <span className="text-gradient">Skills</span> <br />
              <span className="text-white relative inline-block pr-6">
                & Expertise
                <span className="text-primary text-6xl leading-none absolute -right-2 sm:-right-4 bottom-2">.</span>
              </span>
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-lg font-light leading-relaxed">
              A curated stack of technologies I use to build scalable, high-performance digital experiences.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="glass-card rounded-xl p-4">
              <div className="text-3xl font-black text-primary mb-1">{stats.total}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Total Skills</div>
            </div>
            <div className="glass-card rounded-xl p-4">
              <div className="text-3xl font-black text-primary mb-1">{stats.categories}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Categories</div>
            </div>
            <div className="glass-card rounded-xl p-4">
              <div className="text-3xl font-black text-primary mb-1">{stats.avgLevel}%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Avg Proficiency</div>
            </div>
            <div className="glass-card rounded-xl p-4">
              <div className="text-3xl font-black text-primary mb-1">{stats.topSkill.level}%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Top: {stats.topSkill.name}</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveFilter(category)
                    }
                  }}
                  className={`group relative flex items-center justify-center h-10 px-6 rounded-full font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark ${
                    activeFilter === category
                      ? 'bg-primary text-background-dark shadow-[0_0_15px_rgba(70,236,19,0.3)] scale-105'
                      : 'glass-card text-gray-300 hover:text-white hover:bg-white/5 transition-all'
                  }`}
                  aria-pressed={activeFilter === category}
                >
                  {category}
                </button>
              ))}
          </div>

          {/* 3D Skills Grid */}
          <div className="w-full py-10" ref={gridRef}>
            {filteredSkills.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {filteredSkills.map((skill, index) => {
                  const colors = getColorClasses(skill.color)
                  return (
                    <div key={skill.name} data-index={index}>
                      <SkillCard
                        skill={skill}
                        colors={colors}
                        index={index}
                        isVisible={visibleCards[index]}
                      />
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-20">
                <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">category</span>
                <p className="text-gray-400 text-lg">No skills found in this category</p>
              </div>
            )}
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 w-full">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to deploy these skills?</h2>
              <p className="text-gray-400 max-w-xl text-lg">
                I'm currently available for freelance projects and open to full-time opportunities. Let's build something amazing together.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Link
                  to="/work"
                  className="flex items-center gap-2 h-12 px-8 rounded-full bg-white text-black hover:bg-gray-200 text-base font-bold transition-transform hover:scale-105"
                >
                  <span>View Projects</span>
                  <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 h-12 px-8 rounded-full border border-white/20 hover:bg-white/5 text-white text-base font-medium transition-colors backdrop-blur-sm"
                >
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-surface-border bg-background-dark py-8 mt-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2024 Portfolio. Designed & Built with ❤️</p>
            <div className="flex gap-6">
              <a className="text-gray-500 hover:text-white transition-colors" href="#" aria-label="Link">
                <span className="material-symbols-outlined">link</span>
              </a>
              <a className="text-gray-500 hover:text-white transition-colors" href="#" aria-label="Mail">
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a className="text-gray-500 hover:text-white transition-colors" href="#" aria-label="Email">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Skills
