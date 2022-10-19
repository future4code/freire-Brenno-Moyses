import React from "react";
import styled from "styled-components";
import { CardContainer } from "./styled";

function Cards(props) {
    const {MappedCards} = props

    return (
        <CardContainer>
            {MappedCards}
        </CardContainer>
    );
}

export default Cards;