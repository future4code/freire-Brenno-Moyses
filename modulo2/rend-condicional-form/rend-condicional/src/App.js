import './App.css';
import React from "react";
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Stage3 from './components/Stage3';
import Stage4 from './components/Stage4';
import styled from 'styled-components';


const AppContainer = styled.div`
  text-align: center;
`
const Button = styled.button`
  margin: 30px;
  font-size: 20px;
`
export default class App extends React.Component{
  state={
    stage: 1,
  }

  renderStage = () =>{
    switch (this.state.stage){
      case 1:
        return <Stage1/>;
      case 2:
        return <Stage2/>;
      case 3:
        return <Stage3/>;
      case 4:
        return <Stage4/>;
    }
  }
  nextStage = () =>{
    this.setState({stage: this.state.stage + 1}) 
    }

  render () {
    return (
      <AppContainer className="App">
        {this.renderStage()}
        {this.state.stage < 4 ? <Button onClick={()=>this.nextStage()} name="button">Próxima etapa</Button>
        : ""}
      </AppContainer>
    );
  }
}


  


