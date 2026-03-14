import React from 'react';
import { Check, Clock, Wrench } from 'lucide-react';

const StatusTimeline = ({ status }) => {
  const normalizedStatus = status?.toLowerCase() || 'pending';
  
  const steps = [
    { id: 'pending', title: 'Submitted', icon: Clock },
    { id: 'in progress', title: 'In Progress', icon: Wrench },
    { id: 'resolved', title: 'Resolved', icon: Check }
  ];

  let currentStepIndex = 0;
  if (normalizedStatus === 'in progress') currentStepIndex = 1;
  if (normalizedStatus === 'resolved') currentStepIndex = 2;

  return (
    <div className="py-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700" />
        </div>
        
        <ul className="relative flex justify-between">
          {steps.map((step, stepIdx) => {
            const isCompleted = stepIdx < currentStepIndex;
            const isCurrent = stepIdx === currentStepIndex;
            const Icon = step.icon;

            return (
              <li key={step.id} className="relative flex justify-center text-center">
                <div className="flex flex-col items-center">
                  <span
                    className={`h-10 w-10 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-card-surface z-10 transition-colors
                      ${isCompleted ? 'bg-blue-500 text-white' : 
                        isCurrent ? 'bg-amber-500 text-white' : 
                        'bg-gray-100 text-gray-500 border-2 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <span 
                    className={`mt-3 text-sm font-medium
                      ${isCompleted || isCurrent ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}
                    `}
                  >
                    {step.title}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default StatusTimeline;
