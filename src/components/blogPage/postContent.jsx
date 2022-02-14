import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";


const PostContainer = styled.div`
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
  background-color: blue;
`;

const CloseButton = styled.button`

`;

const TitleContainer = styled.div`
`;

const AuthorContainer = styled.div`

`;

const PostContents = styled.div`

`;

export function PostContent(props) {
    return (
        <PostContainer>
            <Background>
              <CloseButton>

              </CloseButton>
              <TitleContainer>
                <h1>Failure, New Journeys, & Gratitude </h1>
              </TitleContainer>
              <AuthorContainer>
                <h2>Keith Hug</h2>
              </AuthorContainer>
              <PostContents>
                <p>Nine months ago I started on a new professional journey.  
A journey that I have been instrumental in sending many 
others on over my twenty-one years of work.  I was exited 
from my corporate role for what was, in the end analysis...
</p>
              </PostContents>
            </Background>
        </PostContainer>
    )
}