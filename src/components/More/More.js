import React from 'react';
import './More.css';
import moreImg from '../../images/bg-pattern-how-we-work-desktop.svg';

const More = props => {
    return (
        <div className='more-container'>
            <img className='more-bg' src={moreImg} />
            <h3 className='heading-font more-header'>Find out more about how we work</h3>
            <a href='#' className='white-button more-button'>HOW WE WORK</a>
        </div>
    )
}

export default More;