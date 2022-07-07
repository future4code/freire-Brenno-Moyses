import React, {useState} from 'react'
import styled from 'styled-components' 
import axios from "axios"
import { GlobalStyle } from './Global';

import Menu from './components/Menu/Menu';
import ProfilesList from './components/ProfilesList/ProfilesList';


function App() {
  const [currentPage, setCurrentPage] = useState("menu")

  const ChoosePage = () => {
    switch (currentPage){
      case "menu":
        return <Menu/>
      case "list":
        return <ProfilesList/>
      default:
        return <h1>Erro! Página não encontrada</h1>
    }
  }

  const goToMenu = () => {
    setCurrentPage("menu")
  }

  const goToList = () => {
    setCurrentPage("list")
  }

  return (
    <div>
      <GlobalStyle/>
      <Menu/>
    </div>
  );
}

export default App;
