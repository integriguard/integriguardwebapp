import React, { useState } from 'react';

function Collapse() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center">
      {isOpen && (
        <div className="text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-md p-4 mt-4">
            <div className="justify-center">
           {/* <p className="text-justify">In today's rapidly evolving healthcare landscape, efficient back-office operations are essential. We bring robust solutions, ensuring seamless transitions between customer care and administrative functions.</p> */}
           <p className="text-center text-gray-700 dark:text-gray-300 text-lg">In today's rapidly evolving healthcare landscape, efficient back-office operations are essential. We bring robust solutions, ensuring seamless transitions between customer care and administrative functions.</p>
          </div>
        </div>
      )}
      <button
        className="bg-primary text-white peer peer-checked:bg-secondary peer-checked:text-secondary-content rounded-full px-4 py-2"
        onClick={toggleCollapse}
      >
        {isOpen ? 'Show Less' : 'Learn More'}
      </button>      
    </div>
  );
}

export default Collapse;
