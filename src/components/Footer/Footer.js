import Footer from ".";
import React from 'react';
import './Footer.css';
import BottomFooterSection from "../BottomFooterSection";

const Footer = props => {
    return (
        <footer>
            <div className='top-footer'>

                <nav className='footer-social'>

                </nav>
            </div>
            <div className='footer-line'></div>
            <div className='bottom-footer'>
                   <BottomFooterSection />
                   <BottomFooterSection />
                   <BottomFooterSection />
                   <BottomFooterSection />
            </div>
        </footer>
    )
}

export default Footer;