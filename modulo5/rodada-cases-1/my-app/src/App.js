import React from "react"
import { GlobalStyle } from "./Global";
import { useState } from "react";

import LotteryScreen from "./components/LotteryScreeen/LotteryScreeen";
import { GetLottery } from "./services/Lottery";
import { GetLotteryContest } from "./services/Lottery";
import { GetContest } from "./services/Lottery";

function App() {
  const [lottery, setLottery] = useState("Mega-Sena")

  const allLotterys = GetLottery();
  const filterLotterys = allLotterys?.find(
    (lotterys) => lotterys?.nome === lottery.toLowerCase()
  )

  const LotteryContest = GetLotteryContest()
  const filterContests = LotteryContest?.find(
    (contest) => filterLotterys?.id === contest.loteriaId
  )
  
  const id = filterContests?.concursoId;
  const contests = GetContest(id)

  

  return (
    <div>
      <GlobalStyle/>
      <LotteryScreen
      setLottery = {setLottery}
      lottery = {lottery}
      contests = {contests}
      />
    </div>
  );
}

export default App;
