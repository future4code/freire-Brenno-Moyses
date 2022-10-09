import styled from "styled-components"

export const LotteryScreenContainer = styled.div`
display: flex;
height: 100vh;
width: 100%;
position: relative;

svg{
    fill: #6BEFA3;
    height: 100%;
    width: 45%;
    position: absolute;
    left: -10%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    fill: ${({lottery}) => {
        switch (lottery) {
            case "Mega-Sena":
                return "#6BEFA3";
            case "Quina":
                return "#8666EF";
            case "Lotofácil":
                return "#DD7AC6";
            case "Lotomania":
                return "#FFAB64";
            case "Timemania":
                return "#5AAD7D"
            case "Dia de Sorte":
                return "#BFAF83"
            default:
                break
        }
    }};
}
`

export const LotteryElementsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100vh;
width: 25%;
margin-left: 10vh;
z-index: 1;
`

export const SelectContainer = styled.div`
select{
    border-radius: 5px;
    width: 180px;
    height: 35px;
    font-size: 15px;
    border: none;
}
`

export const LotteryNameContainer = styled.div`
display: flex;
align-items: center;
gap: 20px;

h1{
    font-size: 30px;
    color: white;
}
`

export const LotteryContestContainer = styled.div`
display: flex;
flex-direction: column;

p{
    font-size: 20px;
    color: white;
}
`

export const LotteryNumbersContainer = styled.div`
width: 80%;
/* height: 30vh; */
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 20px;
`

export const Ball = styled.div`
width: 106px;
height: 106px;

display: flex;
align-items: center;
justify-content: center;

border-radius: 50%;
background-color: #fff;
`