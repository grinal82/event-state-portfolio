import React from 'react';

const Toolbar = ({ filters, selectedFilter, onFilterChange }) => {
  return (
    <div className='toolbar-container'>
      {filters.map(filter => (
        <button
          key={filter}
          className={selectedFilter === filter ? 'active' : ''}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;


