import styled from "styled-components";

export const CreationFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;

    h1{
        color: white;
        font-size: 40px;
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 4px solid white;
    width: 500px;
    border-radius: 20px;
    padding: 15px;


    input{
        margin: 10px;
        padding: 13px;
        width: 300px;
        border-radius: 15px;
    }

    select{
        margin: 10px;
        padding: 13px;
        width: 332px;
        border-radius: 15px;
    }
`

export const Buttons = styled.div`
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
