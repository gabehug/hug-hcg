import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { InlineWidget } from "react-calendly";
import { deviceSize } from "../responsive";

const SchedulingContainer = styled.div`
    width: 100%;
    height: 1000px;
    background-size: cover;
    background-color: #2D3A54;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 100%;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (min-width: ${deviceSize.mobile}px) {
        height: 900px;
    }
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
    margin: 3em 2em 0em 2em;
    color: white;
    font-size: 2em;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 1.2em;
        margin: 4em 2em 0em 2em;
    }
    {/*Tablet*/}
    @media screen and (min-width: ${deviceSize.mobile}px) and (min-width: ${deviceSize.mobile}px) {
        font-size: 1.8em;
    }
    {/*Laptop*/}
    @media screen and (min-width: ${deviceSize.tablet}px) and (max-width: ${deviceSize.laptop}px) {
        font-size: 2em;
    }
`;

const WidgetContainer = styled.div`
    height: 100%;
    width: 100%;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 85vw;
        margin: 2em 2em 4em 2em;
    }
`;


export function Scheduling(props) {
    return (
        <SchedulingContainer id="scheduling">
            <Background>
                <TitleContainer>
                    <h1>Book an Appointment </h1>
                </TitleContainer>
                <WidgetContainer>
                    <InlineWidget url="https://calendly.com/gaberhug/meeting?month=2022-02"/>
                </WidgetContainer>
                <Marginer direction="vertical" margin={30} />
            </Background>
        </SchedulingContainer>
    )
}