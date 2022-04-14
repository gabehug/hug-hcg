import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import linkedIn from "../../assets/linkedIn.png";
import { Logo } from "../logo";

const FooterContainer = styled.div`
    width: 100%;
    height: 450px;
    background-color: #272829;
    background-size: cover;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const LeftContainer = styled.div`
  width: 30em;
  height: auto;
  margin: 4em 5em;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 120px;
  margin-bottom: -4em;
  img {
      width: 100%;
      height: 100%;
  }
`; 

const DescriptionContainer = styled.div`
  height: 3em;
  width: 100%;
  font-size: 1.1em;
  color: #ACACAC;
  text-align: left;
  margin: 0em 1em; 
`;

const CopywriteContainer = styled.div`
  height: 1em;
  width: 100%;
  font-size: 0.6em;
  color: #ACACAC;
  text-align: left;
  margin: 18em 0em 0em 1em;
`;

const RightContainer = styled.div`
  width: 60em;
  height: auto;
  margin: 5em 5em 0 5em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: left;
  
`;

const ListContainer = styled.div`
  width: auto;
  height: auto;
`;

const ListTitle = styled.div`
  font-size: 0.8em;
  font-family: proxima-nova, sans-serif;
  font-weight: 200;
  color: #fff;
  text-align: left;
  margin: 2em;
`;

const ListItemsContainer = styled.div`
  width: auto;
  height: auto;
`;

const ImgContainer = styled.div`
  width: 3.4em;
  height: auto;
  margin-left: 0.2em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LinkItem = styled.div`
  font-size: 1.1em;
  font-family: proxima-nova, sans-serif;
  font-weight: 200;
  color: #ACACAC;
  text-align: left;
  margin: 1em 0 1em 2em;
  text-decoration: none;
  
  &: hover {
    color: #fff;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export function Footer(props) {
    return (
        <FooterContainer>
            <Background>
              <LeftContainer>
                <LogoContainer>
                  <Logo />
                </LogoContainer>
                <DescriptionContainer>
                  <p>We believe that what what makes any organization or business thrive is the passion, engagement, and alignment of employees, the human capital.  </p>
                </DescriptionContainer>
                <CopywriteContainer>
                  <p>©2021 Hug Human Capital Group. All Rights Reserved.</p>
                </CopywriteContainer>
              </LeftContainer>
              <Marginer direction="horizontal" margin={60} />
              <RightContainer>
                <ListContainer>
                  <ListTitle>
                    <h1>Explore</h1>
                  </ListTitle>
                  <ListItemsContainer>
                    <LinkItem><a href="/#about">About</a></LinkItem>
                    <LinkItem><a href="/#work">Areas of Practice</a></LinkItem>
                    <LinkItem><a href="/#scheduling">Book an Appointment</a></LinkItem>
                    <LinkItem><a href="/#blog">Blog</a></LinkItem>
                  </ListItemsContainer>
                </ListContainer>
                <ListContainer>
                  <ListTitle>
                    <h1>Contact Us</h1>
                  </ListTitle>
                  <ListItemsContainer>
                    <LinkItem><a href="tel:6513292875">(651) 329-2875</a></LinkItem>
                    <LinkItem><a href="mailto: hug.humancapitalgroup@gmail.com">Email us</a></LinkItem>
                    <ImgContainer>
                      <LinkItem><a href="https://www.linkedin.com/in/keith-hug-2a7905/" target="_blank"> <img src= {linkedIn} alt="linkedinLogo"></img></a></LinkItem>
                    </ImgContainer>
                  </ListItemsContainer>
                </ListContainer>
                <ListContainer>
                  <ListTitle>
                    <h1>Employee Portal</h1>
                  </ListTitle>
                </ListContainer>
              </RightContainer>
            </Background>
        </FooterContainer>
    )
}