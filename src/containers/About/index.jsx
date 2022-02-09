import React from "react";
import styled from "styled-components";

import { PageContainer } from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";


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
                <Marginer direction="vertical" margin={600}/>
                <Footer />
            </Background>
        </PageContainer>
    );
}