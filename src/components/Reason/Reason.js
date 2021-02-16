import React from 'react';

const Reason = ({title, description, icon}) => {
    return (
        <div className='reason'>
            <img className='image-background' src={icon} />
            <h3 className='heading-font reason-title very-dark-violet'>{title}</h3>
            <p className='reason-p dark-grayish-violet'>{description}</p>
        </div>
    )
}

export default Reason;