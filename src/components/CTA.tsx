const CTA = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to validate your next big idea?
        </h2>
        <button className="px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 font-medium">
          Start Free Analysis
        </button>
        <p className="text-gray-400 mt-4">No credit card required</p>
      </div>
    </div>
  );
};

export default CTA; 