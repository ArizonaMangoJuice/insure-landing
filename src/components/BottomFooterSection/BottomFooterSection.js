import React from 'react';
import './BottomFooterSection.css';

const BottomFooterSection = ({title, links}) => {
    
    const linksComponent = links ? links.map(e => (
        <span className='bottom-footer-links'>{e}</span>
    ))
    : null;

    return (
        <div className='bottom-footer-container' >
            <span className='title'>{title}</span>
            {linksComponent}
        </div>
    ) 
}

export default BottomFooterSection;