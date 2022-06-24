import React from "react"
import axios from "axios"
import styled, { createGlobalStyle } from "styled-components"

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

const CardPlaylist = styled.div`
    border: 5px solid orange;
    padding: 10px;
    margin: 10px;
    width: 300px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    color: orange;
`

const DeleteButton = styled.button`
    background-color: rebeccapurple;
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
    
    render () {
        const playlistList = this.state.playlists.map((playlist) => {
            return <CardPlaylist key={playlist.id}>
                {playlist.name}
                <DeleteButton>X</DeleteButton>
                </CardPlaylist>
        })
        return (
            <ListContainer>
                <GlobalStyle/>
                <CardsContainer>
                    <button onClick={this.props.goToCreatePlaylist}>Crie sua playlist</button>
                    <h1>Playlists</h1>
                    {playlistList}
                </CardsContainer>
            </ListContainer>
        )
    }
}