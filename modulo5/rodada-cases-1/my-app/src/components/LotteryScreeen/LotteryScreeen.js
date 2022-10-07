import React from "react"
import { useState } from "react"

import { LotteryScreenContainer } from "./style"
import {SelectContainer} from "./style"
import {LotteryNameContainer} from "./style"
import {LotteryElementsContainer} from "./style"
import {LotteryContestContainer} from "./style"
import {LotteryNumbersContainer} from "./style"
import {Ball} from "./style"
import moment from "moment"

import Logo from "../../image/Logo_Sena.png"


const LotteryScreen = ({setLottery, lottery, contests}) => {

    const mappedContests = contests.numeros?.map((numero) => {
        return (<Ball><p>{numero}</p></Ball>)
    })

    return (
        <LotteryScreenContainer>
            <LotteryElementsContainer>
            <SelectContainer>
                <select onChange={(e) => {
                    const selectedLottery = e.target.value
                    setLottery(selectedLottery)
                }}>
                    <option value="Mega-Sena">Mega-Sena</option>
                    <option value="Quina">Quina</option>
                    <option value="Lotofácil">Lotofácil</option>
                    <option value="Lotomania">Lotomania</option>
                    <option value="Timemania">Timemania</option>
                    <option value="Dia de sorte">Dia de sorte</option>
                </select>
            </SelectContainer>
            <LotteryNameContainer>
            <img src={Logo} height ="55" width="59"></img><h1>{lottery}</h1>
            </LotteryNameContainer>
            <LotteryContestContainer>
                <p>Concurso</p>
                <p>{contests.id}, {moment(contests.data).format("DD/MM/YYYY")}</p>
            </LotteryContestContainer>
            </LotteryElementsContainer>
            <LotteryNumbersContainer>
                {mappedContests}
            </LotteryNumbersContainer>
        </LotteryScreenContainer>
    )
}

export default LotteryScreen