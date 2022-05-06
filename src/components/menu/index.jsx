import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { motion } from "framer-motion";
import { NavMenu } from "./navMenu";

const HamburgerMenuContainer = styled.div`
    display: flex;
`;

const MenuContainer = styled(motion.div)`
    min-width: 300px;
    width: 100%;
    max-width: 45%;
    height: 100%;
    background-color: #fff;
    z-index: 90;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(4em);
    user-select: none;
    padding: 1em 2em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const menuVariants = {
    open: {
        transform: "translateX(2%)"
    },
    closed: {
        transform: "translateX(102%)"
    }
}

const menuTransition = { type: "spring", duration: 0.1, stiffness: 33, delay: 0 }

export function Menu(props) {

    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    return (
            <HamburgerMenuContainer>
                <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
                <MenuContainer initial={false} animate={isOpen ? "open" : "closed"} variants={menuVariants} transition={menuTransition}>
                    <NavMenu isOpen={isOpen} />
                </MenuContainer>
            </HamburgerMenuContainer>
    )
}