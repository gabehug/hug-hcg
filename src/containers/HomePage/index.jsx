import React from "react";
import styled from "styled-components";

import { PageContainer } from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { LandingPage } from "../../components/landingPage";
import { Introduction } from "../../components/introduction";
import { Work } from "../../components/work";
import { Scheduling } from "../../components/scheduling";
import { Quote } from "../../components/quote";
import { Blog } from "../../components/blog";
import { Contact } from "../../components/contact";
import { Footer } from "../../components/footer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";


const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;


export function HomePage(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    return (
        <PageContainer>
            <Background>
                <Navbar/>
                <Marginer direction="vertical" margin={100}/>
                <LandingPage/>
                <Work />
                {!isMobile && (
                    <Introduction />
                )}
                <Scheduling />
                <Marginer direction="vertical" margin={50}/>
                <Quote />
                <Marginer direction="vertical" margin={100}/>
                <Blog />
                <Contact />
                <Footer />
            </Background>
        </PageContainer>
    );
}