import React from "react";
import '../styles/footer.scss'
import facebook from '/assets/others/icon-facebook.svg'
import instagram from '/assets/others/icon-instagram.svg'
import pinterest from '/assets/others/icon-pinterest.svg'
import twitter from '/assets/others/icon-twitter.svg'
export default function Footer() {
    return (
        <div className="footer">
            <div className="image-1">

            </div>
            <div className="image-2">

            </div>
            <div className="image-3">

            </div>
            <div className="image-4">

            </div>

            <footer>
                <div className="footer-container">
                    <h3 className="footer-header">
                        sunnyside
                    </h3>
                    <ul className="footer-items">
                        <li className="footer-links">about</li>
                        <li className="footer-links">service</li>
                        <li className="footer-links">projects</li>
                    </ul>
                    <div className="footer-media">
                        <ul className="footer-media-items">
                            <li className="footer-media-links"><img src={facebook} alt="" /></li>
                            <li className="footer-media-links"><img src={instagram} alt="" /></li>
                            <li className="footer-media-links"><img src={pinterest} alt="" /></li>
                            <li className="footer-media-links"><img src={twitter} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}