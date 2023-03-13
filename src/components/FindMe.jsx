import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHackerrank, faGithub } from '@fortawesome/free-brands-svg-icons';

const FindMe = () => {
  return (
    <div className="bg-tertiary text-white py-6 px-4 border-t-2 border-gray-500">
      <div className="flex flex-col md:flex-row justify-center md:items-center">
        <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img
            src="https://via.placeholder.com/150"
            alt="My Image"
            className="w-32 h-32 rounded-full"
          />
        </div>
        <div className="md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
            
          <div className="flex items-center text-lg mr-4">
            <FontAwesomeIcon icon={faHackerrank} className="mr-2" />
            <span>HackerRank</span>
          </div>
          <div className="flex items-center text-lg mx-4">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            <span>LinkedIn</span>
          </div>
          <div className="flex items-center text-lg ml-4">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            <span>GitHub</span>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <span className="text-lg">
            Phone: (+94)769656772
            Address: 123 Main St, Anytown USA
          </span>
        </div>
      </div>
    </div>
  );
};

export default FindMe;