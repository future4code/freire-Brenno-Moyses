import React, {Component} from "react"
import styled from 'styled-components'

const ChatContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: columns;
    align-items: flex-end;

    border: 2px solid black;
    max-width: 35vw;
    height: 100vh;
    margin: 0 auto;
    background-image: url(https://i.pinimg.com/originals/35/f3/e9/35f3e9c4b86568b4919949a9307da2a9.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
const UserInputName = styled.input`
    width: 200px;
    height: 30px;
    justify-content: center;
    font-size: 20px;
    border-radius: 20px 20px;
    padding: 5px 10px;

    ::placeholder{
        padding: 0px 5px;
    }
`
const UserInputMessage = styled.input`
    width: 500px;
    height: 30px;
    font-size: 20px;
    border-radius: 20px 20px;
    padding: 5px 10px;

    ::placeholder{
        padding: 0px 5px;
    }
`
const SendButton = styled.button`
    width: 100px;
    height: 43px;
    font-size: 20px;
    background-color: transparent;
    border: none;
`

export default class Chat extends Component{
    render() {
        return(
            <ChatContainer>
                <UserInputName placeholder="Nome"></UserInputName>
                <UserInputMessage placeholder="Mensagem"></UserInputMessage>
                <SendButton type="button"><img src="https://cdn-icons-png.flaticon.com/512/2983/2983788.png" height="45" width="50"/></SendButton>
            </ChatContainer>
        );
    }
}