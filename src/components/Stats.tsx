const Stats = () => {
  const stats = [
    ['10k+', 'Ideas Analyzed'],
    ['99%', 'Accuracy'],
    ['< 5min', 'Analysis Time'],
    ['24/7', 'Availability'],
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(([stat, label]) => (
          <div key={label} className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              {stat}
            </div>
            <div className="text-gray-400 mt-2">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats; 