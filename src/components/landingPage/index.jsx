import React from "react";
import styled from "styled-components";
import welcomeImg from "../../assets/welcomeImg.svg";
import scrollIndicator from "../../assets/scrollIndi.png";
import { Marginer } from "../marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import { Button } from "../button";
import { Link } from "react-router-dom";


const LandingPageContainer = styled.div`
    width: 100%;
    height: 900px;
    background-color: #2D3A54;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 800px;
    }
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 7em;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin-top: 7em;
        flex-direction: column;
        width: 90%;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        flex-direction: column;
        width: 90%;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 100%;
        justify-content: center;
    }
`;

const CalloutImageContainer = styled.div`
    width: 42em;
    height: 22em;
    margin: 0 2em;

    img {
        width: 80%;
        height: 100%;
        margin-right: 5em;
    }

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 100vw;
        height: 12em;
        margin: 2em 0em;

        img {
            width: 100%;
            height: 100%;
        }
    }

    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 90vw;
        height: 16em;
        margin: 0em 0em 2em 0em;

        img {
            width: 100%;
            height: 100%;
        }
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 30%;
        height: auto;
        margin: 0em 0em 0em 2em;
        img {
            width: 100%;
        }
    }
`;

const TextContainer = styled.div`
    width: 17em;
    color: white;
    font-size: 2.2em;
    text-align: left;
    margin: 0em 2em;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        width: 90%;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        font-size: 2em;
        width: 80%;
        margin: 2em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 40%;
        font-size: 2em;
        margin: 0em 0em 0em 4em;
    }

`;

const ScrollContainer = styled.div`
    width: auto;
    height: 2em;
    
    img {
        width: 100%;
        height: 100%;
    }
    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin-bottom: 6em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        margin-bottom: 6em;
    }
`;

const BottomSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0em 2em;
    align-items: center;
`;

const AltTextContainer = styled.div`
    width: 80%;
    height: auto;
    margin: 2em;
    font-size: 1em;
    text-align: left;
    line-height: 1.5em;
    color: white;

    p {
        margin: 0;
    }
    
`;



export function LandingPage(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    return (
        <LandingPageContainer>
            <Background>
                <TopContainer>
                    {!isMobile && (
                    <CalloutImageContainer>
                        <img src= {welcomeImg} alt="img" />
                    </CalloutImageContainer>
                    )}
                    <TextContainer>
                        <h1>Looking for help with an upcoming transition in your business?</h1>
                    </TextContainer>
                    {isMobile && (
                    <BottomSectionContainer id="aboutLink">
                        <CalloutImageContainer>
                            <img src= {welcomeImg} alt="img" />
                        </CalloutImageContainer>
                        <AltTextContainer>
                            <p>We believe that what makes any organization or business thrive is the passion, engagement, and alignment of employees, the human capital.</p>
                        </AltTextContainer>
                    </BottomSectionContainer>
                    )}
                </TopContainer>
                <Marginer direction="vertical" margin={200}/>
                <ScrollContainer>
                    <img src= {scrollIndicator} alt="scroll.png" />
                </ScrollContainer>
            </Background>
        </LandingPageContainer>
    )
}
