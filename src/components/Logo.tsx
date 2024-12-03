const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative group">
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className="fill-blue-500/20 group-hover:fill-blue-500/30 transition-colors"
          />
          
          <path
            d="M12 2.5a6.5 6.5 0 00-3 12.268v2.232a1 1 0 001 1h4a1 1 0 001-1v-2.232A6.5 6.5 0 0012 2.5z"
            className="fill-blue-500 group-hover:fill-blue-400 transition-colors"
          />
          
          <path
            d="M12 8.5a1 1 0 00-1 1v.5a1 1 0 002 0V9.5a1 1 0 00-1-1zm0 4a1 1 0 100-2 1 1 0 000 2z"
            fill="white"
            className="group-hover:fill-white/90 transition-colors"
          />
          
          <path
            d="M10 18h4M11 20h2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="stroke-blue-500 group-hover:stroke-blue-400 transition-colors"
          />
        </svg>
      </div>

      <span className="text-gray-400 text-sm font-medium">
        What About This Idea?
      </span>
    </div>
  );
};

export default Logo; 