import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Button } from "../button";
import contactIMG from "../../assets/contactIMG.png";


const ContactContainer = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #2D3A54;
    background-size: cover;
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
  margin: 2em;
`;

const TitleContainer = styled.div`
  font-size: 2em;
  color: white;
  text-align: left;
  margin: 3em 0;
`;

const TextContainer = styled.div`
  color: white;
  width: 30em;
  height: auto;
  font-size: 1.3em;
  text-align: left;
`;

const FormContainer = styled.div`
  margin: 2em 0;
  width: 100%;
  height: 300px;
  background-color: grey;
`;

const RightContainer = styled.div`
  width: 35em;
  height: auto;
  margin: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;



export function Contact(props) {
    return (
        <ContactContainer>
            <Background>
                <LeftContainer>
                  <TitleContainer>
                    <h1>Contact us</h1>
                  </TitleContainer>
                  <TextContainer>
                    <p>To help us best serve your inquiry, we recommend that you first describe the reason you’d like to connect. You may also email or call us to make an appointment. Our general response time is one business day.</p>
                  </TextContainer>
                  <FormContainer>
                    This needs to be a contact form
                  </FormContainer>
                  <Button>Submit</Button>
                </LeftContainer>
                <Marginer direction="horizontal" margin={100} />
                <RightContainer>
                  <ImageContainer>
                    <img src= {contactIMG} alt="img" />
                  </ImageContainer>
                </RightContainer>
            </Background>
        </ContactContainer>
    )
}