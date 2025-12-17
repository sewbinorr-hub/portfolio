const AmbientGlows = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div 
        className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full glow-purple ambient-glow animate-pulse-slow"
        aria-hidden="true"
      ></div>
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full glow-blue ambient-glow animate-pulse-slow"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      ></div>
      <div 
        className="absolute top-[40%] left-[20%] w-[25vw] h-[25vw] rounded-full glow-cyan ambient-glow opacity-30 animate-pulse-slow"
        style={{ animationDelay: '4s' }}
        aria-hidden="true"
      ></div>
    </div>
  )
}

export default AmbientGlows
