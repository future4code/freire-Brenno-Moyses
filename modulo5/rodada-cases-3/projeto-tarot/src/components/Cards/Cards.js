import React, { useState } from "react";
import styled from "styled-components";

import { CardContainer } from "./styled";
import { ButtonContainer } from "./styled";
import {ImageCards} from "./styled"

function Cards(props) {
    const { cards } = props

    const [imageCard, setImageCard] = useState(true)

    const ImageBackCard = cards.imageBackCard

    const ImagesUrl = cards.imagesUrl;

    const MappedCards = cards.cards?.map((card) => {
        if(imageCard) {
            const renderCard = ImagesUrl + card.image
            return <ImageCards src={renderCard}></ImageCards>
        } else {
            return <ImageCards src={ImageBackCard}></ImageCards>
        }
        
    })

    function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
    }

    console.log(cards)

    const flipCard = () => {
        setImageCard(!imageCard)
        shuffleArray(cards.cards)
    }


    return (
        <div>
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