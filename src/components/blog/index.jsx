import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";

const BlogContainer = styled.div`
  width: 100%;
  height: 750px;
  background-size: cover;
  background-color: #fff;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
    height: 550px;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    height: 675px;
  }

`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;


const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 600px;
  background-color: #393C3E;
  border-radius: 20px;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 90%;
    height: 475px;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    width: 90%;
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    width: 90%;
    margin-bottom: 3em;
    }
`;

const DateContainer = styled.div`
  color: white;
  font-size: 1.5em;
  margin-bottom: 1em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1em;
    margin: 2em;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    font-size: 1.2em;
  }
`;

const PostTitleContainer = styled.div`
  color: white;
  font-size: 1.7em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1.2em;
    width: 80%;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    font-size: 1.5em;
    width: 80%;
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    font-size: 2em;
    }
`;

const PostTextContainer = styled.div`
  color: white;
  width: 40em;
  height: 12em;
  font-size: 1.1em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 0.8em;
    width: 90%;
    height: auto;
    margin: 1em 0em;

    p {
      margin: 0;
    }
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    font-size: 1em;
    width: 80%;
    
    p {
      margin: 2em 0em;
    }
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    p {
      font-size: 1.1em;
      margin: 2em 1em;
    }
`;

const ButtonContainer = styled(Link)`
  text-decoration: none;
  margin-top: 3em;

  {/*Mobile*/}
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 1em 0em 2em 0em;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    margin: 0em;
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    margin: 0em;
  }
`;


export function Blog(props) {
    return (
        <BlogContainer id="blog">
            <Background>
                <BlogPostContainer>
                  <DateContainer> 3/11/19 </DateContainer>
                  <PostTitleContainer> 
                    <h1>Failure, New Journeys, & Gratitude </h1>
                  </PostTitleContainer>
                  <PostTextContainer> 
                    <p> Nine months ago I started on a new professional journey.  A journey that I have been instrumental in sending many others on over my twenty-one years of work.  I was exited from my corporate role for what was, in the end analysis...</p>
                  </PostTextContainer>
                  <ButtonContainer to="/blog">
                    <Button>Read more</Button>
                  </ButtonContainer>
                </BlogPostContainer>
            </Background>
        </BlogContainer>
    )
}