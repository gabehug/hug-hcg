import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import { NavLinks } from "./navLinks";
import { SocialLinks } from "./socialLinks";
import { Logo } from "../logo";
import { Menu } from "../menu";


const NavbarContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #2D3A54;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 3;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 100vw;
    }
`;

const LeftContainer = styled.div`
    display: flex;
    align-self: center;
    margin-left: 1em;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin: 0;
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
    width: 4em;
    height: auto;

    {/*Mobile*/}
    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 2em;
    }
`;

//Need to put mobileNav import where social links currently is.

export function Navbar(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
    return (
        <PageContainer> 
            <NavbarContainer> 
                <LeftContainer>
                    <Logo />
                </LeftContainer>
                {!isTablet && ( 
                <MiddleContainer>
                    <NavLinks />
                </MiddleContainer>
                )}
                <RightContainer>
                    {!isTablet && ( <SocialLinks /> )}
                    {isTablet && ( <Menu />)}
                </RightContainer>
            </NavbarContainer>
        </PageContainer>
    );
}
