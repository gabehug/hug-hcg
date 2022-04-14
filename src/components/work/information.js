import React from "react";
import { Carousel } from "react-bootstrap";
import './information.css';
import workBackground from "../../assets/workBackground.png";

const CarouselInfo = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src= {workBackground}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Human Resources</h3>
                <h4>We provide interim senior level Human Resource leadership.  Our entire team has expertise in Human Capital Management (HCM), the comprehensive set of an organization’s practices for recruiting, managing, developing, and optimizing employees (as an intangible asset) in order to maximize their business value.</h4>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src= {workBackground}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Transition Management</h3>
                <h4>As transition management specialists, we’ll assist you in executing the program management of strategic actions across your company, including senior management transitions, acquisition integrations, divestiture separations, and other portfolio management actions.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src= {workBackground}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Search</h3>
                <h4>A different approach to recruiting, we’ll embed one or more of our team members into your organization to execute the search process, ensuring that not only do we find a candidate with the right set of knowledge, skills, and abilities, but someone who fits your unique organizational culture. </h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselInfo; 