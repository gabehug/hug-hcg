import React, { useState } from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";

const BlogContainer = styled.div`
  width: 100%;
  height: 1800px;
  background-size: cover;
  background-color: #fff;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 100%;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    height: 100%;
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    height: 100%;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const PostsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


const BlogPostContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80em;
  height: 105em;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 95%;
    height: 100%;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    width: 95%;
    height: auto;  
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    width: 90%;
    height: auto;
  }
`;

const DateContainer = styled.div`
  color: #393C3E;
  font-size: 1.2em;
  margin-top: 6em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 4em 0em 1em 0em;
}
`;

const PostTitleContainer = styled.div`
  color: #2D3A54;
  font-size: 1.8em;
  font-family: proxima-nova;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1.2em;
    width: 80%;
  }
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    font-size: 1.8em;
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    font-size: 2em;
  }
`;

const PostAuthorContainer = styled.div`
  width: 30em;
  height: 1em;

  p {
    margin: 1em;
    color: #2D3A5;
  }
`;

const TextContainer = styled.div`
  width: 45em;
  height: auto;
  font-size: 1.2em;
  text-align: left;
  color: #393C3E;
  margin: 4em 2em 2em 2em;
  
  p {
    margin: 1em 0em;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1em;
    width: 80%;
}
  {/*Tablet*/}
  @media screen and (min-width: ${deviceSize.mobile}px) and (max-width: ${deviceSize.tablet}px) {
    width: 90%;
    font-size: 1em;
  }
  {/*Laptop*/}
  @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
    width: 90%;
    font-size: 1.2em;
  }
`;

export function BlogPage(props) {
    return (
        <BlogContainer>
            <Background>
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
                      <p>Nine months ago I started on a new professional journey.  A journey that I have been instrumental in sending many others on over my twenty-one years of work.  I was exited from my corporate role for what was, in the end analysis, a personality conflict. This relationship was, despite best efforts and acknowledged strong job performance, one I couldn’t make work.  As my fifteen-year-old stated when I told him I was out of a job, “epic fail”. </p>
                      <p>As a professional who has sat on the other side of the table many times during separation notifications it was while not unexpected, still tough to swallow.  I’ve spent the better part of the last fifteen years building and rebuilding leadership teams so exiting leaders had become a routine part of what I do.  Maybe this was long overdue turnabout, karmic justice for all the employees I’ve played an active role in terminating. </p>
                      <p>Faced with time off in the middle of our short Minnesota summer I did what was completely unnatural, took time off for two months. I had long stretches of time with my wife and children including an unfettered family trip to Michigan to see my extended family without emails, texts, or teleconferences.  It was in a word, fantastic. </p>
                      <p>I also took the opportunity to establish and successfully launch my own LLC.  I am extremely thankful for the opportunities to fill HR leadership gaps and complete critical compensation, job structure, and organizational structure projects. To my four corporate clients, thank you for entrusting me with your important, sensitive work. </p>
                      <p>As I start a new corporate role I want to thank my family, clients, friends, and business colleagues for the all the words of encouragement, leads, breakfasts, coffees, lunches, and beer.  Knowing that I was so well supported made this transition time easy.  And at the risk of missing someone, special thanks to: </p>
                      <p>Katie, Kris, Bob, Reggie, Amy, Angela, Ann, Annie, Artie, Casey, Catherine, Clare, David, David, Erin, Frank, Glen, Jackie, Jake, Jan, Jean, Jeff, Joe, John, Juliana, Kate, Kevin, Kevin, Lisa, Mark, Jerome, Jessica, Jim, John, John, Jennifer, Kelly, Laura, Mark, Maura, Monica, Nancy, Steve, Patrick, Paul, Paul, Peter, PK, Sally, Samir, Scott, Sumit, Sandy, Sandra, Sarah, Steve, Sue, Sue, Tarra, Tasha, Tracey, and Vic.</p>
                      <p>April 10, 2016 </p>
                    </TextContainer>
                  </BlogPostContainer>
                </PostsContainer>
            </Background>
        </BlogContainer>
    )
}