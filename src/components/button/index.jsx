import React from "react";

import styled from "styled-components";

const ButtonWrapper = styled.div`
    font-family: proxima-nova, sans-serif;
    font-weight: 600;

    
    height: 3em;
    width: 8em;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 5px;
    color: white;
    background: #8194AD;
    border: 0px;
    
    &: hover {
        border: 1px solid white;
        background-color: transparent;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        cursor: pointer;
    }
`;

export function Button(props) {

    return <ButtonWrapper>{props.children}</ButtonWrapper>

}