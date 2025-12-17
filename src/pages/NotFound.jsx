import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
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
      <main className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 sm:px-8 pt-28 pb-16 w-full max-w-[1280px] mx-auto text-center">
        <div className="glass-card rounded-3xl p-12 md:p-16 max-w-2xl">
          <div className="text-8xl md:text-9xl font-extrabold text-primary mb-6">404</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Page Not Found</h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 h-12 px-8 rounded-full bg-primary hover:bg-[#3bdb0f] text-[#050805] text-base font-bold transition-all shadow-[0_0_20px_rgba(70,236,19,0.3)] hover:shadow-[0_0_30px_rgba(70,236,19,0.5)]"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 h-12 px-8 rounded-full border border-white/20 hover:bg-white/5 text-white text-base font-medium transition-colors backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound
