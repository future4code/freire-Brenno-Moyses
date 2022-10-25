import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

import { CardContainer } from "./styled";
import { ButtonContainer } from "./styled";
import {ImageCards} from "./styled"

function Cards(props) {
    const { cards, renderCard } = props

    const [imageCard, setImageCard] = useState(true);
    const [showModal, setShowModal] = useState(false)

    const ImageBackCard = cards.imageBackCard

    const ImagesUrl = cards.imagesUrl;

    function closeWindow() {
        setShowModal(false)
    }


    const MappedCards = cards.cards?.map((card) => {
        if(imageCard) {
            const renderCard = ImagesUrl + card.image
            return <ImageCards src={renderCard}></ImageCards>
        } else {
            return <ImageCards onClose={closeWindow} onClick={() => setShowModal(!showModal)} src={ImageBackCard}></ImageCards>
        }
        
    })

    function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
    }

    const flipCard = () => {
        setImageCard(!imageCard)
        shuffleArray(cards.cards)
    }


    return (
        <div>
            <Modal
            showModal = {showModal}
            setShowModal = {setShowModal}
            closeWindow = {closeWindow}
            cards = {cards}
            />
            <ButtonContainer>
                <button onClick={flipCard}>JOGAR</button>
            </ButtonContainer>
            <CardContainer>
                {MappedCards}
            </CardContainer>
        </div>
    );
}


export default Cards;