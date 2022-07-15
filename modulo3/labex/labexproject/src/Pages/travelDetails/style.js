import styled from "styled-components";

export const TravelDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    color: white;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        font-size: 50px;
    }
    ul{
        list-style: none;
        padding: 0px;
        font-size: 20px;
        margin-top: 1px;
        }
    li{
        margin: 20px;
    }
`