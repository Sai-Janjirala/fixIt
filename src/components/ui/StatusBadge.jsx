import React from 'react';

const StatusBadge = ({ status }) => {
  let colorStyles = '';
  
  switch (status?.toLowerCase()) {
    case 'resolved':
      colorStyles = 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      break;
    case 'in progress':
      colorStyles = 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      break;
    case 'pending':
    default:
      colorStyles = 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
      break;
  }

  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${colorStyles}`}>
      {status || 'Pending'}
    </span>
  );
};

export default StatusBadge;
