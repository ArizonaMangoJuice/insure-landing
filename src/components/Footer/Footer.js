import React from 'react';
import './Footer.css';
import BottomFooterSection from "../BottomFooterSection";
import logo from '../../images/logo.svg';

import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';

const Footer = props => {
    return (
        <footer>
            <div className='top-footer'>
                <img className='footer-logo' src={logo} />
                <div className='footer-social'>
                    <img className='footer-social-logo' src={facebook} />
                    <img className='footer-social-logo' src={twitter} />
                    <img className='footer-social-logo' src={pinterest} />
                    <img className='footer-social-logo' src={instagram} />
                </div   >
            </div>
            <div className='footer-line'></div>
            <div className='bottom-footer'>
                   <BottomFooterSection title='OUR COMPANY'
                    links={['HOW WE WORK', 'WHY INSURE?', 'VIEW PLANS', 'REVIEWS']}
                    />
                   <BottomFooterSection title='HELP ME'
                    links={['FAQ', 'TERMS OF USE', 'PRIVACY POLICY', 'COOKIES']}
                   />
                   <BottomFooterSection title='CONTACT'
                    links={['SALES', 'SUPPORT', 'LIVE CHAT']}
                   />
                   <BottomFooterSection title='OTHERS'
                    links={['CAREERS', 'PRESS', 'LICENSES']}
                   />
            </div>
        </footer>
    )
}

export default Footer;