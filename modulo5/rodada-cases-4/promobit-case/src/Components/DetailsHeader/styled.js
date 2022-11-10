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
        margin-left: 150px;
        margin-top: 60px;
        border-radius: 10px;

        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 8px;
    }
`

export const InfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 30px;
    margin-top: 30px;
`

export const Sinopse = styled.div`
    display: flex;
    flex-direction: column;
    letter-spacing: 1px;

    p{
        width: 696px;
        height: 120px;
    }
`


