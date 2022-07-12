import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    flex-direction: column;

    h1{
        color: white;
        font-size: 45px;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        margin: 20px;
        border-radius: 20px;
        font-size: 20px;
        padding: 10px;
        color: white;
        background-color: transparent;
        border: 2px solid white;
        margin: 30px;

        :hover{
            cursor: pointer;
            background-color: white;
            color: black;
            border: 2px solid black;
        }
    }`

export const Card = styled.div`
    width: 550px;
    height: 230px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    /* fazer wrap */

    border-radius: 10px;
    border: 2px solid white;
    background: transparent;

    p{
        margin: 13px;
        margin-left: 20px;
    }
`