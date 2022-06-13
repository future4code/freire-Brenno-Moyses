import React from "react";
import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const Form = styled.form`
    text-align: center;
    
    input{
        width: 300px;
        height: 30px;
        font-size: 20px;
    }
    select{
        width: 300px;
        height: 30px;
        font-size: 20px;
    }
    button{
        margin: 30px;
        font-size: 20px;
    }
`
export default class Stage1 extends React.Component{
    render() {
        return (
        <FormContainer>
                <Form>
                    <h1>ETAPA 1 - DADOS GERAIS</h1> 

                    <label for="nome"><h2>1. Qual seu nome?</h2></label>
                    <input type="text" id="nome"/>

                    <label for="idade"><h2>2. Qual sua idade?</h2></label>
                    <input type="text" id="idade"/>

                    <label for="email"><h2>3. Qual seu e-mail?</h2></label>
                    <input type="email" id="email"/>

                    <label for="escolaridade"><h2>4. Qual a sua escolaridade?</h2></label>
                    <select name="select">
                        <option value="Ensino médio incompleto" >Ensino médio incompleto</option>
                        <option value="Ensino médio completo" >Ensino médio completo</option>
                        <option value="Ensino superior incompleto" >Ensino superior incompleto</option>
                        <option value="Ensino superio completo" >Ensino superior completo</option>
                    </select>
                    </Form>
        </FormContainer>   
        );
    }
}