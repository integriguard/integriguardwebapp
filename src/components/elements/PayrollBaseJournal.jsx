import React, { useState } from 'react';

function Collapse() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center">
      {isOpen && (
        <div className="text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-md p-1">
            <div className="justify-center">
           <p className="text-center text-gray-700 dark:text-gray-300 text-lg">Missing Assessments and Discharge MDS Completion</p>
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
