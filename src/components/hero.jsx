import React from "react";
import Nav from "./nav";
import "../styles/hero.scss";
import arrowDown from '/assets/others/icon-arrow-down.svg'

export default function Hero() {
    return (
        <main>
            <Nav />
            <div className="main-container">
                <h1 className="main-container-header">
                    we are creatives
                </h1>

                <img src={arrowDown} alt="" />
            </div>
        </main>
    )
}