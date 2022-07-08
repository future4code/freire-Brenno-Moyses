import styled from "styled-components";

export const AppContainer = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid black;
    border-radius: 25px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
`

export const Elements = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 25px;

    button{
        background: none;
        border: none;
    :hover{
        cursor: pointer;
        transform: scale(1.2);
        transition: all 0.5s;
    }
    }
`

export const MenuBar = styled.div`
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

        :hover{
            cursor: pointer;
            transform: scale(1.1);
            transition: all 0.5s;
        }
    }
`

export const Profile = styled.div`
    /* height: 40%; */
    position: absolute;
    bottom: 100px;
    width: 88%;
    color: white;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    text-align: left;
    left: 7%;
    /* top: 380px; */
    font-size: 15px;


    h2{
        margin-bottom: 0px;
    }
    `
    
export const Picture = styled.div`
    width: 100% ;
    text-align: center;
    margin-top: 30px;

    img{
    width:370px;
    height: 420px;
    border-radius: 10px;
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    filter: brightness(70%);
    }
`