import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Neon City',
    category: 'Web 3.0',
    description: 'A fully immersive 3D environment built with ThreeJS and React Fiber. Explore a cyberpunk city with procedural generation and real-time lighting effects.',
    type: 'Interactive Experience',
    icon: '360',
    backIcon: 'deployed_code',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7SBpFPxRRx7t3psQclXF3WksAH5vMkI2M2jqWsOaeJ6Ek_RauYHo-NZpfddELfNx3ZcJAeORUT4ayaZwlHB3LFc0Xz0WX0Fs1EnfSpKVWC1bapp4INaPl-2iD0SnCNSFuCQH4Pzm-LYJZx4NhotpFg2KA9ofIBlKErxBarcY8Tg4WnHDtUQXhBmJu8VdVpmUh4DMSFkPUYOnQCjH9BZc8oWEDsrELJ5XtfSpgNvdv_WMZbGF3ouUwMzyLFZrAZqWTU-koN4dQbA',
    tech: ['React', 'ThreeJS', 'WebGL'],
    buttonText: 'View Live',
    buttonIcon: 'code',
  },
  {
    id: 2,
    title: 'Fintech Dash',
    category: 'SaaS Product',
    description: 'High-performance financial analytics dashboard handling millions of data points. Features dark mode optimizations and custom D3.js charts.',
    type: 'Data Visualization',
    icon: 'analytics',
    backIcon: 'monitoring',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFx-ywa4Gd_RkCDtDIxX9t5neX5XDt4rE36jjyKGtVnO1Rkg1SCxtqvhK5y5rmI7X4OmRCXaDom5uALiFnXioVe8zDKRHjXOhLg2NDRvVt2u_mVAj-Angw6Lz86N486qbbWAMTtIDZmNQUXNdxlsG9Zv4UQKod9sRzNA1PB_EOt9R4IYU6Os3MnVM4UYPgDDTbue1x6QfZXUhmNIVArYI4Q1qGpme5Z5LyLdEfT8c__XqqGUNrnAty0qCc3yM_MEW93fW9L5INZA',
    tech: ['Vue', 'D3.js', 'Tailwind'],
    buttonText: 'View Case Study',
    buttonIcon: 'description',
  },
  {
    id: 3,
    title: 'Dream Gen',
    category: 'AI Tool',
    description: 'An interface for Stable Diffusion models allowing users to generate and refine images via a node-based editor.',
    type: 'Generative Art',
    icon: 'auto_awesome',
    backIcon: 'psychology',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPLm-S2ZkQf7bWTc9donllGapeMttIZVUKFrfka0yi2zNjlh_p7Eq3RTnE-IybqHLW7W3JFFUyjuXtapsXH4cxqPGsU6JqvHTkoNXhHqgpza3UoZQZgnEdqZvfVL25TgiTRa3rc_J3V5Fmud3ChpznGBx602v267ZDiSGv8akj7WxkJ6syU930qRmD5M2_p3Bu1I_S8--tzaVHXI0OwhNHxJNKXFIIwfidPMnu1l538R3_OSePWL9q5Udq1LGZEZUwb8hddTK0fw',
    tech: ['Python', 'FastAPI', 'ReactFlow'],
    buttonText: 'Try Demo',
    buttonIcon: 'code',
  },
  {
    id: 4,
    title: 'Vault X',
    category: 'Blockchain',
    description: 'Non-custodial crypto wallet supporting multiple chains. Focus on security and a simplified UX for new Web3 users.',
    type: 'DeFi Wallet',
    icon: 'account_balance_wallet',
    backIcon: 'currency_bitcoin',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3R0QpP8ySqe7-vqf137MT9OE5DE_tiyYRvujnide5uzoKfeVszQtj7OpDoMCl4l_rWovDQOekbUXr5SlKOHl0sVC6EVA7fSbOgCe7_neFwuuKoauKO5efk3QOKG8vvbz3XFz4r0vHRkWWs00_qNmGWCfYJd5tGQeAOJ6TpDcc_DuIGDXijLAudqHK0NlaPO7BDOiVKRC2Sk8ATZw3k_ar8wRlcqIdGv2KN2J2Ck1m1v8WdlBj1a1wUmJ7GfoeKzurvg2anOQF7g',
    tech: ['Solidity', 'Ethers.js', 'RN'],
    buttonText: 'View Code',
    buttonIcon: 'link',
  },
  {
    id: 5,
    title: 'Shop VR',
    category: 'Commerce',
    description: 'A prototype allowing users to browse and interact with products in 3D space before purchasing.',
    type: 'Virtual Retail',
    icon: 'view_in_ar',
    backIcon: 'shopping_cart',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0FiU7VbaND_wW9GD_HzBaMMUtJEmZgwx8CQ0FzdEyVX_08_XS6x11FZhShUVFmLyKCYzMGE6a7Hr4c_OUCMUQ5x3HDSPHaORFlUJf8W_6pSkHMg3SetuY8RuMprpgoyWnezlnC79ZM--CFywDmXacLLHrBr5skigxo8BdFxnkn6f1FzVw0rlyK-vul5EU3PZlr3FNW3GA6Jk5xLDvIt7xStxFnuoSGGmyGhceSQgMP34vGaIeDKybxXsfyQsxlVoeghmTkD8ogw',
    tech: ['Unity', 'C#', 'Oculus SDK'],
    buttonText: 'Watch Video',
    buttonIcon: 'play_circle',
  },
  {
    id: 6,
    title: 'Nexus Graph',
    category: 'Networking',
    description: 'Visualize your social connections and influence. Uses Neo4j to map complex relationships in real-time.',
    type: 'Social Analysis',
    icon: 'hub',
    backIcon: 'share',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3I4r1OHwY3s-SBBJuBS9s2Z46regiuKjHx6927rHeBveJb1qAm7wvMYRVBw4yrDfr2UGj8rQg6-RaJiN8peYnMzD3N5M3X7txF7T8U17byh3QfKP3JmDxgms1aSMr5Y8J9pfyrGPQ4Xpo8zR4GogcAhnAkp7vwtsZpk0OAaFajMD0Ki66T44XtK7BX-0wI7lZ0YODgYuiLchtpo14OSr1ClSMAjMT6e856ed928ONtN9hxOxZqKNbnyCgV-_-QU_McCfhWRXLKQ',
    tech: ['Neo4j', 'GraphQL', 'Apollo'],
    buttonText: 'Analyze',
    buttonIcon: 'open_in_new',
  },
]

