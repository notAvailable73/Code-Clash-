// TaskHeader.jsx
import React from 'react';

const TaskSection = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 ">
          Today's Task
        </h2>
        
        <p className="text-gray-600 ">
          Check your daily task and schedule
        </p>
        
        <button 
          className="px-4 py-2 text-sm font-medium text-white bg-red-400 rounded-lg hover:bg-red-700  transition-colors"
          onClick={() => console.log('Schedule clicked')}
        >
          Watch Schedule
        </button>
      </div>
    </div>
  );
};

export default TaskSection;