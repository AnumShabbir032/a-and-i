import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import DropDown from './DropDown';
function NavBar() {
    return (
        <div className='flex justify-between items-center max-w-6xl mx-auto px-6 py-4'>
            <div className="" >
                <Link to="/">
                    <img src={Logo} alt="" width={100} height={90} />
                </Link>
            </div>
            <div className='text-white hidden md:flex'>
                <Link to="/blog" className="nav-link">Blog</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/project" className="nav-link">Project</Link>
                <Link to="/location" className="nav-link">Location</Link>
                <Link to="/project" className="nav-link ">Project</Link>
            </div>
            <div className='text-white block md:hidden'>
                <DropDown />
            </div>
        </div >
    )
}

export default NavBar