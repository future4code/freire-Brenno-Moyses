import React from "react"
export default class CreatePlaylistScreen extends React.Component{
    
    render () {
        return (
            <div>
                <button onClick={this.props.goToPlaylists}>Suas playlists</button>
                <h2>Crie sua playlist</h2>
            </div>
        )
    }
}