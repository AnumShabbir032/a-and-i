import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
   // eslint-disable-next-line 
  const [selectedOption, setSelectedOption] = useState('');

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption || <i className="fa-solid fa-bars text-2xl"></i>}
      </button>
      {isOpen && (
        <ul className="dropdown-menu border-[1px] border-[#b68b03] bg-black absolute my-6 right-0 shadow-3 z-10 xs:w-[100%] xs:max-h-screen rounded-sm animate__animated animate__slideInRight">
          <li onClick={()=>{setIsOpen(false)}} className='nav-design'><Link to='/blog'>Blog</Link></li>
          <li onClick={()=>{setIsOpen(false)}} className='nav-design'><Link to='/contact'>Contact</Link></li>
          <li onClick={()=>{setIsOpen(false)}} className='nav-design'><Link to='/project'>Project</Link></li>
          <li onClick={()=>{setIsOpen(false)}} className='nav-design'><Link to='/location'>Location</Link></li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;