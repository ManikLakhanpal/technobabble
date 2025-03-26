function LevitatingCard({ position, title, content }) {
  return (
    <div
      className={`absolute bg-white p-3 md:p-4 lg:p-6 rounded-xl shadow-lg shadow-neutral-900/30 ${position} 
            max-w-[220px] sm:max-w-xs md:max-w-sm`}
    >
      <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-2">
        {title}
      </h2>
      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
        {content}
      </p>
    </div>
  );
}

export default LevitatingCard;