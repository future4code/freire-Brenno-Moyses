import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
      },
      {
      nomeUsuario: "Brenno",
      fotoUsuario: "https://picsum.photos/50/50?random=1",
      fotoPost: "https://picsum.photos/200/150?random=1"
      },
      {
      nomeUsuario: "Carlos",
      fotoUsuario: "https://picsum.photos/seed/picsum/50/50",
      fotoPost: "https://picsum.photos/200/150?random=1"
      }
  ]
  };
  render() {
    const postList = this.state.posts.map((usuario, index) =>{
      return (
        <div key={index}>
          <Post
            nomeUsuario={usuario.nomeUsuario}
            fotoUsuario={usuario.fotoUsuario}
            fotoPost={usuario.fotoPost}
            />
        </div>)
    }
    )
    return (
      <MainContainer>
        {postList}
      </MainContainer>
    );
  }
}

export default App;
