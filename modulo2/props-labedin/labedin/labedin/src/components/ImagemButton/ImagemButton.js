import React from 'react';
import {StyledImagemButton} from './Style3'

function ImagemButton(props) {
    return (
        <StyledImagemButton>
            <div className='image-button-container'>
                <img src={ props.imagem }/>
                <p>{ props.texto }</p>
            </div>
        </StyledImagemButton>

    )
}

export default ImagemButton;