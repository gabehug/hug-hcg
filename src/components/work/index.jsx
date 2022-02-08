import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";

const WorkContainer = styled.div`
    width: 100%;
    height: 1600px;
    background-size: cover;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TitleContainer = styled.div`
    width: 35em;
    height: 5em;
    margin: 3em 3em 2em 3em;
    color: white;
    font-size: 2em;
    background-color: #393C3E;
    
`;

const TopSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const CardTitle = styled.div`
    width: 12em;
    color: #2D3A54;
    font-size: 1.8em;
    margin: 4em ;
    padding: 0.5em;
`;

const CardText = styled.div`
    width: 22em;
    font-size: 1.5em;
    justify-content: center;
    text-align: left;
    margin: 4em 0;
`;

const LineContainer = styled.div`
    width: 70em;
    height: 0.2em;
    background-color: black;
`;

const MidSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2em;
`;

const BottomSectionContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 2em;
`;

export function Work(props) {
    return (
        <WorkContainer>
            <Background>
                <TitleContainer>
                    <h1> What we do</h1>
                </TitleContainer>
                <TopSectionContainer>
                    <CardTitle>
                        <h1>Transition Management</h1>
                    </CardTitle>
                    <Marginer direction="horizontal" margin={60} />
                    <CardText>
                        <p>As transition management specialists, we’ll assist you in executing the program management of strategic actions across your company, including senior management transitions, acquisition integrations, divestiture separations, and other portfolio management actions.</p>
                    </CardText>
                </TopSectionContainer>
                <Marginer direction="vertical" margin={40} />
                <LineContainer />
                <MidSectionContainer>
                    <CardText>
                        <p>We provide interim senior level Human Resource leadership.  Our entire team has expertise in Human Capital Management (HCM), the comprehensive set of an organization’s practicesfor recruiting, managing, developing, and optimizing employees (as an intangible asset) in order to maximize their business value.</p>
                    </CardText>
                    <Marginer direction="horizontal" margin={60} />
                    <CardTitle>
                        <h1>Human Resources</h1>
                    </CardTitle>
                </MidSectionContainer>
                <Marginer direction="vertical" margin={30} />
                <LineContainer />
                <BottomSectionContainer>
                    <CardTitle>
                        <h1>Search</h1>
                    </CardTitle>
                    <Marginer direction="horizontal" margin={60} />
                    <CardText>
                        <p>A different approach to recruiting, we’ll embed one or more of our team members into your organization to execute the search process, ensuring that not only do we find a candidate with the right set of knowledge, skills, and abilities, but someone who fits your unique organizational culture. </p>
                    </CardText>
                </BottomSectionContainer>
                <Marginer direction="vertical" margin={30} />
            </Background>
        </WorkContainer>
    )
}