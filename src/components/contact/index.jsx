import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import contactIMG from "../../assets/contactIMG.png";
import { ContactForm } from "../contactForm";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";


const ContactContainer = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #2D3A54;
    background-size: cover;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 800px;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
      height: 900px;
  }
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const LeftContainer = styled.div`
  width: 40em;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 2em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
    margin: 0em;
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    width: 50%;
    margin: 2em 4em 0em 4em;
  }
  
`;

const TitleContainer = styled.div`
  font-size: 2em;
  color: white;
  text-align: left;
  margin: 3em 0em -1em 0em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1.2em;
    margin: 3em 2em 0em 2em;
    height: 0em;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    font-size: 1.8em;
    margin: 2em 1em;
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    margin: 3em 2em 0em 2em;
  }
`;

const TextContainer = styled.div`
  width: 40em;
  height: 12em;
  font-size: 1.1em;
  text-align: left;
  color: white;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1em;
    width: 80%;
    height: 16em;
    margin: 0em 0em 0em 2em;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    height: auto;
    font-size: 1em;
    margin: 0em 4em 2em 2em;
    p {
      margin: 0;
    }
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    margin: 0em 2em 0em 4em;
  }
`;

const FormContainer = styled.div`
  margin: 0em;
  width: 100%;
  height: 400px;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
    margin: 1em 0em 0em 2em;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    margin: 0em 2em;
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    margin: 0em 2em 0em 4em;
  }
`;

const RightContainer = styled.div`
  width: 35em;
  height: auto;
  margin: 5em;
  display: flex;
  justify-content: center;
  align-items: center;

  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  height: auto;
  
  img {
    width: 100%;
    height: 100%;
  }

  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    width: 0%;
  }
`;



export function Contact(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
    return (
        <ContactContainer id="contact">
            <Background>
                <LeftContainer>
                  <TitleContainer>
                    <h1>Contact us</h1>
                  </TitleContainer>
                  <TextContainer>
                    <p>To help us best serve your inquiry, we recommend that you first describe the reason you’d like to connect. You may also email or call us to make an appointment. Our general response time is one business day.</p>
                  </TextContainer>
                  <FormContainer>
                    <ContactForm />
                  </FormContainer>
                </LeftContainer>
                <Marginer direction="horizontal" margin={isMobile ? 0 : 100} />
                {!isTablet && ( 
                <RightContainer>
                  <ImageContainer>
                    <img src= {contactIMG} alt="img" />
                  </ImageContainer>
                </RightContainer>
                )}
            </Background>
        </ContactContainer>
    )
}