import React from 'react';

const FilterButton = ({ filter, currentFilter, onClick, label, emoji }) => {
  const isActive = currentFilter === filter;
  
  return (
    <button
      onClick={() => onClick(filter)}
      className={`px-6 py-2 rounded-lg font-semibold transition-all ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      {emoji} {label}
    </button>
  );
};

export default FilterButton;
