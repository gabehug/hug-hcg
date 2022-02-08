import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import quoteIMG  from "../../assets/quoteIMG.png";

const QuoteContainer = styled.div`
    width: 100%;
    height: 500px;
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
  width: 22em;
  height: 22em;
  margin: 3.5em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const QuoteText = styled.div`
  width: 22em;
  height: auto;
  font-size: 2em;
  text-align: left;
  line-height: 1.4em;
  color: white;
  
`;

export function Quote(props) {
    return (
        <QuoteContainer>
            <Background>
                <CalloutImageContainer>
                  <img src={quoteIMG} alt="img" />
                </CalloutImageContainer>
                <Marginer direction="horizontal" margin={200} />
                <QuoteText>
                  <p>“Trust is the glue of life. It’s the most essential ingredient in effective communication. It’s the foundational principle that holds all relationships.” – Stephen Covey</p>
                </QuoteText>
            </Background>
        </QuoteContainer>
    )
}