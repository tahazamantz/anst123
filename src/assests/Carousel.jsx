import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pigment1 from './images/car-list-3.jpg';
import pigment2 from'./images/car-list-2.jpg';
import pigment3 from './images/car-list-1.jpg';

function DesignProjects(props) {
    return (
        <section>
            <div className='design-project'>
                <Carousel interval={3000}>
                    <Carousel.Item>
                        <img className='d-block w-100' src={pigment1} alt='First slide' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100' src={pigment2} alt='Third slide' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100' src={pigment3} alt='Third slide' />
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default DesignProjects;

