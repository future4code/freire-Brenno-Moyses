import React, { Component } from 'react'
import styled from 'styled-components'



export default class HomePage extends Component {
    render() {
    return (
        <div>
            <button>Trocar de tela</button>
            <div>
                <input placeholder='Nome'></input>
                <input placeholder='E-mail'></input>
                <button>Criar usuário</button>
            </div>
        </div>
    )
  }
}

