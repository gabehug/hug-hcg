import React from "react";
import styled from "styled-components";

import { PageContainer } from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { AboutLanding } from "../../components/aboutLanding";
import { AboutIntro } from "../../components/aboutIntro";
import { AboutInformation } from "../../components/aboutInformation";
import { AboutGoal } from "../../components/aboutGoal";
import { AboutTeam } from "../../components/aboutTeam";


const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export function About(props) {
    return (
        <PageContainer>
            <Background>
                <Navbar/>
                <AboutLanding />
                <AboutIntro />
                <AboutInformation />
                <AboutGoal />
                <AboutTeam />
                <Footer />
            </Background>
        </PageContainer>
    );
}