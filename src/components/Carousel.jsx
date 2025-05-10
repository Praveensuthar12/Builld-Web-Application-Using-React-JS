import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import sliderone from '../assets/slider-01.jpg';
import slidertwo from '../assets/slider-02.jpg';
import sliderthree from '../assets/slider-03.jpg';

const Carousels = () => {
    return (
        <Carousel className='container-flude cont-img'>
            <Carousel.Item style={{ height: '90vh', width: '100%' }}>
                <img src={sliderone} alt="slider-enrv" />
                <Carousel.Caption>
                    <h3>Beautiful Garden</h3>
                    <p>A Great Theme For Garden Lawn Care</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item style={{ height: '90vh', width: '100%' }}>
                <img src={slidertwo} alt="slider-enrv" />
                <Carousel.Caption>
                    <h3>Beautiful Garden</h3>
                    <p>A Great Theme For Garden Lawn Care</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: '90vh', width: '100%' }}>
                <img src={sliderthree} alt="slider-enrv" />
                <Carousel.Caption>
                    <h3>Welcome to N & LW Lawn Care</h3>
                    <p>A Great Theme For Garden Lawn Care</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousels;