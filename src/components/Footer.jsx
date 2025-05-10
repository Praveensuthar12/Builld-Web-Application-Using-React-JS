import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: '40px 0',
    };

    const headingStyle = {
        color: '#ffffff',
        marginBottom: '20px',
    };

    const iconStyle = {
        marginRight: '10px',
    };

    const linkStyle = {
        color: '#ffffff',
        textDecoration: 'none',
        display: 'block',
        marginBottom: '8px',
    };

    const socialIconStyle = {
        display: 'inline-block',
        margin: '0 10px',
        color: '#ffffff',
        fontSize: '18px',
    };

    return (
        <footer style={footerStyle}>
            <div className="container ">
                <div className="row text-center" style={{ justifyContent: 'center' }}>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <h5 style={headingStyle}>Find us</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p><i className="fa fa-location-arrow" style={iconStyle}></i> 9878/25 sec 9 rohini 35</p>
                        <p><i className="fa fa-phone" style={iconStyle}></i> +91-9999878398</p>
                        <p><i className="fa fa-envelope" style={iconStyle}></i> info@example.com</p>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <h5 style={headingStyle}>Quick links</h5>
                        <a href="#" style={linkStyle}>Default Version</a>
                        <a href="#" style={linkStyle}>Boxed Version</a>
                        <a href="#" style={linkStyle}>Our Team</a>
                        <a href="#" style={linkStyle}>About Us</a>
                        <a href="#" style={linkStyle}>Our Services</a>
                        <a href="#" style={linkStyle}>Get In Touch</a>
                    </div>
                </div>

                <div className="text-center mt-3">
                    <a href="#" style={socialIconStyle}><i className="fab fa-facebook-f"></i></a>
                    <a href="#" style={socialIconStyle}><i className="fab fa-twitter"></i></a>
                    <a href="#" style={socialIconStyle}><i className="fab fa-linkedin"></i></a>
                    <a href="#" style={socialIconStyle}><i className="fab fa-instagram"></i></a>
                </div>

                <p className="text-center mt-3" style={{ color: '#ccc' }}>
                    All Rights Reserved. &copy; 2025
                </p>
            </div>
        </footer>
    );
};

export default Footer;
