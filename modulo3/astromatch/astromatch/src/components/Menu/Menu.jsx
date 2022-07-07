import React, {useState, useEffect} from 'react'
import styled from 'styled-components' 
import axios from "axios"

import { AppContainer } from './style';
import { Buttons } from './style';
import { Elements } from './style';
import { MenuBar } from './style';
import { Profile } from './style';
import Couple from "../../img/casal.png";
import Reject from "../../img/cancelar.png"
import Hart from "../../img/coração.png"
import { Picture } from './style';
import Clean from '../../img/limpar.png'

function Menu(props) {

    const [ProfilesList, setProfilesList] = useState([]);
    const [MatcheList, setMatcheList] = useState([]);

    useEffect(() =>{
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenno-boechat/person")
            .then((res) =>{
                console.log(res.data.profile)
                setProfilesList(res.data.profile)
            })
            .catch((err) =>{
                console.log(err)
            })
    },[])


    const body = {
        id:"",
        choice: "true" 
    }

    const choosePerson = () =>{
        axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person", body)
        .then((res)=>{
            console.log(res)
            setMatcheList(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    } 

    return (
    <AppContainer>
        <Elements>
            <MenuBar>
            <button><img src={Clean}></img></button>
            <h1>astromatch</h1>
            <button onClick={props.goToList}><img src={Couple} height ="35" width="35"></img></button>
            </MenuBar>
            <Picture>
                <img src={ProfilesList.photo}/>
            </Picture>
        <Profile>
            <h1>{ProfilesList.name}</h1>
            <p>{ProfilesList.age}</p>
            <p>{ProfilesList.bio}</p>
        </Profile>
            <Buttons>
                <button> <img src={Reject} height ="35" width="35"></img></button>
                <button> <img src={Hart} height ="40" width="40"></img></button>
            </Buttons>
    </Elements>
    </AppContainer>
    );
}
    

export default Menu