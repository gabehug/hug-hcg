import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import goalImg from "../../assets/goalImg.png";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";

const GoalContainer = styled.div`
    width: 100%;
    height: 850px;
    background-color: #fff;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 600px;   
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
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #393C3E;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin: 0em;
    }
`;

const TextContainer = styled.div`
    width: 860px;
    height: auto;
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    text-align: left;
    line-height: 1.5em;
    color: #fff;
    margin: 2em 0em;

    p {
        margin: 1em 0em;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 80%;
        font-size: 1em;
        margin: 0em 2.5em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 100%;
        font-size: 1em;
        margin: 0em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 100%;
        font-size: 1.2m;

    }
`;

const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 26em;
        height: 18 em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 90em;
        height: auto;

        img {
            width: 80%;
            height: auto;
        }
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 100%;
        height: auto;
        margin: 2em;

        img {
            width: 75%;

        }
    }
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 8em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin: 2em;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    color: #fff;
    font-size: 2.2em;
    text-align: left;
    margin: 0em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        margin: 0em 2em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        font-size: 1.8em;
        margin: 0em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        font-size: 2em;
    }
`;

export function AboutGoal(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <GoalContainer>
            <Background>
                <TopContainer>
                    <LeftContainer>
                        <TitleContainer>
                            <h1>Our Goal</h1>
                        </TitleContainer>
                        <TextContainer>
                            <p>Business transformations however big 
or small typically fail on the human front 
not the product, services, or operational 
fronts. We recognize that every business needs someone to 
manage hiring, training, salaries, and employee relations.</p>
                            <p>Whether you sell products or services, 
Hug | Human Capital Group can help run your company’s HR tasks.</p>
                        </TextContainer>
                    </LeftContainer>
                    {!isMobile && (
                    <ImageContainer>
                        <img src= {goalImg} alt="img" />
                    </ImageContainer>
                    )}
                </TopContainer>
            </Background>
        </GoalContainer>
    )
}