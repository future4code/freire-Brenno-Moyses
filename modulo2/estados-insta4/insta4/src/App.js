import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  input{
    margin: 10px;
    width: 250px;
    height: 25px;
  }`
const Button = styled.button`
    margin: 10px;
    padding: 10px 40px;
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
    ],
      valueInputUser: "",
      valueInputUserPhoto: "",
      valueInputPost: "",
  };

  addPost = () => {
    const newPost = {
      nomeUsuario: this.state.valueInputUser,
      fotoUsuario: this.state.valueInputUserPhoto,
      fotoPost: this.state.valueInputPost
    };
    const newPosts = [...this.state.posts, newPost];
    this.setState({posts: newPosts});
  };

  onChangeInputUser = (event) => {
    this.setState({valueInputUser: event.target.value});
  };
  onChangeInputUserPhoto = (event) => {
    this.setState({valueInputUserPhoto: event.target.value});
  };
  onChangeInputPost = (event) => {
    this.setState({valueInputPost: event.target.value});
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
        <Form>
        <input
          value={this.state.valueInputUser}
          onChange={this.onChangeInputUser}
          placeholder={"Usuario"}
        />
        <input
          value={this.state.valueInputUserPhoto}
          onChange={this.onChangeInputUserPhoto}
          placeholder={"Foto do Usuario"}
        />
        <input
          value={this.state.valueInputPost}
          onChange={this.onChangeInputPost}
          placeholder={"Post"}
        />
        </Form>
        <Button onClick={this.addPost}>Postar</Button>
        {postList}
      </MainContainer>
    )
    
  }
}


export default App;
