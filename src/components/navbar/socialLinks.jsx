import React from "react";
import styled from "styled-components";
import { PageContainer } from "../pageContainer";
import linkedIn from "../../assets/linkedIn.png";

const SocialContainer = styled.div`
    display: flex;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    padding: 1.5em 0.5em;
    font-size: inherit;

    img {
        height: 1.2em;
        width: auto;
        padding: 1.5em 0em;
        border-top: 2px solid transparent;
        transition: all 300ms ease-in-out;

        :hover {
            border-top: 2px solid #8194AD;
        }
    }
`;

export function SocialLinks(props) {
    return (
        <PageContainer>
            <SocialContainer>
            <Link href="https://www.linkedin.com/in/keith-hug-2a7905/" target="_blank"> <img src= {linkedIn} alt="linkedinLogo"></img></Link>
            </SocialContainer>
        </PageContainer>
    );
}