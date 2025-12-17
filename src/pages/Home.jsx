import Hero from '../components/Hero'

const Home = () => {
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
        <Hero />
      </main>
    </>
  )
}

export default Home
