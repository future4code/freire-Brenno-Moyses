import React from "react";

import { Form,FormContainer } from "./Stage1";

export default class Stage1 extends React.Component{
    render() {
        return (
            <FormContainer>
                <Form>
                    <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

                    <label for="curso"><h2>5. Por que você não terminou um curso de graduação?</h2></label>
                    <input type="text" id="curso"/>

                    <label for="unidade"><h2>6.Você fez algum curso complementar?</h2></label>
                    <select name="select">
                        <option value="Nenhum">Nenhum</option>
                        <option value="Curso técnico">Curso técnico</option>
                        <option value="Curso de inglês">Curso de inglês</option>
                    </select>
                </Form>
            </FormContainer>
        )
    }
}