import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Parallax } from "react-scroll-parallax";
import CarouselInfo from "./information";

const WorkContainer = styled.div`
    width: 100%;
    height: 900px;
    background-size: cover;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const TopSectionContainer = styled.div`
    width: 60%;
    height: auto;
    padding: 1em;
    margin-bottom: 6em;
`;


// Carousel code for work section  https://react-bootstrap.github.io/components/carousel/

export function Work(props) {
    return (
        <WorkContainer id="work">
            <Marginer direction="vertical" margin={50}/>
            <Background>
                <TopSectionContainer>
                    <CarouselInfo />
                </TopSectionContainer>
            </Background>
        </WorkContainer>
    )
}