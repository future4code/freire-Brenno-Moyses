import styled from "styled-components";

export const DetailsHeaderContainer = styled.div`
    width: 100%;
    height: 60vh;
    background-color: #2D0C5E;
    color: white;
    display: flex;

    img{
        width: 383px;
        height: 550px;
        object-fit: cover;
        margin-left: 100px;
        margin-top: 50px;
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h1{
        font-size: 32px;
    }

    h2{
        font-size: 20px;
    }

    p{
        width: 696px;
        height: 120px;
    }
`
