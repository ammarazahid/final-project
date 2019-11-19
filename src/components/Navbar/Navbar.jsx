import React from 'react';
import './Navbar.css';
// import Data from './components/Data';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  



function Navbar() {
    return (
       
        <div className="navbar">
           <ul>
           <li><Link to="/">Pencil</Link></li>
              <li>Body Lotion</li>
              <li>Eye Brows</li>
              <li>Brands</li>
              <li>Make Up</li>
              <li>New Arrivals</li>
              <li>Hair</li>
              <li>Bath and Body</li>
              <li>Beauty Blog</li>
           </ul>
        </div>
    );
}


export default Navbar;