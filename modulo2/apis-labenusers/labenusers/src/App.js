import axios from 'axios';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import React, { Component } from 'react'
import UsersList from './components/UsersList';

export default class App extends Component {

  state = {
    users: [],

    name: '',
    email: ''
  };

    componentDidMount(){
      this.getAllUsers()
    }

  onChangeInputUser = (event) => {
    this.setState({name: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({email: event.target.value})
  }

  AddUser = () => {
    const body = {
        name: this.state.name,
        email: this.state.email  
      }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {headers:{
      Authorization:"brenno-labenu-freire"
    }}).then((response)=>{
      alert("usuário inserido")
      this.getAllUsers();
    }).catch((error) => {
      console.log(error.message)
    })
      
    
  }
  
  getAllUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
    {headers:{
      Authorization: "brenno-labenu-freire"
        }
      }
    ).then((response)=>{
      this.setState({users:response.data})
    }).catch((error)=>{
      console.log(error)
    });
    }

  render() {
    return (
      <div className="App">
        <HomePage
          onChangeInputEmail = {this.onChangeInputEmail}
          onChangeInputUser = {this.onChangeInputUser}
          AddUser = {this.AddUser}
        />
        <UsersList
          users = {this.state.users}
        />
    </div>
    )
  }
}

