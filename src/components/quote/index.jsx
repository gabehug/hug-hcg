import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import quoteIMG  from "../../assets/quoteIMG.png";

const QuoteContainer = styled.div`
    width: 100%;
    height: 350px;
    background-size: cover;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #8194AD;
    
`;

const CalloutImageContainer = styled.div`
  width: 15em;
  height: 15em;
  margin: 3em;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
  
`;

const QuoteText = styled.div`
  width: 22em;
  height: auto;
  font-size: 1.7em;
  text-align: left;
  line-height: 1.5em;
  color: white;
  padding: 3em;
  
`;

export function Quote(props) {
    return (
        <QuoteContainer>
            <Background>
                <CalloutImageContainer>
                  <img src={quoteIMG} alt="img" />
                </CalloutImageContainer>
                <QuoteText>
                  <p>“Trust is the glue of life. It’s the most essential ingredient in effective communication. It’s the foundational principle that holds all relationships.” – Stephen Covey</p>
                </QuoteText>
            </Background>
        </QuoteContainer>
    )
}