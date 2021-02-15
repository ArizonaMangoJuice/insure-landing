import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

const Header = props => {
    return (
        <header>
            <img className='header-logo' alt='Insure logo' src={logo} />
            <nav>
                <a className='header-link' href='#'>HOW WE WORK</a>
                <a className='header-link' href='#'>BLOG</a>
                <a className='header-link' href='#'>ACCOUNT</a>
                <a className='header-link view-plans' href='#'>VIEW PLANS</a>
            </nav>
        </header>
    )
};

export default Header;