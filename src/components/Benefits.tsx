const Benefits = () => {
  const benefits = [
    {
      title: "Your Pocket VC",
      description: "Why risk your one shot with investors? Perfect your pitch with unlimited AI-powered feedback before meeting real VCs.",
      metric: "10x",
      metricLabel: "Better Prepared"
    },
    {
      title: "Save Months of Research",
      description: "Get comprehensive market analysis, competitor insights, and risk assessment in minutes, not months.",
      metric: "98%",
      metricLabel: "Time Saved"
    },
    {
      title: "Unbiased Feedback",
      description: "Remove emotion from the equation. Get data-driven insights and objective analysis of your business idea.",
      metric: "100%",
      metricLabel: "Data-Driven"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent blur-3xl -z-10" />
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-4">
          Why Risk Your Big Idea?
        </h2>
        <p className="text-gray-400 text-lg">
          Get the insights you need before taking the leap. Our AI provides the feedback that usually takes months to gather.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-3 gap-8 relative">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 group hover:border-blue-500/50 transition-colors"
          >
            {/* Benefit Content */}
            <div className="space-y-6">
              {/* Metric */}
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {benefit.metric}
                </span>
                <span className="text-gray-400 text-sm">
                  {benefit.metricLabel}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/50 rounded-xl transition-colors duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity">
          Start Your Analysis Now
        </button>
        <p className="mt-4 text-gray-400">
          No credit card required • Free analysis included
        </p>
      </div>
    </div>
  );
};

export default Benefits; 