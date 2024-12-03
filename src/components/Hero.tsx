const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Grid Pattern - using CSS background with multiple layers */}
      <div 
        className="absolute inset-0 before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] before:bg-[size:4rem_4rem] before:opacity-25
        after:absolute after:inset-0 after:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] after:bg-[size:80px_80px] after:opacity-10"
      />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 blur-[100px]" />
      
      {/* Additional ambient light effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
            <h1 className="relative text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 text-transparent bg-clip-text leading-tight">
              Validate Your Next Big Idea
            </h1>
          </div>
          <p className="text-xl text-gray-400">
            AI-powered analysis that thinks like a VC, researches like an analyst, and validates like a pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 font-medium relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
              Analyze Your Idea →
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
          {/* Checkmarks */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Try it for free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-gray-400"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero; 