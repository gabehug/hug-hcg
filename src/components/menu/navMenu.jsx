import React from "react";
import styled from "styled-components";
import linkedInDark from "../../assets/linkedInDark.png";

const NavMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const LinksWrapper = styled.ul`
    height: 100%;
    width: 100%;
    list-style: none;
`;

const LinkItem = styled.li`
    height: 100%;
    color: #2D3A54;
    font-weight: 600;
    font-size: 1.4em;
    text-align: left;
    font-family: proxima-nova, sans-serif;
    line-height: 2em;

    a {
        text-decoration: none;
        color: inherit;
        font-size: inherit;
    }
`;

const Link = styled.a`
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    justify-content: start;

    img {
        height: auto;
        width: 1.5em;
        margin: 0.8em 0em;
    }
`;

export function NavMenu({ isOpen }) {

    return (
        <NavMenuContainer> 
            <LinksWrapper>
                <LinkItem><a href="/#aboutLink">About</a></LinkItem>
                <LinkItem><a href="/#work">Areas of Practice</a></LinkItem>
                <LinkItem><a href="/#scheduling">Appointments</a></LinkItem>
                <LinkItem><a href="/#contact">Contact Us</a></LinkItem>
                <Link href="https://www.linkedin.com/in/keith-hug-2a7905/" target="_blank"> <img src= {linkedInDark} alt="linkedinLogo"></img></Link>
            </LinksWrapper>
        </NavMenuContainer>
    )
}