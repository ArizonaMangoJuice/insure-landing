import React from 'react';
import Reason from '../Reason';
import './Info.css';
import snappyProcess from '../../images/icon-snappy-process.svg';
import affordablePrices from '../../images/icon-affordable-prices.svg';
import peopleFirst from '../../images/icon-people-first.svg';

const Info = props => {
    return(
        <div className='info-container'>
            <div className='inner-info-container'>
                <span className='line dark-violet-line'></span>
                <p className='hero-text-header heading-font very-dark-violet'>We're different</p>
                <div className='reasons'>
                    <Reason 
                        icon={snappyProcess}
                        title='Snappy Process' 
                        description="Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms."
                    />
                    <Reason 
                        icon={affordablePrices}
                        title='Afforable Prices' 
                        description="We don't wasnt you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
                    />
                    <Reason 
                        icon={peopleFirst}
                        title='People First' 
                        description="Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
                    />
                </div>
            </div>
        </div>
    )
};

export default Info;