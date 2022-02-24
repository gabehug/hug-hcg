import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import goalImg from "../../assets/goalImg.png";
import teamGraphic from "../../assets/teamGraphic.png";
import keith from "../../assets/keith.png";
import { Button } from "../button";
import { Link } from "react-router-dom";

const TeamContainer = styled.div`
    width: 100%;
    height: 1700px;
    background-color: #fff;
    background-size: cover;
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
`;

const TitleContainer = styled.div`
    width: 45em;
    height: auto;
    margin: 3em 3em 0em 3em;
    color: white;
    font-size: 2em;
    background-color: #393C3E;
`;

const MiddleContainer = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    margin: 0;
`;

const LeftContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

        &: hover {
            border: 1px solid white;
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }
    }
`;

const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const NameContainer = styled.div`
    width: 100%;
    font-size: 1.7em;
    text-align: left;
    line-height: 0em;
    color: #2D3A54;
`;

const PositionContainer  = styled.div`
    width: 100%;
    font-size: 1em;
    line-height: 0em;
    text-align: left;
`;

const BottomContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2D3A54 ;
`;

const BottomImageContainer = styled.div`
    width: 50%;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 22em;
        height: auto;
    }
`;

const BottomRightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

const BottomTitleContainer = styled.div`
    width: 100%;
    color: #fff;
    font-size: 2.2em;
    text-align: left;
    margin: 0em;
`;

const TextContainer = styled.div`
    width: 500px;
    font-size: 1.2em;
    text-align: left;
    line-height: 2em;
    color: #fff;
    margin: 0 0 1em 1em;
`;

const ButtonContainer = styled(Link)`
    margin-left: 1em;
    text-decoration: none;

`;

export function AboutTeam(props) {
    return (
        <TeamContainer>
            <Background>
                <TopContainer>
                    <TitleContainer>
                        <h1>Get to know our team</h1>
                    </TitleContainer>
                    <MiddleContainer>
                        <LeftContainer>
                            <ImageContainer>
                                <img src= {keith} alt="img" />
                            </ImageContainer>
                        </LeftContainer>
                        <RightContainer>
                            <NameContainer>
                                <h1>Keith Hug</h1>
                            </NameContainer>
                            <PositionContainer>
                                <p>Managing Partner</p>
                            </PositionContainer>
                        </RightContainer>
                    </MiddleContainer>
                </TopContainer>
                <BottomContainer>
                    <LeftContainer>
                        <BottomImageContainer>
                            <img src= {teamGraphic} alt="img" />
                        </BottomImageContainer>
                    </LeftContainer>
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