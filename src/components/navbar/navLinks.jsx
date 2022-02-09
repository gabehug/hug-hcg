import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    padding: 0 1.1em;
    color: #fff;
    font-weight: 500;
    font-size: 1.1em;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 300ms ease-in-out;

    :hover {
        border-top: 2px solid #8194AD;
    }
`;

const AnchorLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    padding: 1.5em 0.5em;
    font-size: inherit;
`;




export function NavLinks(props) {
    return (
        <NavLinksContainer>
            <LinksWrapper>
                <LinkItem><AnchorLink to="/about">About</AnchorLink></LinkItem>
                <LinkItem><AnchorLink to="work">Areas of Practice</AnchorLink></LinkItem>
                <LinkItem><AnchorLink to="#blog">Blog</AnchorLink></LinkItem>
                <LinkItem><AnchorLink to="#contact">Contact Us</AnchorLink></LinkItem>
            </LinksWrapper>
        </NavLinksContainer>
    );
}