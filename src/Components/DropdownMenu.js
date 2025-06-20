import React, { useState } from 'react';

const BootstrapDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownClass = `dropdown ${isDropdownOpen ? 'show' : ''}`;
  const dropdownMenuClass = `dropdown-menu ${isDropdownOpen ? 'show' : ''}`;

  return (
    <div className={dropdownClass} style={{marginLeft: "10px", backgroundColor:"white"}}>
      <a
        className="btn dropdown-toggle" 
       
        role="button"
        id="dropdownMenuLink"
        onClick={toggleDropdown}
      >
        Choose one
      </a>

      <div className={dropdownMenuClass} aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="#">
          Staff/Agent
        </a>
        <a className="dropdown-item" href="#">
          Sales Lead
        </a>
        <a className="dropdown-item" href="#">
          Subscriber
        </a>
        <a className="dropdown-item" href="#">
          Cases/Incident
        </a>
        <a className="dropdown-item" href="#">
          Lawyer
        </a>
      </div>
    </div>
  );
};

export default BootstrapDropdown;
