import styled from "styled-components";

export const TravelDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
`

export const Details = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    h1{
        font-size: 50px;
    }
    p{
        list-style: none;
        padding: 0px;
        font-size: 20px;
        margin-top: 1px;
        margin: 15px;
        }

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

export const Candidates = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    h1{
        font-size: 30px;
    }`

export const AllCandidates = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 3px solid white;
    border-radius: 20px;
    width: 500px;
    height: 350px;
    padding: 10px;
    margin: 10px;

    p{
        text-align: center;
        margin-top: 13px;
        width: 500px;
    }

    
    
`
