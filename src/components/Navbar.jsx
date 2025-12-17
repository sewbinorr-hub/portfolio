import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/work', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between glass-card px-2 py-2 rounded-full w-full max-w-[960px] h-[64px] backdrop-blur-xl">
        {/* Logo Area */}
        <div className="flex items-center gap-3 pl-4 pr-4 sm:pr-6 border-r border-white/10 min-w-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center border border-white/10 flex-shrink-0">
            <span className="font-bold text-primary text-lg">T</span>
          </div>
          <span className="font-bold text-sm tracking-wide hidden sm:block text-white truncate max-w-[120px] md:max-w-none">Tegene Wondimu</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center min-w-0">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 xl:px-5 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                location.pathname === link.path
                  ? 'text-white bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3 pr-1">
          <Link
            to="/contact"
            className="hidden sm:flex items-center justify-center h-10 px-6 rounded-full bg-primary hover:bg-[#3bdb0f] text-[#050805] text-sm font-bold transition-all shadow-[0_0_20px_rgba(70,236,19,0.3)] hover:shadow-[0_0_30px_rgba(70,236,19,0.5)]"
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onKeyDown={(e) => {
              if (e.key === 'Escape' && mobileMenuOpen) {
                setMobileMenuOpen(false)
              }
            }}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed top-20 left-4 right-4 glass-card rounded-2xl p-4 z-40 backdrop-blur-xl animate-in slide-in-from-top-2"
          role="menu"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setMobileMenuOpen(false)
            }
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === link.path
                  ? 'text-white bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="w-full mt-4 flex items-center justify-center h-10 px-6 rounded-full bg-primary hover:bg-[#3bdb0f] text-[#050805] text-sm font-bold transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
