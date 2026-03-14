import React from 'react';

const StatCard = ({ title, count, icon: Icon, colorClass }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{count}</h3>
        </div>
        <div className={`p-4 rounded-full ${colorClass} bg-opacity-10 dark:bg-opacity-20`}>
          <Icon className={`w-8 h-8 ${colorClass.replace('bg-', 'text-')}`} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
