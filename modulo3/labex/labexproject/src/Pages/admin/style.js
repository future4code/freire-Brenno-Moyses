import styled from "styled-components";

export const AdminAreaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    flex-direction: column;
`

export const AdminMenu = styled.div`

    h1{
        text-align: center;
        font-size: 40px;
        color: white;
    }
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

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25vw;
    margin: 0 auto;
    padding: 10px;
    margin-bottom: 20px;
    background-color: transparent;

    button{
        background: transparent;
        border: none;

        :hover{
            cursor: pointer;
            transform: scale(1.2);
        }
    }

    p{
        color: white;
    }
    
    border: 3px solid white;
    border-radius: 10px;
`

export const ButtonDetails = styled.button`
        height: 40px;
        border: none;
        background-color: transparent;

        :hover{
            cursor: pointer;
        }
`