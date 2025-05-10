import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import serviceImgOne from '../assets/services-img-01.jpg'
import serviceImgtwo from '../assets/services-img-02.jpg'
import serviceImgthree from '../assets/services-img-03.jpg'
import '../components/Services.css';

const Services = () => {
    return (
        <div style={{ width: '100%' }} >
            <h1 style={{ paddingLeft: '400px' }}>Our Best Services</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                <Card style={{ width: '21rem' }}>
                    <Card.Img variant="top" src={serviceImgOne} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '21rem' }}>
                    <Card.Img variant="top" src={serviceImgtwo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '21rem' }}>
                    <Card.Img variant="top" src={serviceImgthree} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}



export default Services;