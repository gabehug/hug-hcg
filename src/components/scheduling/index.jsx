import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";

const SchedulingContainer = styled.div`
    width: 100%;
    height: 1200px;
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


export function Scheduling(props) {
    return (
        <SchedulingContainer>
            <Background>
                Book an Appointment 
                <Marginer direction="vertical" margin={30} />
            </Background>
        </SchedulingContainer>
    )
}