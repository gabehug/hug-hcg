import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/pageContainer";
import { Link } from "react-router-dom";
import hugHCGLogo from "../../assets/hugHCGLogo";


const Background = styled.div`
    width: auto;
    height: auto;
`;

const LogoContainer = styled.div`
    width: 10.5em;
    height: auto;

    img {
        width: 100%;
        height: 100%;
    }
`;

export function Logo(props) {

    return(
        <Background>
            <LogoContainer>
                <Link to="/" ><img src= {hugHCGLogo} alt="logo"></img></Link>
            </LogoContainer>
        </Background>
    )

}