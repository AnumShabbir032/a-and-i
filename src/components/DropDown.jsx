import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
        <ul className="dropdown-menu border absolute right-8 py-4 bg-gray-400 z-10 rounded">
          <li onClick={()=>{setIsOpen(false)}} className='hover:bg-slate-300 hover:text-black  cursor-pointer px-8'><Link to='/blog'>Blog</Link></li>
          <li onClick={()=>{setIsOpen(false)}} className='hover:bg-slate-300 hover:text-black  cursor-pointer px-8'><Link to='/contact'>Contact</Link></li>
          <li onClick={()=>{setIsOpen(false)}} className='hover:bg-slate-300 hover:text-black  cursor-pointer px-8'><Link to='/project'>Project</Link></li>
          <li onClick={()=>{setIsOpen(false)}} className='hover:bg-slate-300 hover:text-black  cursor-pointer px-8'><Link to='/location'>Location</Link></li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;