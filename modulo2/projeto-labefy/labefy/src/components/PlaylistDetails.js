import React from "react"
import axios from "axios"
import styled, { createGlobalStyle } from 'styled-components'
import PlaylistsScreen from "./PlaylistsScreen"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: sans-serif;
        background-color: #282828;
    }
`
const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    h1{
        color: orange;
        margin: 10px;
    }
`
const PlaylistsButton = styled.button`
    margin: 20px 0;
    padding: 8px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    transition: filter 0.20s;
    background-color: orange;
    color: black;
    border: none;

    :hover{
    cursor: pointer;
    filter: brightness(1.2);
    }
`

const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border: 5px solid orange;
    width: 23%;
    height: 33vh;
    text-align: center;
    border-radius: 7px;

    input{
        padding: 5px;
        border-radius: 10px;
        font-size: 18px;
        border: none;
    }

    button{
        color: white;
        background-color: orange;
        padding: 5px;
        border: none;
        color: black;
        border-radius: 15px;
        font-size: 18px;
        transition: filter 0.20s;
    }

    label{
        color: orange;
        margin: 15px 0;
        font-size: 20px;
    }
`
const AddButton = styled.button`
    margin: 10px;

:hover{
    cursor: pointer;
    filter: brightness(1.2);
}
`
const PlaylistMusicsButton = styled.button`
        color: white;
        background-color: orange;
        padding: 5px;
        border: none;
        color: black;
        border-radius: 15px;
        font-size: 18px;
        transition: filter 0.20s;
        margin: 15px;

        :hover{
        cursor: pointer;
        filter: brightness(1.2);
}
`



export default class PlaylistDetails extends React.Component{
    state = {
        musicName: "",
        artistName: "",
        urlLink: ""
        
    }

    theMusicName = (event) => {
        this.setState({musicName: event.target.value})
    }

    theArtistName = (event) => {
        this.setState({artistName: event.target.value})
    }

    theUrlLink = (event) => {
        this.setState({urlLink: event.target.value})
    }

    GetPlaylistTracks = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url,{
            headers: {
                Authorization: "brenno-freire-labenu"
            }
        })  .then((res) =>{
            console.log(res)
        })
            .catch((err) =>{
                console.log(err)
            })
    }


    AddMusic = (Id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${Id}/tracks`
        const body = {
            name: this.state.musicName, 
            artist: this.state.artistName,
            url: this.state.urlLink
        }
        axios.post(url, body, {
            headers: {
                Authorization: "brenno-freire-labenu"
            }
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render () {
        return(
            
            <DetailsContainer>
                <GlobalStyle/>
                <PlaylistsButton onClick={this.props.goToPlaylists}>Voltar para suas playlists</PlaylistsButton>
                <h1>Adicionar Música</h1>
                <Menu>
                    <label>Música:</label>
                    <input 
                    placeholder={"Nome da música"}
                    value={this.state.musicName}
                    onChange={this.theMusicName}
                    />
                    <label>Artista:</label>
                    <input 
                    placeholder={"Nome do artista"}
                    value={this.state.artistName}
                    onChange={this.theArtistName}
                    />
                    <label>Link:</label>
                    <input 
                    placeholder={"Url da música"}
                    value={this.state.urlLink}
                    onChange={this.theUrlLink}
                    />
                    <AddButton onClick={()=>this.AddMusic(this.props.playlist.Id)}>Confirmar</AddButton>
                </Menu> 
                <PlaylistMusicsButton onClick={() =>this.GetPlaylistTracks(this.props.playlist)}>Mostrar músicas</PlaylistMusicsButton> 
            </DetailsContainer>
        ) 
    }

}