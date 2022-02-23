import React, { useState } from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Button } from "../button";
import { PostContent } from "../blogPage/postContent";

const BlogContainer = styled.div`
  width: 100%;
  height: 1600px;
  background-size: cover;
  background-color: #fff;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; 
`;



const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
`;


const BlogPostContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 80em;
  height: 80em;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
`;

const DateContainer = styled.div`
  color: #393C3E;
  font-size: 1.4em;
  margin-top: 10em;
`;

const PostTitleContainer = styled.div`
  color: #2D3A54;
  font-size: 1.6em;
`;

const PostAuthorContainer = styled.div`
  color: #2D3A5;
  width: 30em;
  height: auto;
  font-size: 1.5em;
`;

const TextContainer = styled.div`
  width: 32em;
  height: auto;
  font-size: 1.5em;
  text-align: left;
  color: #393C3E;
  margin: 4em 2em 2em 2em;
`;

export function BlogPage(props) {
    return (
        <BlogContainer>
            <Background>
              <Marginer direction="vertical" margin={300}/>
                <PostsContainer>
                  <BlogPostContainer>
                    <DateContainer> 3/11/19 </DateContainer>
                    <PostTitleContainer> 
                      <h1>Failure, New Journeys, & Gratitude </h1>
                    </PostTitleContainer>
                    <PostAuthorContainer> 
                      <p>Keith Hug</p>
                    </PostAuthorContainer>
                    <TextContainer>
                      <p> Nine months ago I started on a new professional journey.  A journey that I have been instrumental in sending many others on over my twenty-one years of work.  I was exited from my corporate role for what was, in the end analysis...</p>
                    </TextContainer>
                  </BlogPostContainer>
                </PostsContainer>
            </Background>
        </BlogContainer>
    )
}