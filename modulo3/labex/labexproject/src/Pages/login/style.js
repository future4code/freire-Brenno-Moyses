import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;

    h1{
        font-size: 40px;
        color: white;
    }

    form{
        flex-direction: column;
        display: flex;
    }
`

export const LoginElements = styled.div`
    flex-direction: column;
    display: flex;

    input{
        margin: 13px;
        padding: 13px;
        border-radius: 15px;
        width: 350px;
        color: black;
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
        margin: 30px;

        :hover{
            cursor: pointer;
            background-color: white;
            color: black;
            border: 2px solid black;
        }
    }`