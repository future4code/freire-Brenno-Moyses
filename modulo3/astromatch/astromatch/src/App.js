import React, {useState} from 'react'
import styled from 'styled-components' 
import axios from "axios"
import { GlobalStyle } from './Global';

import Menu from './components/Menu/Menu';
import ProfilesList from './components/ProfilesList/ProfilesList';


function App() {
  const [currentPage, setCurrentPage] = useState("menu")

  const goToMenu = () => {
    setCurrentPage("menu")
  }

  const goToList = () => {
    setCurrentPage("list")
  }

  const ChoosePage = () => {
    switch (currentPage){
      case "menu":
        return <Menu goToList = {goToList}/>
      case "list":
        return <ProfilesList goToMenu = {goToMenu}/>
      default:
        return <h1>Erro! Página não encontrada</h1>
    }
  }



  return (
    <div>
      <GlobalStyle/>
      {ChoosePage()}
    </div>
  );
}

export default App;
