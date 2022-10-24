import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 30px;
    grid-gap: 60px;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(6, 200px);
    grid-template-rows: repeat(13, 400px);

    div{
        display: flex;
        justify-content: center;
        text-align: center;
    }

`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;

    button{
        font-size: 50px;
        border-radius: 20px;

        :hover{
            cursor: pointer;
            box-shadow: 5px 0px 15px 5px purple;
        }
    }
`

export const ImageCards = styled.img`
    width: 200px;
    height: 350px;
    border-radius: 20px;

    :hover{
    cursor: pointer;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transition: 0.7s;
} 
`