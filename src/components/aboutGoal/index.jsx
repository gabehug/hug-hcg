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
        width: 20em;
        font-size: 1em;
        margin: 0em 2em;
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
    margin: 0 0em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        margin: 0em 2em;
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