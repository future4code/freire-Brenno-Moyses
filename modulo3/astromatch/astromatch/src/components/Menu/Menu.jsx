import React, {useState, useEffect} from 'react'
import styled from 'styled-components' 
import axios from "axios"


import { AppContainer } from './style';
import { Buttons } from './style';
import { Elements } from './style';
import { MenuBar } from './style';
import { Profile } from './style';
import Couple from "../../img/incendio.png";
import Reject from "../../img/reject2.png"
import Hart from "../../img/hart1.png"
import { Picture } from './style';
import Clean from '../../img/reload.png'

function Menu(props) {

    const [ProfilesList, setProfilesList] = useState([]);
    const [MatcheProfile, setMatcheProfile] = useState([]);

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
    },[MatcheProfile])

    const choosePerson = (idProfile, choiceProfile) =>{

        const body ={
            "id": idProfile,
            "choice": choiceProfile
        }

        axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenno-boechat/choose-person", body)
        .then((res)=>{
            console.log(res)
            setMatcheProfile(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const cleanList = () =>{
        axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brenno-boechat/clear")
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
    <AppContainer>
        <MenuBar>
            <button onClick={()=>cleanList()}><img src={Clean} height ="35" width="35"></img></button>
            <h1>astromatch</h1>
            <button onClick={props.goToList}><img src={Couple} height ="35" width="35"></img></button>
        </MenuBar>
        {ProfilesList === null ? (
            
            <h1>Nada foi encontrado!</h1>
        ):(
            <Elements>
            <Picture>
                <img src={ProfilesList.photo}/>
            </Picture>
        <Profile>
            <h2>{ProfilesList.name}, {ProfilesList.age}</h2>
            <p>{ProfilesList.bio}</p>
        </Profile>
            <Buttons>
                <button onClick={()=>choosePerson(ProfilesList.id, false)}> <img src={Reject} height ="30" width="30"></img></button>
                <button onClick={()=>choosePerson(ProfilesList.id, true)}> <img src={Hart} height ="30" width="30"></img></button>
            </Buttons>
    </Elements>
        )
    }
        
    </AppContainer>
    );
}
    

export default Menu