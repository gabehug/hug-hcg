import React from "react";
import styled from "styled-components";
import topImage from "../../assets/topImage.png";
import bottomImage from "../../assets/bottomImage.png";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";

const InformationContainer = styled.div`
    width: 100%;
    height: 1350px;
    background-color: #fff;
    background-size: cover;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 100%;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        height: 100%;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
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
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 400px;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        height: 100%;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        height: 100%;
    }
`;

const TextContainer = styled.div`
    width: 700px;
    font-size: 1.2em;
    text-align: left;
    line-height: 1.5em;
    margin: 5em;
    
    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 100%;
        font-size: 1em;
        margin: 2em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        font-size: 1em;
        margin: 0em 2em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 100%;
        font-size: 1.2em;
        margin: 4em 2em;
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

    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 100%;
        height: 20em;

        img {
            width: 80%;
            height: auto;
        }
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 100%;
        height: 30em;
        
        img {
            width: 60%;
            height: auto;

        }
    }
`;

const BottomContainer = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: row;
    align-items: center;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        flex-direction: column;
        height: 750px;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        height: 500px;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        height: 600px;

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

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        img {
            width: 20em;
            height: auto;
        }
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 100%;
        height: 20em;

        img {
            width: 60%;
            height: auto;
        }
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 100%;
        height: auto;
        margin: 2em;

        img {
            width: 60%;
            height: auto;
        }
    }
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 100%;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 100%;
        margin-right: 2em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 100%;
        margin: 2em;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    color: #2D3A54;
    font-size: 2.2em;
    text-align: left;
    margin: 5em 0em -2em 0em;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        margin: 2em 0em -3em 2em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        font-size: 1.8em;
        margin: 0em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        font-size: 2em;
        width: 100%;
        margin: 0em 0em 0em 0em;
    }
`;

const AltTextContainer = styled.div`
    width: 700px;
    font-size: 1.2em;
    text-align: left;
    line-height: 1.5em;
    margin: 2em 0em;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 80%;
        font-size: 1em;
        margin: 0em 2.5em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
        width: 100%;
        font-size: 1em;
        margin: 1em 0em 4em 0em;

        p {
            margin: 0;
        }
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        width: 100%;
        height: auto;
        font-size: 1.2em;
        p {
            margin: 0em;
        }
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