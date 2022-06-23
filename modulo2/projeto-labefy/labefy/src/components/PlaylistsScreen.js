import React from "react"
export default class PlaylistsScreen extends React.Component{
    
    render () {
        return (
            <div>
                <button onClick={this.props.goToCreatePlaylist}>Crie sua playlist</button>
                <h2>Playlists</h2>
            </div>
        )
    }
}