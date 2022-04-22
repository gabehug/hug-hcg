import React from "react";
import styled from "styled-components";
import intro from "../../assets/intro.svg";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";

const IntroductionContainer = styled.div`
    width: 100%;
    height: 900px;
    background-color: #393C3E;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 100%;
    }
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

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        margin: 4.5em 2em 2em 2em;
        width: 16em;
    }
`;

const BottomSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const TextContainer = styled.div`
    width: 42em;
    height: 15em;
    margin: 0em 0em 0em 10em;
    font-size: 1.2em;
    text-align: left;
    line-height: 1.5em;
    color: white;

    p {
        margin: 0;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1em;
        margin: 0em 2em;
    }
    
`;

const ImageContainer = styled.div`
    width: 42em;
    height: 22em;
    margin: -5em 6em;
    img {
        width: 80%;
        height: auto;
    }
`;

const ButtonContainer = styled(Link)`
    text-decoration: none;
    margin: 0em 12em;
    
    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin: 4em 2em;
    }
`;


export function Introduction(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    return (
        <IntroductionContainer id="aboutLink">
            <Background>
                <TopSectionContainer>
                        <h1>Leadership transitions are difficult for most organizations</h1>
                </TopSectionContainer>
                <BottomSectionContainer>
                    <TextContainer>
                        <p>Maybe you need new leaders to scale. Maybe you want to hand off the business to the next generation of your family. Maybe you’re ready to sell the business. Regardless of your reason, we embed our team into your organization to understand needs and culture, providing interim leadership while searching and placing the right full-time leaders for your business.  </p>
                    </TextContainer>
                    {!isMobile && ( 
                    <ImageContainer>
                        <img src= {intro} alt="img" />
                    </ImageContainer>
                    )}
                </BottomSectionContainer>
                <ButtonContainer to="/about">
                    <Button>Learn More</Button>
                </ButtonContainer>
            </Background>
        </IntroductionContainer>
    )
}