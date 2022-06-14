import React from 'react';
import {StyledCard} from './Style'

function CardGrande(props) {
    return (
        <StyledCard>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </StyledCard>
    )
}

export default CardGrande;