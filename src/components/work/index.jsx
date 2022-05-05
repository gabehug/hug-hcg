import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Parallax } from "react-scroll-parallax";
import CarouselInfo from "./information";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";

const WorkContainer = styled.div`
    width: 100%;
    height: 900px;
    background-size: cover;

    {/*Tablet*/}
    @media screen and (max-width: ${deviceSize.tablet}px) {
        height: 100%;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        height: 100%;
    }
    
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const TopSectionContainer = styled.div`
    width: 75%;
    height: auto;
    padding: 1em;
    margin-bottom: 6em;

    {/*Tablet*/}
    @media screen and (max-width: ${deviceSize.tablet}px) {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 80%;
        margin-bottom: 3em;
    }
`;


// Carousel code for work section  https://react-bootstrap.github.io/components/carousel/


const CardContainer = styled.div`
    width: 90vw;
    height: 100%;
    padding: 2em;
    margin: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2D3A54;
    
`;

const CardTitle = styled.div`
    height: 100%;
    width: 75vw;
    color: #fff;
    font-size: 1.2em;
    display: flex;
    margin: 2em;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content: center;
    }
`;

const CardText = styled.div`
    width: 75vw;
    height: auto;
    font-size: 1em;
    color: #fff;
    text-align: left;

    p {
        margin: 0;
    }
`;


export function Work(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
    return (
        <WorkContainer id="work">
            <Marginer direction="vertical" margin={50}/>
            <Background>
                {!isTablet && (
                    <TopSectionContainer>
                        <CarouselInfo />
                    </TopSectionContainer>
                )}
                {isTablet && (
                    <TopSectionContainer>
                            <CardContainer>
                                    <CardTitle>
                                        <h1>Human Resources</h1>
                                    </CardTitle>
                                    <CardText>
                                    <p>We provide interim senior level Human Resource leadership.  Our entire team has expertise in Human Capital Management (HCM), the comprehensive set of an organization’s practices for recruiting, managing, developing, and optimizing employees (as an intangible asset) in order to maximize their business value.</p>
                                    </CardText>
                                </CardContainer>
                                <CardContainer>
                                    <CardTitle>
                                        <h1>Transition Management</h1>
                                    </CardTitle>
                                    <CardText>
                                    <p>As transition management specialists, we’ll assist you in executing the program management of strategic actions across your company, including senior management transitions, acquisition integrations, divestiture separations, and other portfolio management actions.</p>
                                    </CardText>
                                </CardContainer>
                                <CardContainer>
                                    <CardTitle>
                                        <h1>Search</h1>
                                    </CardTitle>
                                    <CardText>
                                    <p>A different approach to recruiting, we’ll embed one or more of our team members into your organization to execute the search process, ensuring that not only do we find a candidate with the right set of knowledge, skills, and abilities, but someone who fits your unique organizational culture. </p>
                                    </CardText>
                                </CardContainer>
                    </TopSectionContainer>
                    )}
                
            </Background>
        </WorkContainer>
    )
}