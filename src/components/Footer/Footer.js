import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        // data create for footer
        <div className="footer-section">
            <div className="container footer">
                        <div>
                               <h2>Categories</h2>
                                <p>- All Courses</p>
                                <p>- IELTS Live</p>
                                <p>- Spoken English</p>
                                <p> - Corporate Englis</p>
                               <p>- Corporate English</p>
                      </div>
            
                        <div>
                               <h2>Payments</h2>
                                <p>- System Requirements</p>
                                <p>- Register Activation Key</p>
                                <p>- Site feedback</p>
                       </div>
                        <div>
                               <h2>Get in touch</h2>
                                <p>- Contact Support</p>
                                <p>- Help Center</p>
                       </div>
               </div>
        </div>
    );
};




export default Footer;