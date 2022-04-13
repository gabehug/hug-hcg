import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Button } from "../button";
import { Link } from "react-router-dom";

const BlogContainer = styled.div`
  width: 100%;
  height: 800px;
  background-size: cover;
  background-color: #fff;
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
`;

const DateContainer = styled.div`
  color: white;
  font-size: 1.5em;
  margin-bottom: 1em;
`;

const PostTitleContainer = styled.div`
  color: white;
  font-size: 1.7em;
`;

const PostTextContainer = styled.div`
  color: white;
  width: 40em;
  height: auto;
  font-size: 1.3em;
`;
const ButtonContainer = styled(Link)`
    text-decoration: none;
    margin-top: 3em;
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