import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { InlineWidget } from "react-calendly";

const SchedulingContainer = styled.div`
    width: 100%;
    height: 1050px;
    background-size: cover;
    background-color: #2D3A54;
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
`;

const WidgetContainer = styled.div`
    height: 100%;
    width: 100%;
`;


export function Scheduling(props) {
    return (
        <SchedulingContainer id="scheduling">
            <Background>
                <TitleContainer>
                    <h1>Book an Appointment </h1>
                </TitleContainer>
                <WidgetContainer>
                    <InlineWidget url="https://calendly.com/gaberhug/meeting?month=2022-02" />
                </WidgetContainer>
                <Marginer direction="vertical" margin={30} />
            </Background>
        </SchedulingContainer>
    )
}