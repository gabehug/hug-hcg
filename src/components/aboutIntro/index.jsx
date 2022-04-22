import React from "react";
import styled from "styled-components";
import aboutIntro from "../../assets/aboutIntro.png";
import { Marginer } from "../marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";


const IntroductionContainer = styled.div`
    width: 100%;
    height: 900px;
    background-color: #2D3A54;
    background-size: cover;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ImageContainer = styled.div`
    width: 22em;
    height: 17em;
    margin: 4em;

    img {
        width: 100%;
        height: 100%;
    }
`;

const RightSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 100%;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    color: white;
    font-size: 2.2em;
    text-align: left;
    margin: 2em 0em 0em 0em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        margin: 2em 0em -2em 2em;
    }
`;

const TextContainer = styled.div`
    width: 800px;
    font-size: 1.2em;
    margin: 0;
    text-align: left;
    line-height: 1.5em;
    color: white;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1em;
        width: 20em;
        height: 25em;
        margin: 0em 0em 0em 2em;
    }
`;

export function AboutIntro(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <IntroductionContainer>
            <Background>
                {!isMobile && (
                <ImageContainer>
                    <img src= {aboutIntro} alt="img" />
                </ImageContainer>
                )}
                <Marginer direction="horizontal" margin={isMobile ? 0 : 200} />
                <RightSectionContainer>
                    <TitleContainer>
                        <h1>Who are we?</h1>
                    </TitleContainer>
                    <TextContainer>
                        <p>Keith Hug was introduced to merger and acquisition 
work while at Medtronic Plc, a global leader in medical 
technology-alleviating pain, restoring health, and extending 
life for millions of people around the world.Enthralled to this 
day with Medtronic’s origin story and founder-written mission 
statement, he carries the desire to have a positive impact on 
                        all stakeholders, clients, employees, the environment, and shareholders.</p>
                    </TextContainer>
                </RightSectionContainer>
            </Background>
        </IntroductionContainer>
    )
}