import React, { useState } from "react";
import styled from "styled-components";
import { SocialLinks } from "./socialLinks";
import { MenuToggle } from "./menuToggle";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";

const NavLinksContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    list-style: none;
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 65px;
    left: 0;
`;

const LinkItem = styled.li`
    width: 100%;
    padding: 0 1.1em;
    color: #fff;
    font-weight: 500;
    font-size: 1.1em;
    display: flex;
    
    margin-bottom: 0.2em;
`;

const AnchorLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    padding: 1.5em 0.5em;
    font-size: inherit;

    img {
        height: 1.2em;
        width: auto;
        padding: 1.5em 0em;
    }
`;

export function MobileNavbar(props) {
    const [isOpen, setOpen] = useState(false);

    return (
        <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
                <LinksWrapper>
                    <LinkItem><AnchorLink href="#">About</AnchorLink></LinkItem>
                    <LinkItem><AnchorLink href="#">Areas of Practice</AnchorLink></LinkItem>
                    <LinkItem><AnchorLink href="#">Blog</AnchorLink></LinkItem>
                    <LinkItem><AnchorLink href="#">Contact Us</AnchorLink></LinkItem>
                    <Marginer />
                    <SocialLinks />
                </LinksWrapper>
            )}
        </NavLinksContainer>
    );
}