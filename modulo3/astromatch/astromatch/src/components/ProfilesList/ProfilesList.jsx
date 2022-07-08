import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import axios from 'axios'

import { ListContainer } from './style';
import { ListMenuBar } from './style';
import Clean from '../../img/limpar.png'


function ProfilesList(props) {

  const [MatcheList, setMatcheList] = useState([]);

  useEffect(()=>{
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches")
    .then((res)=>{
        console.log(res)
        setMatcheList(res.data.matches)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const Filter = MatcheList.map((profile)=>{
    return (
      <ul key={profile.id}>
        <li>
          <img src={profile.photo}></img>
          <p>{profile.name}</p>
        </li>
      </ul>
    )
  })

  

  return (
    <ListContainer>
        <ListMenuBar>
            <button><img src={Clean}></img></button>
            <button onClick={props.goToMenu}><h1>astromatch</h1></button>
        </ListMenuBar>
        {Filter}
    </ListContainer>
  )
}

export default ProfilesList