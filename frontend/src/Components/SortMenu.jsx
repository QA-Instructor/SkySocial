import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../CSS/sortMenu.css';
import { LiaSortAlphaDownSolid } from "react-icons/lia";
import { LiaSortAlphaUpSolid } from "react-icons/lia";
import { FaCaretDown,FaCaretUp } from "react-icons/fa";import axios from 'axios';


//Pass function into state. The function will take parameters for field and direction, then will make API request.
const SortMenu = ({ sortFn }) => {

    const [menuVisibility, setMenuVisibility] = useState(true);
    const [isAscending, setIsAscending] = useState(true);
    const [isSortClicked, setSortClicked] = useState(false);

    const toggleMenuVisibility = () => {
        setMenuVisibility(!menuVisibility);
    }

    const toggleAscending = () => {
        setIsAscending(!isAscending);
    }

    const handleSort = (field) => {
        toggleMenuVisibility();
        sortFn(field, isAscending);

    }

    return (
        <div className="sort-menu-dropdown">
        <button className="sort-menu-dropdown-toggle" type="button" onClick={toggleMenuVisibility}>
            Sort {menuVisibility?<FaCaretDown />:<FaCaretUp />} </button>
        <div hidden={menuVisibility}>
           
            <ul className="sort-menu-dropdown-menu">
            <li> {isAscending ? <LiaSortAlphaDownSolid onClick={toggleAscending}/> : <LiaSortAlphaUpSolid onClick={toggleAscending}/>}</li>
            <li><span className="sort-menu-dropdown-item" onClick={() => handleSort("alpha")}>Alphabetical</span>  </li>
            <li><span className="sort-menu-dropdown-item" onClick={() => handleSort("date")}>Date</span></li>
            <li><span className="sort-menu-dropdown-item" onClick={() => handleSort("capacity")}>Capacity</span></li>
            </ul>
            </div>
        </div>

    );
};


export default SortMenu;