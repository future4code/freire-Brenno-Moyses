import styled from "styled-components";

export const ListContainer = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid #b7656b;
    border-radius: 10px;
    background-color: #ecdde6;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
`

export const ListMenuBar = styled.div`
    height: 55px;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;

    h1{
        color:  #b7656b;
        margin: 0 auto; 
    }

    button{
        background: none;
        border: none;
    }
`