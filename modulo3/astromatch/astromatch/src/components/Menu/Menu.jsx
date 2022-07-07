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

function Menu() {

    const [ProfilesList, setProfilesList] = useState([]);



    useEffect(() =>{
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
            .then((res) =>{
                console.log(res.data.profile)
                setProfilesList(res.data.profile)
            })
            .catch((err) =>{
                console.log(err)
            })

            
    },[])


    return (
    <AppContainer>
        <Elements>
            <MenuBar>
            <h1>astromatch</h1>
            <button><img src={Couple} height ="35" width="35"></img></button>
            </MenuBar>
            <Picture>
                <img src={ProfilesList.photo}/>
            </Picture>
        <Profile>
            
            <h1>{ProfilesList.name}</h1>
            <h2>{ProfilesList.age}</h2>
            <h3>{ProfilesList.bio}</h3>
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