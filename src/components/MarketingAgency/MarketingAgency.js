import React from 'react';
import logo3 from '../../images/marketing.jpg'
import './MarketingAgency.css'

const MarketingAgency = () => {
    return (
        <div className='marketing-agency-parents'>
            <h1>Google & Facebook Certified Digital Marketing Expert.</h1>
            <p>We are Professionals in Digital marketing, SEO, YouTube Marketing, Google Ads Campaign, Graphic Design and All Social Media promotion Services</p>

            <div className='marketing-container'>
                <div className='marketing-image'>
                {/* <iframe className='marketing-video' width="560" height="315" src="https://www.youtube.com/embed/MS9FCDmcRtU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                <img src={logo3} alt="" />
                </div>
                <div className='marketing-details'>
                    <p>DMS is an energetic, results-oriented advanced showcasing Digital Marketing Agency. We convey end-to-end site plans, unique techniques, and versatile improvement. We offer you the most valuable services that assist you in achieving your goals. </p>

                    <p>Our team of digital marketing experts guarantees customer success on every project, from strategy and setup through online promotion, design, and development services. We are a reputed company in Bangladesh that has helped thousands of companies with 100% success.</p>
                </div>
            </div>
        </div>
    );
};

export default MarketingAgency;