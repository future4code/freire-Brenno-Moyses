import styled from "styled-components"
import Sidebar from '../../image/Sidebar.png'

export const LotteryScreenContainer = styled.div`
display: flex;
height: 100vh;
width: 100%;
background: url(${Sidebar}) no-repeat;
`

export const LotteryElementsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100vh;
width: 25%;
margin-left: 15vh;
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