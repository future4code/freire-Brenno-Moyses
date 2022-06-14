import React from "react";

import { Form,FormContainer } from "./Stage1";
export default class Stage1 extends React.Component{
    render() {
        return (
            <FormContainer>
                <Form>
                    <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                    <label for="curso"><h2>5. Qual curso?</h2></label>
                    <input type="text" id="curso"/>

                    <label for="unidade"><h2>6. Qual a unidade de ensino?</h2></label>
                    <input type="text" id="unidade"/>
                </Form>
            </FormContainer>
        )
    }
}