import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    background-color: #fff;
    color: #000;
    width: 60%;
    height: 60%;
    border-radius: 50px;
    display: flex;

    .PhotoDescription{
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
    }

    img{
        width: 200px;
        height: 350px;
        margin-right: 50px;
    }

    .reset-button{
        text-align: center;
        align-items: center;
    }

    h1{
        text-align: center;
        justify-content: center;
        align-self: center;
    }

    h2{
        width: 70%;
        margin-right: 50px;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        width: 32px;
        height: 32px;
        right: calc(-100% + 64px);
        top: 16px;
        cursor: pointer;
        display: flex;
        position: relative;
        align-items: center;
        &:before,
        &:after{
            content: '';
            position: absolute;
            width: 2.5px;
            height: 24px;
            background-color: #000;
        }
        &:before{
            transform: rotate(45deg);
        }
        &:after{
            transform: rotate(-45deg);
        }
    }
`