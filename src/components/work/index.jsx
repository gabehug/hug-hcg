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