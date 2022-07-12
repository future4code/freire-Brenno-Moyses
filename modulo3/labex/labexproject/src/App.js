import React, {useState} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { GlobalStyle } from './Global';

import Home from './Components/Home/Home';
import TravelList from './Components/TravelList/TravelList';
import TravelForm from './Components/TravelForm/TravelForm';

function App() {

  const [currentPage, setCurrentPage] = useState("home")

  const goToHome = () => {
    setCurrentPage("home")
  }

  const goToTravelForm = () => {
    setCurrentPage("travelform")
  }

  const goToList = () => {
    setCurrentPage("list")
  }

  const ChoosePage = () => {
    switch (currentPage) {
      case "home":
        return <Home goToList = {goToList}/>
      case "list":
        return <TravelList 
                goToHome = {goToHome}
                goToTravelForm = {goToTravelForm}/>
      case "travelform":
        return <TravelForm/>
        default:
          return <h1>Erro! Página não encontrada</h1>
    }
  }

  return (
    <div className="App">
      <GlobalStyle/>
      {ChoosePage()}
    </div>
  );
}

export default App;
