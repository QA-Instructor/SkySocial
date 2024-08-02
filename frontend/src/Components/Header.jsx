import React from 'react'
import { useState } from 'react';
import { Link,Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import "../resources/header.css"
import { AiOutlineArrowDown } from "react-icons/ai";

export const Header = () => {
    const [isOpen,setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen)
  return (
        
        <>
        <header>
            <div className='header-logo-section'>
                <img
                    className='header-logo-img'
                    src='skySocialWhite.png'
                    alt="Second Slide"
                />
            </div>
            <input class="side-menu" type="checkbox" id="side-menu"/>
            <label class="hamb" for="side-menu" onClick={toggle}><span className={`${isOpen? 'hamb-line' : 'rotated-hamb-line'}`}></span></label>
            <Navbar className={`${isOpen? 'nav-disabled' : 'navbar'}`}>
                <Nav className="nav">
                    <ul className='nav-list-left'>
                        <li className='navbar-item'id='home'>
                            <Link className='nav-link' onClick={toggle} to='/'>Home</Link>
                        </li>
                        <li className='navbar-item' id='createEvent'>
                            <Link className='nav-link' onClick={toggle} to='/CreateEvent'>Create Event</Link>
                        </li>
                        <li className='navbar-item' id='myEvents'>
                            <Link className='nav-link' onClick={toggle} to='/MyEvents'>My Events</Link>
                        </li>
                        
                        {/* <li className='navbar-item' id='search'>
                            <Link className='nav-link' onClick={toggle} to='/Search'>Search</Link>
                        </li> */}
                        <li className='navbar-item' onClick={toggle} id='profile'>
                            <Link className='nav-link' onClick={toggle} to='/Profile'>Profile</Link>
                        </li>
                        <li className='navbar-item' id='login'>
                            <Link className='nav-link' onClick={toggle} to='/Login'>Logout</Link>
                        </li>
                    </ul>
                </Nav>
            </Navbar>
        </header>
        <Outlet/>
        </>
  )
}
export default Header;
