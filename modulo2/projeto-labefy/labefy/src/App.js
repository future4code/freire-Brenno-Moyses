import React from "react"
import CreatePlaylistScreen from "./components/CreatePlaylistScreen";
import PlaylistsScreen from "./components/PlaylistsScreen";

export default class App extends React .Component {
  
  state = {
    currentScreen: "create-playlist"
  }

  ChooseScreen = () => {
    switch (this.state.currentScreen){
      case "create-playlist":
        return <CreatePlaylistScreen goToPlaylists={this.goToPlaylists}/> 
      case "playlists":
        return <PlaylistsScreen goToCreatePlaylist={this.goToCreatePlaylist}/>
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
  
  render () {
    return (
      <div>
        {this.ChooseScreen()}
    </div>
    );
  }
}
