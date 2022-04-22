import React from "react";
import styled from "styled-components";
import hugHCGLogo from "../../assets/hugHCGLogo";
import { PageContainer } from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import { MobileNavbar } from "./mobileNavLinks";
import { NavLinks } from "./navLinks";
import { SocialLinks } from "./socialLinks";
import { Link } from "react-router-dom";
import { Logo } from "../logo";


const NavbarContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #2D3A54;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 3;
    transition: all 1s ease;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 100vw;
    }
`;

const LeftContainer = styled.div`
    display: flex;
    align-self: center;
    margin-left: 1em;
`;

const LogoContainer = styled.div`
    width: 10em;
    height: auto;

    img {
        width: 100%;
        height: 100%;
    }
`;

const MiddleContainer = styled.div`
    display: flex;
    flex: 2;
    width: 100%;
    align-self: center;
    justify-content: center;
`;

const RightContainer = styled.div`
    width: 10em;
    height: auto;
`;

export function Navbar(props) {
    
    return (
        <PageContainer> 
            <NavbarContainer> 
                <LeftContainer>
                    <Logo />
                </LeftContainer>
                <MiddleContainer>
                    <NavLinks />
                </MiddleContainer>
                <RightContainer>
                    <SocialLinks />
                </RightContainer>
            </NavbarContainer>
        </PageContainer>
    );
}
