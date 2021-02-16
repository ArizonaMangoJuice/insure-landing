import React from 'react';
import './Hero.css';
import mainImage from '../../images/image-intro-desktop.jpg';
import desktopRight from '../../images/bg-pattern-intro-right-desktop.svg';

const Hero = props => {
    return (
        <section className='hero'>
            <img className='right-side-img' src={desktopRight} />
            <div className='hero-container'>
                <div className='hero-text'>
                    <span className='line'></span>
                    <h1 className='heading-font hero-text-header'>Humanizing your insurance.</h1>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
                    <a href='#' className='white-button'>VIEW PLANS</a>
                </div>
                <div className='hero-image'>
                    <img src={mainImage} alt='' />
                </div>
            </div>
        </section>
    )
};

export default Hero;