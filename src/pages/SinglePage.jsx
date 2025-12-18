import Hero from '../components/Hero'
import SocialLinks from '../components/SocialLinks'
import About from './About'
import Skills from './Skills'
import Work from './Work'
import Contact from './Contact'

const SinglePage = () => {
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

      {/* Home Section */}
      <section id="home" className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 sm:px-8 pt-28 pb-16 w-full max-w-[1280px] mx-auto min-h-screen">
        <Hero />
      </section>
      <SocialLinks />

      {/* About Section */}
      <section id="about" className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen pt-28 pb-8 px-4 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 flex flex-col justify-center items-center px-4 sm:px-8 pt-28 pb-16 w-full max-w-[1280px] mx-auto min-h-screen">
        <Skills />
      </section>

      {/* Work Section */}
      <section id="work" className="relative z-10 px-4 sm:px-8 pt-28 pb-16 w-full max-w-[1280px] mx-auto min-h-screen">
        <Work />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-4 sm:px-8 pt-28 pb-16 w-full max-w-[1280px] mx-auto min-h-screen">
        <Contact />
      </section>
    </>
  )
}

export default SinglePage
