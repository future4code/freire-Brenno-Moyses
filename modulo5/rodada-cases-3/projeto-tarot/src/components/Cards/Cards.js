import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

import { CardContainer } from "./styled";
import { ButtonContainer } from "./styled";
import {ImageCards} from "./styled"

function Cards(props) {
    const {cards} = props

    const [imageCard, setImageCard] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [nameTarot, setNameTarot] = useState("")

    const ImageBackCard = cards.imageBackCard

    const ImagesUrl = cards.imagesUrl;

    function closeWindow() {
        setShowModal(false)
    }

    function openModal(nameTarot){
        setNameTarot(nameTarot)
        setShowModal(!showModal)
    }

    const MappedCards = cards.cards?.map((card) => {
        if(imageCard) {
            const renderCard = ImagesUrl + card.image
            return <ImageCards src={renderCard}></ImageCards>
        } else {
            return <ImageCards onClose={closeWindow} onClick={() => openModal(card.name)} src={ImageBackCard}></ImageCards>
        }
    })

    const FilterCards = cards.cards?.find((card) => {
        return card.name === nameTarot
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
            FilterCards = {FilterCards}
            ImagesUrl = {ImagesUrl}
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