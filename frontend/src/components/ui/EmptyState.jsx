import React from 'react';
import { PackageOpen } from 'lucide-react';

const EmptyState = ({ 
  title = 'No items found', 
  message = "You don't have any items here yet.",
  actionButton = null,
  icon: Icon = PackageOpen
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-800/50">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4 text-gray-500 dark:text-gray-400">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-6">
        {message}
      </p>
      {actionButton}
    </div>
  );
};

export default EmptyState;
