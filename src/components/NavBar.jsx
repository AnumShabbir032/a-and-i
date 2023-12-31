import React from 'react'
import { Link } from "react-router-dom";
// import Logo from "../assets/logo.png";
import DropDown from './DropDown';
function NavBar() {
    return (
        // xs:w-36
        <div className='border flex justify-between items-center max-w-6xl mx-auto px-6'>
            <div className="border w-[10%]">
                <Link to="/">
                    <img src="/images/a&I golden.png" width={100} alt=""/>
                </Link>
            </div>
            <div className='border text-white hidden md:flex'>
                <Link to="/blog" className="nav-link li">Blog</Link>
                <Link to="/contact" className="nav-link li">Contact</Link>
                <Link to="/project" className="nav-link li">Project</Link>
                <Link to="/location" className="nav-link li">Location</Link>
                {/* <Link to="/project" className="nav-link li">Project</Link> */}
            </div>
            <div className='text-white block md:hidden'>
                <DropDown />
            </div>
        </div >
    )
}

export default NavBar