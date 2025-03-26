import React from 'react';


function LevitatingCard({ position, title, content }) {
  return (
    <div className={`absolute bg-white rounded-3xl shadow-xl ${position}`}>
      <h2 className="font-semibold text-4xl mb-4">{title}</h2>
      <p className="text-gray-600 text-lg leading-relaxed">{content}</p>
    </div>
  );
}

export default LevitatingCard