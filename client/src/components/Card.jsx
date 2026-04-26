const Card = ({ title, value, sub, color }) => {
  const colorMap = {
    purple: "from-purple-500 to-indigo-500",
    yellow: "from-yellow-400 to-orange-500",
    green: "from-green-400 to-emerald-500",
    red: "from-red-500 to-pink-500",
  };

  return (
    <div className="bg-[#111827]/80 backdrop-blur-lg border border-gray-700 p-5 rounded-xl shadow-lg hover:shadow-lg hover:scale-[1.02] transition">

      <div className={`h-1 w-full rounded mb-3 bg-gradient-to-r ${colorMap[color]}`} />

      <h2 className="text-2xl md:text-3xl font-bold">{value}</h2>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-xs mt-2 text-gray-300">{sub}</p>

    </div>
  );
};

export default Card;