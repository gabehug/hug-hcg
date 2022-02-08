import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import BasicTabs from "../../components/tabMenu";

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
    justify-content: flex-start;
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
    width: 60%;
`;

const CardTitle = styled.div`
    width: 25em;
    color: #2D3A54;
    font-size: 1.8em;
    margin: 4em 0;
`;

const CardText = styled.div`
    width: 25em;
    font-size: 1.4em;
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
                <Marginer direction="vertical" margin={150} />
                <TopSectionContainer>
                    <BasicTabs />
                </TopSectionContainer>
                <Marginer direction="vertical" margin={30} />
            </Background>
        </WorkContainer>
    )
}