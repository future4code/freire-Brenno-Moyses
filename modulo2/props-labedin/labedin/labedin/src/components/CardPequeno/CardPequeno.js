import React from 'react';
// import './CardPequeno.css'
import {StyledLittleCard} from './Style2'

function CardPequeno(props){
    return(
        <StyledLittleCard>
            <div className="littlecard-email flex">
                <img src={props.imagem}/>
                <h4>Email:</h4>
                <p>BrennoBoechat@hotmail.com</p>
            </div>
            <div className="littlecard-localization flex">
                <img src={props.imagem2}/>
                <h4>Localização:</h4>
                <p>Rio de Janeiro</p>
            </div>
        </StyledLittleCard>
    )
}

export default CardPequeno;