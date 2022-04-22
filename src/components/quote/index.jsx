import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import quoteIMG  from "../../assets/quoteIMG.png";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";

const QuoteContainer = styled.div`
    width: 100%;
    height: 350px;
    background-size: cover;
    
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

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 50%;
    height: 50%;
}
`;

const QuoteText = styled.div`
  width: 40em;
  height: auto;
  font-size: 1.6em;
  text-align: left;
  line-height: 2em;
  color: #393c3f;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1.02em;
    width: 16em;
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