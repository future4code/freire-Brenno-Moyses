import React, {useEffect, useState} from "react";
import axios from 'axios';

export function GetLottery() {

    const [LotteryList, setLotteryList] = useState([]);

        useEffect(() =>{
            axios
            .get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias")
            .then((res) =>{
                setLotteryList(res.data)
            })
            .catch((err) =>{
                console.log(err)
            })
        },[setLotteryList])

        return LotteryList
}

export function GetLotteryContest() {

    const [LotteryContestList, setLotteryContestList] = useState([]);

        useEffect(() =>{
            axios
            .get("https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos")
            .then((res) =>{
                setLotteryContestList(res.data)
            })
            .catch((err) =>{
                console.log(err)
            })
        },[setLotteryContestList])

        return LotteryContestList
}

export function GetContest(id) {

    const [Contest, setContest] = useState([]);

        useEffect(() =>{
            axios
            .get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`)
            .then((res) =>{
                setContest(res.data)
                console.log(res.data)
            })
            .catch((err) =>{
                console.log(err)
            })
        },[id])

        return Contest
}
