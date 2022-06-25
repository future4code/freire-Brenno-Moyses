import React from "react"
import axios from "axios"
import styled, { createGlobalStyle } from "styled-components"
import PlaylistDetails from "./PlaylistDetails"

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

const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    h1{
        color: orange;
    }
`
const ButtonDetails = styled.button`
    background: none;
    border: none;
    transition: filter 0.20s;
    font-size: 20px;
    color: orange;

    :hover{
        cursor: pointer;
        filter: brightness(1.2);
    }
`

const ButtonCreate = styled.button`
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

const CardPlaylist = styled.div`
    border: 5px solid orange;
    padding: 10px;
    margin: 10px;
    width: 300px;
    font-weight: bold;
    color: orange;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 7px;
    

    button{
        padding: 5px;
        background: none;
        border: none;  
        transition: filter 0.10s; 
    }
    button:hover{
        cursor: pointer;
        filter: brightness(1.3);
    }

`
export default class PlaylistsScreen extends React.Component{

    state = {
        playlists: []
    }

    componentDidMount () {
        this.getPlaylists()
    }

    getPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url,{
            headers: {
                Authorization: "brenno-freire-labenu"
            }
        })
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => {
            alert("Ocorreu um problema!")
        })
    }

    PlaylistDelete = (Id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${Id}`
        axios.delete(url, {
            headers:{
                Authorization: "brenno-freire-labenu"
            }     
        })  .then((res) => {
            alert("Playlist deletada com sucesso!")
            this.getPlaylists()
        })
            .catch((err) =>{
                alert("Ocorreu um erro!")
            })
    }
    
    render () {
        const playlistList = this.state.playlists.map((playlist) => {
            return <CardPlaylist key={playlist.id}>
                {/* <PlaylistDetails 
                    playlistName={playlist.name} 
                    goToDetails ={this.props.goToDetails}
                /> */}
                <ButtonDetails onClick={this.props.goToDetails}>{playlist.name}</ButtonDetails>
                <button onClick={() =>this.PlaylistDelete(playlist.id)}><img src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405234.png?token=exp=1656105553~hmac=a062215a1f8df09b652e5a619c63a6c3" height ="22" width="22"></img></button>
                </CardPlaylist>
        })
        return (
            <ListContainer>
                <GlobalStyle/>
                <CardsContainer>
                    <ButtonCreate onClick={this.props.goToCreatePlaylist}>Crie sua playlist</ButtonCreate>
                    <h1>Playlists</h1>
                    {playlistList}
                </CardsContainer>
            </ListContainer>
        )
    }
}