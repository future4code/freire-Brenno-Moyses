import React from "react"
import CreatePlaylistScreen from "./components/CreatePlaylistScreen";
import PlaylistsScreen from "./components/PlaylistsScreen";
import PlaylistDetails from "./components/PlaylistDetails";


export default class App extends React .Component {
  
  state = {
    currentScreen: "create-playlist",
  }

  ChooseScreen = () => {
    switch (this.state.currentScreen){
      case "create-playlist":
        return <CreatePlaylistScreen goToPlaylists={this.goToPlaylists}/> 
      case "playlists":
        return <PlaylistsScreen goToDetails={this.goToDetails} goToCreatePlaylist={this.goToCreatePlaylist}/>
      case "playlist-details":
        return <PlaylistDetails goToPlaylists={this.goToPlaylists} goToDetails={this.goToDetails}/>
      default:
        return <div>Erro! Página não encontrada.</div>
    }
  }

  goToCreatePlaylist = () => {
    this.setState({currentScreen: "create-playlist"})
  }

  goToPlaylists = () => {
    this.setState({currentScreen: "playlists"})
  }

  goToDetails = () => {
    this.setState({currentScreen: "playlist-details"})
    console.log("entrou")
  }
  
  render () {
    return (
      <div>
        {this.ChooseScreen()}
    </div>
    );
  }
}
