import React from 'react';

const FindMe = () => {
  return (
    <div className="footer bg-tertiary text-white text-lg font-bold py-6 px-4 border-t-2 border-gray-500">
      <div className="flex justify-center">
        <a href="https://www.linkedin.com/" className="mx-4 transition hover:text-gray-400 relative">
          <span className="flex items-center">
            <span className="mr-2">LinkedIn</span>
            
          </span>
        </a>
        <a href="mailto:example@gmail.com" className="mx-4 transition hover:text-gray-400 relative">
          <span className="flex items-center">
            <span className="mr-2">Hacker Rank</span>
            
          </span>
        </a>
        <a href="https://github.com/" className="mx-4 transition hover:text-gray-400 relative">
          <span className="flex items-center">
            <span className="mr-2">GitHub</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default FindMe;