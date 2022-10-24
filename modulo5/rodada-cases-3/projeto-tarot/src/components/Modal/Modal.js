import React, { useState } from "react";
import styled from "styled-components";

import { ModalContainer } from "./styled";


const Modal = (props) => {
    const { showModal, setShowModal} = props
    const { cards, setCards } = props

    return (
        showModal ? (
            <ModalContainer> <h1>Aparece Modal</h1> </ModalContainer>
        ) : (
            null
        )
        
    )
}

export default Modal