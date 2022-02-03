import React from "react";
import styled from "styled-components";

import { PageContainer } from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";



export function Menu({ menuOpen, setMenuOpen }) {
    return (
        <PageContainer>
            <MenuContainer> { menuOpen && "active" }
                <ul>
                    <li onClick={()=>setMenuOpen(false)}>
                        <a href="">Home</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <a href="">Areas of Practice</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <a href="">Book an Appointment</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <a href="">Blog</a>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </MenuContainer>
        </PageContainer>
    )
}