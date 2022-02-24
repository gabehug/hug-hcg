import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import goalImg from "../../assets/goalImg.png";

const GoalContainer = styled.div`
    width: 100%;
    height: 900px;
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
    height: 900px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #393C3E;
`;

const TextContainer = styled.div`
    width: 900px;
    font-size: 1.5em;
    margin: 2em 1em 2em 4.8em;
    text-align: left;
    line-height: 1.5em;
    color: #fff;
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
    justify-content: space-evenly;
`;

const TitleContainer = styled.div`
    width: 100%;
    color: #fff;
    font-size: 2.2em;
    text-align: left;
    margin: 0 3em;
`;

export function AboutGoal(props) {
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
                    <ImageContainer>
                        <img src= {goalImg} alt="img" />
                    </ImageContainer>
                </TopContainer>
            </Background>
        </GoalContainer>
    )
}