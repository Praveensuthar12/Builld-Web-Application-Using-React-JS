import React from 'react'
import AboutusImg from '../assets/about-img.jpg';

const Aboutus = () => {
    return (
        <div className="about-main" style={{ padding: '30px 0px' }}>
            <h1 style={{ paddingLeft: '390px' }}>About Us</h1>
            <div className="row" style={{ justifyContent: 'center', width: '58%', marginLeft: '21%', boxShadow: '5px 5px rgb(240, 240, 240)' }}>
                <div className="col-lg-6">
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        marginBottom: '20px'
                    }}
                    >Welcome to N & LW Lawn Care</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h5 style={{
                        fontSize: '14px',
                        textTransform: 'capitalize'
                    }}>Our smart approach</h5>
                    <ul>
                        <li>Sed at tellus eu quam posuere mattis.</li>
                        <li>Phasellus quis erat et enim laoreet posuere ac porttitor ipsum.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Duis porttitor odio pellentesque mollis vulputate.</li>
                        <li>Quisque ac eros non ex hendrerit vehicula.</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid rounded" src={AboutusImg} alt="" style={{ paddingTop: '25px' }} />
                </div>
            </div>
        </div >
    )
}

export default Aboutus;