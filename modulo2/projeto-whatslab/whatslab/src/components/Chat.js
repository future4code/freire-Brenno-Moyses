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
const List = styled.section`
    display: block;
    background-color:gray;
    font-size: 20px;
    color: white;
`

export default class Chat extends Component{
    state = {
        chat: [
            {
            user: "",
            message: "" 
            } 
        ],   
        
        valueInputUser: "",
        valueInputMessage:""
        };

    addUser = () => {
        const newUser = {
            user: this.state.valueInputUser,
            message: this.state.valueInputMessage
        };

        const newPerson = [...this.state.chat, newUser];
        this.setState({chat: newPerson});
    };

    onChangeInputUser = (event) => {
        this.setState({valueInputUser: event.target.value});
    };

    onChangeInputMessage = (event) => {
        this.setState({valueInputMessage: event.target.value});
    };
    
    render() {
        const messageList = this.state.chat.map((person,index) => {
            return (
                <div key={index}>
                    <List>
                        {person.user} {person.message}
                    </List>
                </div>
            );
        });
        return(
            <ChatContainer>
                <UserInputName value={this.state.valueInputUser} onChange={this.onChangeInputUser} placeholder="Nome"></UserInputName>
                <UserInputMessage value={this.state.valueInputMessage} onChange={this.onChangeInputMessage}  placeholder="Mensagem"></UserInputMessage>
                <SendButton onClick={this.addUser} type="button"><img src="https://cdn-icons-png.flaticon.com/512/2983/2983788.png" height="45" width="50"/></SendButton>
                {messageList}
            </ChatContainer>
        );
    }
}


