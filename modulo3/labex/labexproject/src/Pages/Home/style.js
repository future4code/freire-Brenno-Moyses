import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    flex-direction: column;

    h1{
        font-size: 50px;
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        margin: 20px;
        border-radius: 20px;
        font-size: 20px;
        padding: 10px;
        color: white;
        background-color: transparent;
        border: 2px solid white;

        :hover{
            cursor: pointer;
            background-color: white;
            color: black;
            border: 2px solid black;

        }
    }
`