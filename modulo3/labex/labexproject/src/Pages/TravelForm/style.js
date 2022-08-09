import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    flex-direction: column;

    h1{
        font-size: 35px;
    }

    form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input,select{
        margin: 15px;
        padding: 13px;
        width: 300px;
        border-radius: 10px;
    }

    select{
        margin: 10px;
        padding: 11px;
        width: 326px;
        border-radius: 10px;  
    }

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