import React, { useState } from "react";
import styled from "styled-components";

import { ModalContainer } from "./styled";
import { Container } from "./styled";


const Modal = (props) => {
    const {id="modal",showModal, closeWindow, FilterCards, ImagesUrl} = props

    const handleOutsideClick = (e) => {
        if (e.target.id === id) closeWindow();
    }

    console.log(ImagesUrl)

    return (
        showModal ? (
            <ModalContainer id={id} onClick={handleOutsideClick}> 
                <Container>
                    <button onClick={closeWindow}/>
            <div>
                <h1>{FilterCards.name}</h1>
                <h1>SIGNIFICADO:</h1>
                    <div className="PhotoDescription">
                        <img src={ImagesUrl+FilterCards.image}/>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.</h2>
                    </div>
            </div> 
                </Container>
            </ModalContainer>
        ) : (
            null
        )
        
    )
}

export default Modal