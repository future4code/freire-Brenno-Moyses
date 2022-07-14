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
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 550px;
    border: 3px solid white;
    border-radius: 10px;
    margin: 10px;
    color: white;

    /* p{
        margin: 13px;
        margin-left: 20px;
    }   */
`
export const Elements = styled.div`
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0px;
    max-width: 500px;
    width: 100%;
`