import React from "react";
import '../styles/nav.scss'
import logo from '/assets/logo.svg'
export default function Nav(){
    return(
        <nav>
            <div className="logo">
               <img src={logo} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-links">about</li>
                <li className="nav-links">service</li>
                <li className="nav-links">projects</li>
                <li className="nav-links"><button>contact</button></li>
            </ul>
        </nav>
    )
}