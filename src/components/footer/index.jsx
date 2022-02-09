import React from "react";
import styled from "styled-components";
import hugHCGLogo from "../../assets/hugHCGLogo";
import { Marginer } from "../../components/marginer";

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
  justify-content: center;
  align-items: left;
  
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 120px;
  img {
      width: 100%;
      height: 100%;
  }
`; 

const DescriptionContainer = styled.div`
  font-size: 1.1em;
  color: #ACACAC;
  text-align: left;
  margin: 0em 1.3em;
`;

const CopywriteContainer = styled.div`
  font-size: 0.8em;
  color: #ACACAC;
  text-align: left;
  margin: 7em 1.3em 0em 2em;
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

const Link = styled.div`
  font-size: 1.1em;
  font-family: proxima-nova, sans-serif;
  font-weight: 200;
  color: #ACACAC;
  text-align: left;
  margin: 1em 0 1em 2em;
  
  &: hover {
    color: #fff;
    cursor: pointer;
  }
`;

export function Footer(props) {
    return (
        <FooterContainer>
            <Background>
              <LeftContainer>
                <LogoContainer>
                  <img src= {hugHCGLogo} alt="logo.img" />
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
                    <Link>About</Link>
                    <Link>Services</Link>
                    <Link>Book an Appointment</Link>
                    <Link>Meet the team</Link>
                    <Link>Blog</Link>
                  </ListItemsContainer>
                </ListContainer>
                <ListContainer>
                  <ListTitle>
                    <h1>Contact Us</h1>
                  </ListTitle>
                  <ListItemsContainer>
                    <Link>(651) 329-2875</Link>
                    <Link>hug.humancapitalgroup@gmail.com</Link>
                    <Link>LINKEDIN</Link>
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