import React, { useState } from "react";
import styled from "styled-components";

import { ModalContainer } from "./styled";
import { Container } from "./styled";


const Modal = (props) => {
    const { id="modal",showModal, setShowModal, closeWindow, cards, setCards} = props

    const handleOutsideClick = (e) => {
        if (e.target.id === id) closeWindow();
    }

    return (
        showModal ? (
            <ModalContainer id={id} onClick={handleOutsideClick}> 
                <Container>
                    <button onClick={closeWindow}/>
                    <h1></h1>
                    <h2>SIGNIFICADO:</h2>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                </Container>
            </ModalContainer>
        ) : (
            null
        )
        
    )
}

export default Modal