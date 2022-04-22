import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import topImage from "../../assets/topImage.png";
import bottomImage from "../../assets/bottomImage.png";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";

const InformationContainer = styled.div`
    width: 100%;
    height: 1350px;
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
    justify-content: space-between;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 400px;
    }
`;

const TextContainer = styled.div`
    width: 700px;
    font-size: 1.2em;
    text-align: left;
    line-height: 1.5em;
    margin: 5em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 100%;
        font-size: 1em;
        margin: 2em;
    }
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
    align-items: center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        flex-direction: column;
        height: 100%;
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
        width: 26em;
        height: 18 em;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        img {
            width: 20em;
            height: auto;
        }
    }
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 100%;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    color: #2D3A54;
    font-size: 2.2em;
    text-align: left;
    margin: 5em 0em -2em 0em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        margin: 0em 0em -2em 3em;
    }
`;

const AltTextContainer = styled.div`
    width: 700px;
    font-size: 1.2em;
    text-align: left;
    line-height: 1.5em;
    margin: 2em 0em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 20em;
        font-size: 1em;
        margin: 0em 2em;
    }
`;

export function AboutInformation(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
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
                    {!isMobile && (
                    <ImageContainer>
                    <img src= {topImage} alt="img" />
                    </ImageContainer>
                    )}
                </TopContainer>
                <BottomContainer>
                    <BottomImageContainer>
                        <img src= {bottomImage} alt="img" />
                    </BottomImageContainer>
                    <RightContainer>
                        <TitleContainer>
                            <h1>Why are we here?</h1>
                        </TitleContainer>
                        <AltTextContainer>
                            <p>We are here to assist with all aspects of human beings 
when you are undergoing a transformation whether 
due to merger, acquisition, a failing business model, 
or organic growth.  Whether providing interim executive 
HR support, M&A HR due diligence support, acquisition
integration planning, culture / change project management 
expertise, or executive search, we can assist you in managing 
the human capital elements of a transformation effort.</p>
                        </AltTextContainer>
                    </RightContainer>
                </BottomContainer>
            </Background>
        </InformationContainer>
    )
}