import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className="littlecard-container">
            <div className="littlecard-email">
                <img src={props.imagem}/>
                <h4>Email:</h4>
                <p>BrennoBoechat@hotmail.com</p>
            </div>
            <div>
                <img src={props.imagem2}/>
                <h4>Localização:</h4>
                <p>Rio de Janeiro</p>
            </div>
        </div>
    )
}

export default CardPequeno;