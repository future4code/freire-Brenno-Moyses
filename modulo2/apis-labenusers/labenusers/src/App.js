import axios from 'axios'
import React from "react";
import styled from 'styled-components'
import HomePage from './components/HomePage';

state = {
  users: []
}

getAllUsers = () => {
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
  {headers:{
    Authorization: "brenno-labenu-freire"
      }
    }
  ).then((response)=>{
    
  });
};

function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
