import React from "react";
import styled from "styled-components";
import welcomeImg from "../../assets/welcomeImg.svg";
import scrollIndicator from "../../assets/scrollIndi.png";
import { Marginer } from "../marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";


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

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin-top: 0em;
        
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
`;

const TextContainer = styled.div`
    width: 17em;
    color: white;
    font-size: 2.2em;
    text-align: left;
    margin: 0 2em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        
    }
`;

const ScrollContainer = styled.div`
    width: auto;
    height: 2em;
    
    img {
        width: 100%;
        height: 100%;
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
                </TopContainer>
                <Marginer direction="vertical" margin={200}/>
                <ScrollContainer>
                    <img src= {scrollIndicator} alt="scroll.png" />
                </ScrollContainer>
            </Background>
        </LandingPageContainer>
    )
}
