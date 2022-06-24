import React from "react"
import axios from "axios"
import styled, { createGlobalStyle } from 'styled-components'

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

const CreatPlaylistContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    button{
        margin: 20px 0;
        padding: 8px;
        border-radius: 20px;
        font-size: 20px;
        font-weight: bold;
        transition: filter 0.20s;
        background-color: orange;
        color: black;
        border: none;
    }
    button:hover{
        cursor: pointer;
        filter: brightness(1.2);
    }
`

const ItensContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border: 5px solid orange;
    width: 40%;
    height: 35vh;
    text-align: center;
    border-radius: 7px;

    h1{
        color: orange;
        margin: 20px 0;
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
    button:hover{
        cursor: pointer;
        filter: brightness(1.2);
    }
    input{
        padding: 5px;
        border-radius: 10px;
        font-size: 18px;
        border: none;
    }
`

export default class CreatePlaylistScreen extends React.Component{
    
    state = {
        playlistName: "",
    }

    theName = (event) => {
        this.setState({playlistName: event.target.value})
    }

    createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.playlistName,
        }
        
        
        axios.post(url, body, {
            headers: {
                Authorization: "brenno-freire-labenu"
            }
        })
        .then((res) => {
            alert("Playlist criada com sucesso!")
            this.setState({playlistName: "",})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render () {
        return (
            <CreatPlaylistContainer>
                <GlobalStyle/>
                    <button onClick={this.props.goToPlaylists}>Suas playlists</button>
                <ItensContainer>
                    <h1>Crie sua playlist</h1>
                    <input onChange={this.theName} value={this.state.playlistName} placeholder="Nome da playlist"></input>
                    <button onClick={this.createPlaylist}>Confirmar</button>
                </ItensContainer>
            </CreatPlaylistContainer>
        )
    }
}