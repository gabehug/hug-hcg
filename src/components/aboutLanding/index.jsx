import React from "react";
import styled from "styled-components";
import about from "../../assets/about.png";


const AboutPageContainer = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #393C3E;
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



export function AboutLanding(props) {
    return (
        <AboutPageContainer>
            <Background>
                <TextContainer>
                    <h1>Pace. Experience. Structure.</h1>
                </TextContainer>
                <CalloutImageContainer>
                    <img src= {about} alt="img" />
                </CalloutImageContainer>
            </Background>
        </AboutPageContainer>
    )
}