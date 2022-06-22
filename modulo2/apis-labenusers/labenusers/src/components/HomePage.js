import React, { Component } from 'react'
import styled from 'styled-components'



export default class HomePage extends Component {
    render() {
    return (
        <div>
            <button>Trocar de tela</button>
            <div>
                <input onChange={this.props.onChangeInputUser} placeholder='Nome'></input>
                <input onChange={this.props.onChangeInputEmail} placeholder='E-mail'></input>
                <button onClick={this.props.AddUser}>Criar usuário</button>
            </div>
        </div>
    )
  }
}

