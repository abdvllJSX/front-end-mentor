import React from "react";
import { useState } from "react";
import Nav from "./nav";
import "../styles/hero.scss";
import arrowDown from '/assets/others/icon-arrow-down.svg'

export default function Hero() {
    const [open, setOpen] = useState(false)
const toggle = () => {
  setOpen(prevOpen =>  !prevOpen)
}
    return (
        <main>
            <Nav
            toggle = {toggle}
            open = {open} 
            />
            <div className="main-container">
                <h1 className="main-container-header">
                    we are creatives
                </h1>
                <img src={arrowDown}  alt="" />
            </div>
        </main>
    )
}