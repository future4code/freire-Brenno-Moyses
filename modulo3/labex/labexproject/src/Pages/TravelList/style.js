import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    height: 60vh;
    flex-direction: column;

    h1{
        color: white;
        font-size: 45px;
    }

    p{
        color: white;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    border: 3px solid white;
    border-radius: 20px;
    margin: 8px;
    color: white;
    background-color: transparent;
`
export const Elements = styled.div`
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0px;
    max-width: 500px;
    width: 60%;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`