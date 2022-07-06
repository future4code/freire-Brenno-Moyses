import React, {useState} from 'react'
import styled from 'styled-components' 
import axios from "axios"

import { AppContainer } from './style';
import { Buttons } from './style';
import { Elements } from './style';
import { MenuBar } from './style';
import { Profile } from './style';

function App() {

  const [CurrentPage, setCurrentPage] = useState("");

  return (
    <AppContainer>
      <Elements>
        <MenuBar>
        <h1>astromatch</h1>
        <button><img src='https://cdn-user-icons.flaticon.com/74309/74309382/1656989375363.svg?token=exp=1656990209~hmac=8567caad506986972a925d1df8514a02' height ="30" width="30"></img></button>
        </MenuBar>
        <Profile>
          <img src='https://portalrapmais.com/wp-content/uploads/2022/04/274848827_485966163121906_8683372395138472481_n-1024x1024.jpeg'></img>
        </Profile>
        <Buttons>
            <button> <img src='https://cdn-icons-png.flaticon.com/128/1828/1828665.png' height ="42" width="42"></img></button>
            <button> <img src='https://cdn-user-icons.flaticon.com/74309/74309382/1656988471696.svg?token=exp=1656989305~hmac=29875e8027d95fd523c052c53d176538' height ="50" width="50"></img></button>
        </Buttons>
      </Elements>
    </AppContainer>
  );
}

export default App;
