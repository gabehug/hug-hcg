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

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 700px;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        height: 700px;
    }
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

    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 100%;
        height: auto;
        margin: 2em;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

const RightSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    {/*Mobile*/}
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

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        margin: 8em 0em 2em 2em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        font-size: 1.8em;
        margin: 2em 2em 0em 2em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        font-size: 2em;
        margin: 0em 0em 1em 1em;
    }
`;

const TextContainer = styled.div`
    width: 800px;
    font-size: 1.2em;
    margin: 0;
    text-align: left;
    line-height: 1.5em;
    color: white;

    p {
        margin: 0;
    }

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1em;
        width: 80%;
        height: 25em;
        margin: 0em 0em 0em 2.5em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 80%;
        font-size: 1em;
        margin: 2em 4em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 85%;
        font-size: 1.2em;
        margin: 0em 0em 1em 2em;
    }
`;

export function AboutIntro(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
    return (
        <IntroductionContainer>
            <Background>
                {!isTablet && (
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