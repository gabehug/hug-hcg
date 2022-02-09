import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import topImage from "../../assets/topImage.png";
import bottomImage from "../../assets/bottomImage.png";

const InformationContainer = styled.div`
    width: 100%;
    height: 1400px;
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
    height: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const TextContainer = styled.div`
    width: 700px;
    font-size: 1.5em;
    margin: 4em;
    text-align: left;
    line-height: 1.5em;
`;

const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    margin: 0;
    background-color: #2D3A54;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 28em;
        height: 17em;
    }
`;

const BottomContainer = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: row;
`;

const BottomImageContainer = styled.div`
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

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleContainer = styled.div`
    width: 100%;
    color: #2D3A54;
    font-size: 2.2em;
    text-align: left;
    margin: 0em 2em -2em 2em;
`;

export function AboutInformation(props) {
    return (
        <InformationContainer>
            <Background>
                <TopContainer>
                    <TextContainer>
                        <p>This made Keith eager to cultivate his own practice, 
one that would effectively maximize the human 
potential in all of his clients’ organizations.  
He believes that what what makes any organization 
or business thrive is the passion, engagement, and 
alignment of employees, the human capital.  </p>
                    </TextContainer>
                    <ImageContainer>
                    <img src= {topImage} alt="img" />
                    </ImageContainer>
                </TopContainer>
                <BottomContainer>
                    <BottomImageContainer>
                        <img src= {bottomImage} alt="img" />
                    </BottomImageContainer>
                    <RightContainer>
                        <TitleContainer>
                            <h1>Why are we here?</h1>
                        </TitleContainer>
                        <TextContainer>
                            <p>We are here to assist with all aspects of human beings 
when you are undergoing a transformation whether 
due to merger, acquisition, a failing business model, 
or organic growth.  Whether providing interim executive 
HR support, M&A HR due diligence support, acquisition
integration planning, culture / change project management 
expertise, or executive search, we can assist you in managing 
the human capital elements of a transformation effort.</p>
                        </TextContainer>
                    </RightContainer>
                </BottomContainer>
            </Background>
        </InformationContainer>
    )
}