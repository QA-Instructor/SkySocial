import React from 'react'
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import "../resources/header.css"

export const Header = () => {
  return (
        <header>
            <div className='header-logo-section'>
                <img alt='Sky Social'/>
            </div>

            <Navbar className='navbar'>
                <Nav className='nav'>
                    <ul className='nav-list-left'>
                        <li className='navbar-item'id='home'>
                            <Link className='nav-link' to='/home'>Home</Link>
                        </li>
                        <li className='navbar-item' id='createEvent'>
                            <Link className='nav-link' to='/createEvent'>Create Event</Link>
                        </li>
                        <li className='navbar-item' id='myEvents'>
                            <Link className='nav-link' to='/myEvents'>My Events</Link>
                        </li>
                        
                    </ul>
                    <ul className='nav-list-right'>
                    <li className='navbar-item' id='search'>
                            <Link className='nav-link' to='/search'>Search</Link>
                        </li>
                        <li className='navbar-item' id='profile'>
                            <Link className='nav-link' to='/profile'>Profile</Link>
                        </li>
                        <li className='navbar-item' id='login'>
                            <Link className='nav-link' to='/login'>Logout</Link>
                        </li>
                    </ul>
                </Nav>
            </Navbar>
        </header>
  )
}
export default Header;
