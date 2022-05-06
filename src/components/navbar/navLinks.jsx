import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    list-style: none;
`;

const LinkItem = styled.li`
    height: 100%;
    padding: 0 0.75em;
    color: #fff;
    font-weight: 600;
    font-size: 1em;
    font-family: proxima-nova, sans-serif;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 300ms ease-in-out;

    :hover {
        border-top: 2px solid #8194AD;
    }

    a {
        text-decoration: none;
        color: inherit;
        padding: 1.5em 0.5em;
        font-size: inherit;
    }
`;

export function NavLinks(props) {
    return (
        <NavLinksContainer>
            <LinksWrapper>
                <LinkItem><a href="/about">About</a></LinkItem>
                <LinkItem><a href="/#work">Areas of Practice</a></LinkItem>
                <LinkItem><a href="/#scheduling">Appointments</a></LinkItem>
                <LinkItem><a href="/#contact">Contact Us</a></LinkItem>
            </LinksWrapper>
        </NavLinksContainer>
    );
}