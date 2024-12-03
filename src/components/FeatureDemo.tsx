import { useEffect, useState } from 'react';

const FeatureDemo = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  const cases = [
    {
      title: "E-commerce Marketplace",
      analysis: [
        "Market size: $4.2T globally...",
        "Competition: High, dominated by major players...",
        "Growth potential: 14% CAGR...",
        "Risk factors: High customer acquisition costs..."
      ],
      verdict: "Promising with unique positioning required",
      score: 85
    },
    {
      title: "AI-Powered Health App",
      analysis: [
        "Market size: $45.2B by 2026...",
        "Regulatory concerns: FDA approval needed...",
        "Technical feasibility: Complex ML requirements...",
        "User adoption: Strong demand indicators..."
      ],
      verdict: "High potential with regulatory challenges",
      score: 78
    },
    {
      title: "Sustainable Fashion Platform",
      analysis: [
        "Market trend: Growing 21% YoY...",
        "Consumer sentiment: Strong ESG focus...",
        "Supply chain: Complexity in verification...",
        "Competitive edge: First-mover advantage..."
      ],
      verdict: "Excellent timing, execution critical",
      score: 92
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % cases.length);
      setIsAnalyzing(true);
      setTimeout(() => setIsAnalyzing(false), 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Title Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-4">
          See How It Works
        </h2>
        <p className="text-gray-400 text-lg">
          Watch our AI analyze real business ideas in real-time, providing detailed insights and actionable feedback.
        </p>
      </div>

      {/* Existing Demo Content */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Analysis Panel */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${isAnalyzing ? 'bg-green-400 animate-pulse' : 'bg-blue-400'}`} />
                  <p className="text-sm text-gray-400">
                    {isAnalyzing ? 'AI Analysis in Progress' : 'Analysis Complete'}
                  </p>
                </div>
                <span className="text-sm text-gray-500">Case {currentCase + 1}/3</span>
              </div>
              
              <div className="bg-black/50 rounded-xl border border-white/[0.08] p-6 shadow-xl">
                <h3 className="text-xl font-medium text-white mb-4">
                  {cases[currentCase].title}
                </h3>
                <div className="space-y-3">
                  {cases[currentCase].analysis.map((point, index) => (
                    <div
                      key={index}
                      className={`transform transition-all duration-500 ${
                        isAnalyzing ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <p className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-400/50"></span>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Terminal */}
            <div>
              <div className="bg-gradient-to-r from-blue-500/80 to-purple-500/80 p-[1px] rounded-xl">
                <div className="bg-black rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
                    </div>
                    <div className="text-xs text-gray-500 px-2 py-1 rounded-full border border-gray-800">
                      Terminal
                    </div>
                  </div>
                  
                  <pre className="text-sm font-mono">
                    <code className={`text-gray-400 transition-all duration-500 ${
                      isAnalyzing ? 'opacity-50' : 'opacity-100'
                    }`}>
                      {isAnalyzing 
                        ? '> Analyzing market potential...\n> Processing data...\n> Generating insights...'
                        : `> Analysis complete!\n\n> Verdict: ${cases[currentCase].verdict}\n> Confidence: ${cases[currentCase].score}%`}
                    </code>
                  </pre>

                  {!isAnalyzing && (
                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <div className="h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                          style={{ width: `${cases[currentCase].score}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDemo; 