import React from "react";
import styled from "styled-components";
import welcomeImg from "../../assets/welcomeImg.svg";


const LandingPageContainer = styled.div`
    width: 100%;
    height: 1000px;
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

const CalloutImageContainer = styled.div`
    width: 42em;
    height: 22em;
    margin: 0 6em;
    img {
        width: 100%;
        height: 100%;
    }
`;

const TextContainer = styled.div`
    width: 16em;
    color: white;
    font-size: 2.2em;
    text-align: left;
    margin: 0 2em;
`;



export function LandingPage(props) {
    return (
        <LandingPageContainer>
            <Background>
                <CalloutImageContainer>
                    <img src= {welcomeImg} alt="img" />
                </CalloutImageContainer>
                <TextContainer>
                    <h1>Looking for help with an upcoming transition in your business?</h1>
                </TextContainer>
            </Background>
        </LandingPageContainer>
    )
}