import styled from "styled-components";

export const RegistrationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    h1{
        text-align: center;
    }
    `

export const InputsContainerRegistration = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 45px;
    font-size: 14px;
    width: 85vw;

`

export const CheckBoxContainer = styled.div`
    display: flex;
    font-size: 14px;
    margin-left: 35px;
    width: 85vw;
    align-items: center;
    justify-content: center;
`

export const RegistrationButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    
    button{
    padding: 13px 133px;
    gap: 10px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    color: white;
    border: none;
    font-size: 18px;
    }
`