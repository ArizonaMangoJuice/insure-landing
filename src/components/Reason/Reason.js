import React from 'react';

const Reason = ({title, description, icon}) => {
    return (
        <div className='reason'>
            <div className='image-background'>
                <img src={icon} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Reason;