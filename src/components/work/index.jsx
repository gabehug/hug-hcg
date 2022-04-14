import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Parallax } from "react-scroll-parallax";
import CarouselInfo from "./information";

const WorkContainer = styled.div`
    width: 100%;
    height: 800px;
    background-size: cover;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const TitleContainer = styled.div`
    width: 40em;
    height: auto;
    margin: 3em;
    color: white;
    font-size: 2em;
    background-color: #393C3E;
    padding: 1em;
`;

const TopSectionContainer = styled.div`
    width: 60%;
    height: auto;
    padding: 1em;
    
`;

const CardContainer = styled.div`
    width: 25em;
    height: 30em;
    border-radius: 0px;
    display: flex; 
    flex-direction: column;
    margin: 1.5em;
    align-items: center;
    justify-content: center;
    background-color: #2D3A54;
    transition: 0.5s ease-in-out;

    : hover {
        border: 1px solid white;
        background-color: white;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`;

const CardTitle = styled.div`
    width: 16em;
    height: 0em;
    color: white ;
    font-size: 1.2em;
    align-items: center;
    justify-content: center;
    margin: 8em 1em -10em 1em;
`;

const CardText = styled.div`
    width: auto;
    height: 20em;
    font-size: 1.2em;
    color: transparent;
    text-align: center;
    padding: 8em 2em 2em 2em;
    transition: 0.5s ease-in-out;
    
    : hover {
        font-size: 1.2em;
        color: #2D3A54;
    }
`;


// Carousel code for work section  https://react-bootstrap.github.io/components/carousel/

export function Work(props) {
    return (
        <WorkContainer id="work">
            <Marginer direction="vertical" margin={50}/>
            <Background>
                <TitleContainer>
                    <h1> What we do</h1>
                </TitleContainer>
                <TopSectionContainer>
                    <CarouselInfo />
                </TopSectionContainer>
            </Background>
        </WorkContainer>
    )
}