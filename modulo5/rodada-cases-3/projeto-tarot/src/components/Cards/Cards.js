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

    const flipCard = () => {
        setImageCard(!imageCard)
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