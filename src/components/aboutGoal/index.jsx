import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import goalImg from "../../assets/goalImg.png";

const GoalContainer = styled.div`
    width: 100%;
    height: 850px;
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
    justify-content: space-around;
    background-color: #393C3E;
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
`;

const TitleContainer = styled.div`
    width: 100%;
    color: #fff;
    font-size: 2.2em;
    text-align: left;
    margin: 0 0em;
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