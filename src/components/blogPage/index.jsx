import React, { useState } from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Button } from "../button";
import { PostContent } from "../blogPage/postContent";

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
`;

const TitleContainer = styled.div`
  font-size: 2em;
  color: #393C3E;
  margin: 2em;
  margin-top: 4em;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;


const BlogPostContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45em;
  height: 35em;
  background-color: #393C3E;
  border-radius: 20px;
  border: 1px solid white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
`;

const DateContainer = styled.div`
  color: white;
  font-size: 1.4em;
  margin: 2em 0 0 0em;
`;

const PostTitleContainer = styled.div`
  color: white;
  font-size: 1.6em;
`;

const PostAuthorContainer = styled.div`
  color: white;
  width: 30em;
  height: auto;
  font-size: 1em;
`;

export function BlogPage(props) {
    return (
        <BlogContainer>
            <Background>
                <TitleContainer>
                  <h1>See what we have to say</h1>
                </TitleContainer>
                <PostsContainer>
                  <BlogPostContainer>
                    <DateContainer> 3/11/19 </DateContainer>
                    <PostTitleContainer> 
                      <h1>Failure, New Journeys, & Gratitude </h1>
                    </PostTitleContainer>
                    <PostAuthorContainer> 
                      <p>Keith Hug</p>
                    </PostAuthorContainer>
                  </BlogPostContainer>
                  <BlogPostContainer>
                    <DateContainer> 3/11/19 </DateContainer>
                    <PostTitleContainer> 
                      <h1>Another blog post about something</h1>
                    </PostTitleContainer>
                    <PostAuthorContainer> 
                      <p>Keith Hug</p>
                    </PostAuthorContainer>
                  </BlogPostContainer>
                </PostsContainer>
            </Background>
        </BlogContainer>
    )
}