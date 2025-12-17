import { useEffect, useRef } from 'react'

const ProfileCard = () => {
  const cardRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    const container = containerRef.current
    if (!card || !container) return

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(0)
      `
    }

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)'
    }

    // Only add 3D tilt effect if user prefers motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (!prefersReducedMotion) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="tilt-container group relative w-full max-w-md"
    >
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/20 to-transparent blur-3xl -z-10 group-hover:from-primary/30 transition-all duration-700"></div>

      {/* The Glass Card */}
      <div
        ref={cardRef}
        className="tilt-element glass-card w-full p-6 rounded-[2rem] flex flex-col gap-6 animate-float hover:[animation-play-state:paused] relative overflow-hidden"
      >
        {/* Card Shine Effect */}
        <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none"></div>

        {/* Card Header Image */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner border border-white/5">
          <img
            alt="Tegene Wondimu - Full Stack Developer & UI Designer"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            src="/tegene1.jpg"
            loading="lazy"
          />
          {/* Floating badge on image */}
          <div className="absolute bottom-3 left-3 px-3 py-1.5 glass-card rounded-lg flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-white">Online Now</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-white">Tegene Wondimu</h3>
              <p className="text-primary font-medium">Frontend Engineer</p>
            </div>
            <button
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-primary hover:text-black transition-colors cursor-pointer"
              aria-label="View profile"
            >
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Specializing in React, WebGL, and UI interactions. Currently exploring 3D web experiences and accessible design systems.
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
            <div className="text-center">
              <p className="text-white font-bold text-lg">5+</p>
              <p className="text-gray-500 text-xs">Years Exp.</p>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center">
              <p className="text-white font-bold text-lg">42</p>
              <p className="text-gray-500 text-xs">Projects</p>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center">
              <p className="text-white font-bold text-lg">100%</p>
              <p className="text-gray-500 text-xs">Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
