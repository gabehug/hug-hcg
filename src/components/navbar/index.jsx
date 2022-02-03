import React from "react";
import styled from "styled-components";
import hugHCGLogo from "../../assets/hugHCGLogo";

import { PageContainer } from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";


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

    :active {
        background-color: #393C3E;
    }
`;

const LeftContainer = styled.div`
    display: flex;
    align-self: center;
    margin-left: 1em;
`;

const LogoContainer = styled.div`
    width: auto;
    height: 90px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const RightContainer = styled.div`
    display: flex;
    align-self: center;
    margin-right: 2em;
`;

const MenuContainer = styled.div`
    width: 32px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

`;

const Line1Container = styled.span`
    width: 100%;
    height: 3px;
    background-color: white;
    transform-origin: left;
    transition: all 1s ease;

    :active {
        transform: rotate(45deg);
    }
    
`;

const Line2Container = styled.span`
    width: 100%;
    height: 3px;
    background-color: white;
    transform-origin: left;
    transition: all 1s ease;

    :active {
        opacity: 0;
    }
`;

const Line3Container = styled.span`
    width: 100%;
    height: 3px;
    background-color: white;
    transform-origin: left;
    transition: all 1s ease;

    :active {
        transform:rotate(-45deg);
    }
`;



export function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <PageContainer> 
            <NavbarContainer> {menuOpen && "active"}
                <LeftContainer>
                    <LogoContainer>
                        <img src= {hugHCGLogo} alt="logo"></img>
                    </LogoContainer>
                </LeftContainer>
                <RightContainer>
                    <MenuContainer>

                        
                    </MenuContainer>
                </RightContainer>
            </NavbarContainer>
        </PageContainer>
    )
}
