import React from "react";
import styled from "styled-components";
import intro from "../../assets/intro.svg";
import { Button } from "../button";

import { Link } from "react-router-dom";

const IntroductionContainer = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #393C3E;
    background-size: cover;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const TopSectionContainer = styled.div`
    margin: 4.5em 6em 2em 6em;
    width: 30em;
    color: white;
    font-size 2em;
    text-align: left;
`;

const BottomSectionContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`;

const TextContainer = styled.div`
    width: 800px;
    font-size: 1.5em;
    margin: 0 0 0 7em;
    text-align: left;
    line-height: 1.5em;
    color: white;
`;

const ImageContainer = styled.div`
    width: 42em;
    height: 22em;
    margin: -5em 6em;
    img {
        width: 100%;
        height: 100%;
    }
`;

const ButtonContainer = styled(Link)`
    text-decoration: none;
    margin: 2em 12em;
`;


export function Introduction(props) {
    return (
        <IntroductionContainer id="about">
            <Background>
                <TopSectionContainer>
                        <h1>Leadership transitions are difficult for most organizations</h1>
                </TopSectionContainer>
                <BottomSectionContainer>
                    <TextContainer>
                        <p>Maybe you need new leaders to scale. Maybe you want to hand off the business to the next generation of your family. Maybe you’re ready to sell the business. Regardless of your reason, we embed our team into your organization to understand needs and culture, providing interim leadership while searching and placing the right full-time leaders for your business.  </p>
                    </TextContainer>
                    <ImageContainer>
                        <img src= {intro} alt="img" />
                    </ImageContainer>
                </BottomSectionContainer>
                <ButtonContainer to="/about">
                    <Button>Learn More</Button>
                </ButtonContainer>
            </Background>
        </IntroductionContainer>
    )
}