import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Parallax } from "react-scroll-parallax";

const WorkContainer = styled.div`
    width: 100%;
    height: 800px;
    background-size: cover;
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
    width: 45em;
    height: auto;
    margin: 3em;
    color: white;
    font-size: 2em;
    background-color: #393C3E;
`;

const TopSectionContainer = styled.div`
    width: 80%;
    height: auto;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const CardContainer = styled.div`
    width: 25em;
    height: 30em;
    border-radius: 0px;
    display: flex; 
    flex-direction: column;
    margin: 1.5em;
    align-items: center;
    justify-content: center;
    background-color: #2D3A54;
    transition: 0.5s ease-in-out;

    : hover {
        border: 1px solid white;
        background-color: white;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`;

const CardTitle = styled.div`
    width: 16em;
    height: 0em;
    color: white ;
    font-size: 1.2em;
    align-items: center;
    justify-content: center;
    margin: 8em 1em -10em 1em;
`;

const CardText = styled.div`
    width: auto;
    height: 20em;
    font-size: 1.2em;
    color: transparent;
    text-align: center;
    padding: 8em 2em 2em 2em;
    transition: 0.5s ease-in-out;
    
    : hover {
        font-size: 1.2em;
        color: #2D3A54;
    }
`;


export function Work(props) {
    return (
        <WorkContainer id="work">
            <Marginer direction="vertical" margin={50}/>
            <Background>
                <TitleContainer>
                    <h1> What we do</h1>
                </TitleContainer>
                <TopSectionContainer>
                    <Parallax speed={20}>
                        <CardContainer>
                            <Marginer direction="vertical" margin={10}/>
                            <CardTitle>
                                <h1>Human Resources</h1>
                            </CardTitle>
                            <CardText>
                            <p>We provide interim senior level Human Resource leadership.  Our entire team has expertise in Human Capital Management (HCM), the comprehensive set of an organization’s practices for recruiting, managing, developing, and optimizing employees (as an intangible asset) in order to maximize their business value.</p>
                            </CardText>
                        </CardContainer>
                    </Parallax>
                    <Parallax speed={0}>
                        <CardContainer>
                            <CardTitle>
                                <h1>Transition Management</h1>
                            </CardTitle>
                            <CardText>
                            <p>As transition management specialists, we’ll assist you in executing the program management of strategic actions across your company, including senior management transitions, acquisition integrations, divestiture separations, and other portfolio management actions.</p>
                            </CardText>
                        </CardContainer>
                    </Parallax>
                    <Parallax speed={-10}>
                        <CardContainer>
                            <Marginer direction="vertical" margin={20}/>
                            <CardTitle>
                                <h1>Search</h1>
                            </CardTitle>
                            <CardText>
                            <p>A different approach to recruiting, we’ll embed one or more of our team members into your organization to execute the search process, ensuring that not only do we find a candidate with the right set of knowledge, skills, and abilities, but someone who fits your unique organizational culture. </p>
                            </CardText>
                        </CardContainer>
                    </Parallax>
                </TopSectionContainer>
            </Background>
        </WorkContainer>
    )
}