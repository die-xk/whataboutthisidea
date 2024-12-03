const Pricing = () => {
  const plans = [
    {
      title: "Basic Report",
      price: "Free",
      features: [
        "Quick market overview",
        "Basic competitor analysis",
        "Initial risk assessment",
        "Web connectivity"
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-white text-black hover:bg-white/90"
    },
    {
      title: "In-Depth Review",
      price: "$9.99",
      features: [
        "Comprehensive market analysis",
        "Detailed competitor insights",
        "Full risk assessment",
        "Actionable feedback",
        "Web connectivity",
        "Priority support"
      ],
      buttonText: "Upgrade Now",
      buttonStyle: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mb-4">
          Choose Your Plan
        </h2>
        <p className="text-gray-400 text-lg">
          Start with a free basic report or upgrade for a comprehensive in-depth review.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`relative bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-lg group hover:shadow-xl transition-all duration-300 ${
              index === 1 ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' : ''
            }`}
          >
            <div className="space-y-6">
              {/* Title & Price */}
              <div className="text-center pb-2">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {plan.title}
                </h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {plan.price}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 text-base flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="text-center pt-2">
                <button className={`w-full px-6 py-3 rounded-full text-base font-medium transition-colors ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing; 