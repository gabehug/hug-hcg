import React from "react";
import styled from "styled-components";
import quoteIMG  from "../../assets/quoteIMG.png";
import { deviceSize } from "../responsive";

const QuoteContainer = styled.div`
    width: 100%;
    height: 350px;
    background-size: cover;
    
    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 100%;
  }
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #fff;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
      flex-direction: column;
  }
    
`;

const CalloutImageContainer = styled.div`
  width: 15em;
  height: 15em;
  margin: 3em;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: auto;
    height: 30%;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    width: 50%;
    height: auto;

    img {
      margin: 2em;
    }
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    width: 30%;
    height: auto;
    margin: 6em;

    img {
      width: 100%;
    }
  }
`;

const QuoteText = styled.div`
  width: 40em;
  height: auto;
  font-size: 1.6em;
  text-align: left;
  line-height: 2em;
  color: #393c3f;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 80%;

    h2 {
      font-size: 0.8em;
    }
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    width: 30em;
    h2 {
      font-size: 1em;
    }
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    width: 80%;
    margin: 2em;
    h2 {
      font-size: 1.2em;
    }
  }
`;

export function Quote(props) {
    return (
        <QuoteContainer>
            <Background>
                <CalloutImageContainer>
                  <img src={quoteIMG} alt="img" />
                </CalloutImageContainer>
                <QuoteText>
                  <h2>“Trust is the glue of life. It’s the most essential ingredient in effective communication. It’s the foundational principle that holds all relationships.” <br/> – Stephen Covey</h2>
                </QuoteText>
            </Background>
        </QuoteContainer>
    )
}