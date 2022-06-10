import React, {Component} from "react"
import styled from 'styled-components'

const ChatContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: columns;
    align-items: flex-end;

    border: 2px solid black;
    max-width: 35vw;
    height: 100vh;
    margin: 0 auto;
`
const UserInput = styled.input`
    padding: 4px 5px;
`

export default class Chat extends Component{
    render() {
        return(
            <ChatContainer>
                <UserInput></UserInput>
                <UserInput></UserInput>
                <button></button>
            </ChatContainer>
        );
    }
}