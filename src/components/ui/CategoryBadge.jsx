import React from 'react';

const CategoryBadge = ({ category }) => {
  return (
    <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg whitespace-nowrap border border-gray-200 dark:border-gray-700">
      {category}
    </span>
  );
};

export default CategoryBadge;
