import React, {useState} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { GlobalStyle } from './Global';
import { Router } from './Routes/Router';

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
