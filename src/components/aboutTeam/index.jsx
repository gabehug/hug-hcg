import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import goalImg from "../../assets/goalImg.png";
import teamGraphic from "../../assets/teamGraphic.png";
import keith from "../../assets/keith.png";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";

const TeamContainer = styled.div`
    width: 100%;
    height: 1300px;
    background-color: #fff;
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
    align-items: start;
    justify-content: center;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 100%;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        height: 100%;
    }
`;

const MiddleContainer = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        flex-direction: column;
    }
`;

const LeftContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 100%;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 40%;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 50%;
        margin: 2em;
    }
`;

const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 13em;
        height: auto;
        border-radius: 10px;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        img {
            width: 10em;
            margin: 2em 0em 1em 0em;
        }
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 100%;
        height: 20em;

        img {
            width: 80%;
            height: auto;
        }
    }
`;

const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        align-items: center;
    }
`;

const NameContainer = styled.div`
    width: 100%;
    font-size: 1.7em;
    text-align: right;
    line-height: 0em;
    color: #2D3A54;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        text-align: center;
        margin: 4em 0em 0em 0em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        font-size: 1.4em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        font-size: 1.5em;
    }
`;

const PositionContainer  = styled.div`
    width: 100%;
    font-size: 0.8em;
    text-align: right;

    p {
        margin: 0;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 0.75em;
        text-align: center;
    }
    
`;

const BottomContainer = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2D3A54 ;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 450px;
    }
`;

const BottomImageContainer = styled.div`
    width: 50%;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 20em;
        height: auto;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 80%;
        height: 20em;

        img {
            width: 80%;
            height: auto;
        }
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 100%;
        height: auto;

        img {
            width: 50%;
        }
    }
`;

const BottomRightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 100%;
    }
`;

const BottomTitleContainer = styled.div`
    width: 100%;
    color: #fff;
    font-size: 2.2em;
    text-align: left;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        margin: 0em 2em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        font-size: 1.8em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        font-size: 2em;
    }
`;

const TextContainer = styled.div`
    width: 600px;
    font-size: 1.2em;
    text-align: left;
    line-height: 2em;
    color: #fff;

    p {
        margin: 1.5em 0em;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1em;
        width: 80%;
        margin: 0em 2.5em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 100%;
        font-size: 1em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 90%;
        font-size: 1.2em;
    }
`;

const ButtonContainer = styled(Link)`
    margin-top: 1.5em;
    text-decoration: none;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin: 0em 2.5em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        margin: 0em;
    }
`;

export function AboutTeam(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <TeamContainer>
            <Background>
                <TopContainer>
                    <MiddleContainer>
                        <LeftContainer>
                            <NameContainer>
                                <h1>Keith Hug</h1>
                            </NameContainer>
                            <PositionContainer>
                                <p>Managing Partner</p>
                            </PositionContainer>
                        </LeftContainer>
                        <RightContainer>
                            <ImageContainer>
                                <img src= {keith} alt="img" />
                            </ImageContainer>
                        </RightContainer>
                    </MiddleContainer>
                </TopContainer>
                <Marginer direction="vertical" margin={100}/>
                <BottomContainer>
                    {!isMobile && (
                    <LeftContainer>
                        <BottomImageContainer>
                            <img src= {teamGraphic} alt="img" />
                        </BottomImageContainer>
                    </LeftContainer>
                    )}
                    <BottomRightContainer>
                        <BottomTitleContainer>
                            <h1>Want to learn more?</h1>
                        </BottomTitleContainer>
                        <TextContainer>
                                <p>Take a look at our blog for more about Keith, Hug Human 
    Capital Group, and more!</p>
                        </TextContainer>
                        <ButtonContainer to="/blog">
                            <Button>Click here</Button>
                        </ButtonContainer>
                    </BottomRightContainer>
                </BottomContainer>
            </Background>
        </TeamContainer>
    )
}