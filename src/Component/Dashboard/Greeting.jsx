// Greeting.jsx
import React from 'react';

const Greeting = ({ name }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      return 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <div className="text-2xl font-semibold text-gray-800 pb-2">
      {getGreeting()}, {name}!
    </div>
  );
};

export default Greeting;