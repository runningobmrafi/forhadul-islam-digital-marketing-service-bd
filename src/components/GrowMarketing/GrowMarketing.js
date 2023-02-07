import React from 'react';
import growPic from '../../images/grow.jpg'
import './GrowMarketing.css'

const GrowMarketing = () => {
    return (
        <div className='grow-container'>
            <div className='grow-title-and-details'>
                <h1>Grow Faster with a Data-Driven Marketing Strategy</h1>
                <p>Would You Like to Generate an Enormous ROI Monthly or yearly? </p>

                <p>12 Years of Experience in The Technology industry</p>

                <p>A Certified Leading Digital Marketing Agency
                    Giving Free Consultations to Skyrocket Your Business!</p>

                <button className='colsultations'>Book a Consultations</button>
            </div>
            <div className='grow-image'>
                <img src={growPic} alt="Grow picture" />
            </div>
        </div>
    );
};

export default GrowMarketing;