const filters = ['All', 'React', 'ThreeJS', 'UI/UX']

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => {
        if (activeFilter === 'React') {
          return project.tech.includes('React')
        }
        if (activeFilter === 'ThreeJS') {
          return project.tech.includes('ThreeJS')
        }
        if (activeFilter === 'UI/UX') {
          return project.category === 'Design' || project.type.toLowerCase().includes('design') || project.type.toLowerCase().includes('ui')
        }
        return true
      })

  return (
    <>
      <div className="relative z-10 flex-grow w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
            Selected <span className="text-gradient">Works</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            A collection of experiments and production applications showcasing my expertise in modern web development and design.
          </p>
          <a
            href="/resume.pdf"
            download="Tegene_Wondimu_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-[#3bdb0f] text-[#050805] font-bold transition-all shadow-[0_0_20px_rgba(70,236,19,0.3)] hover:shadow-[0_0_30px_rgba(70,236,19,0.5)] hover:scale-105"
          >
            <span className="material-symbols-outlined">download</span>
            Download Resume
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveFilter(filter)
                }
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark ${
                activeFilter === filter
                  ? 'bg-primary text-[#050805] shadow-[0_0_10px_rgba(70,236,19,0.2)] font-bold'
                  : 'glass-card text-white hover:bg-white/10 hover:text-primary'
              }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">search_off</span>
            <p className="text-gray-400 text-lg">No projects found matching this filter</p>
          </div>
        )}
      </div>
    </>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all group">
      <div 
        className="aspect-[4/3] w-full bg-center bg-cover bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: `url('${project.image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="mb-2 text-primary text-xs font-bold uppercase tracking-wider">
            {project.category}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span className="material-symbols-outlined text-base">{project.icon}</span>
            <span>{project.type}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col gap-4">
        <p className="text-white/80 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 w-full mt-2">
          <button 
            className="flex-1 bg-primary text-[#050805] font-bold py-3 rounded-xl hover:bg-[#3bdb0f] transition-all text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
            aria-label={`${project.buttonText} for ${project.title}`}
          >
            {project.buttonText}
          </button>
          <button 
            className="w-12 flex items-center justify-center border border-white/20 rounded-xl hover:bg-white/10 transition-all text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
            aria-label={`View ${project.title} details`}
          >
            <span className="material-symbols-outlined">{project.buttonIcon}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Work
