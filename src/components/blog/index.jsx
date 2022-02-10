import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Button } from "../button";

const BlogContainer = styled.div`
  width: 100%;
  height: 1100px;
  background-size: cover;
  background-color: #fff;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TitleContainer = styled.div`
  font-size: 2em;
  color: #393C3E;
  margin: 2em;
  margin-top: 4em;
`;

const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 550px;
  background-color: #393C3E;
  border-radius: 20px;
`;

const DateContainer = styled.div`
  color: white;
  font-size: 1.5em;
  margin: 3em 0 0 0em;
`;

const PostTitleContainer = styled.div`
  color: white;
  font-size: 1.8em;
`;

const PostTextContainer = styled.div`
  color: white;
  width: 30em;
  height: auto;
  font-size: 1.3em;
`;



export function Blog(props) {
    return (
        <BlogContainer id="blog">
            <Background>
                <TitleContainer>
                  <h1>See what we have to say</h1>
                </TitleContainer>
                <BlogPostContainer>
                  <DateContainer> 3/11/19 </DateContainer>
                  <PostTitleContainer> 
                    <h1>Failure, New Journeys, & Gratitude </h1>
                  </PostTitleContainer>
                  <PostTextContainer> 
                    <p> Nine months ago I started on a new professional journey.  A journey that I have been instrumental in sending many others on over my twenty-one years of work.  I was exited from my corporate role for what was, in the end analysis...</p>
                  </PostTextContainer>
                  <Marginer direction="vertical" margin={60}/>
                  <Button>Read more</Button>
                </BlogPostContainer>
            </Background>
        </BlogContainer>
    )
}