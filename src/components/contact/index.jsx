import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Button } from "../button";
import contactIMG from "../../assets/contactIMG.png";
import { ContactForm } from "../contactForm";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";


const ContactContainer = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #2D3A54;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 800px;
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

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
    margin: 0em;
  }
`;

const TitleContainer = styled.div`
  font-size: 2em;
  color: white;
  text-align: left;
  margin: 3em 0em -1em 0em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1.2em;
    margin: 3em 2em 0em 2em;
    height: 0em;
  }
`;

const TextContainer = styled.div`
  width: 40em;
  height: 12em;
  font-size: 1.1em;
  text-align: left;
  color: white;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1em;
    width: 20em;
    height: 16em;
    margin: 0em 0em 0em 2em;
  }
`;

const FormContainer = styled.div`
  margin: 0em;
  width: 100%;
  height: 400px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 20em;
    margin: 0em 0em 0em 2em;
  }
`;

const RightContainer = styled.div`
  width: 35em;
  height: auto;
  margin: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 90%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;



export function Contact(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

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
                {!isMobile && ( 
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