import styled from "styled-components";

export const ListContainer = styled.div`
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
        /* margin-right: 100px; */
        /* font-size: 32px; */
    }

    button{
        background: none;
        border: none;

        :hover{
            cursor:pointer;
            transform: scale(1.1);
            transition: all 0.5s;
        }
    }`

export const List = styled.ul`
    list-style-type: none;
    display: block;
    list-style-type: disc;
    padding-inline-start: 40px;

    li{
    position: relative;
    height: 60px;
    padding: 2px;
    display: flex;
    list-style: none;
    width: 100%;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    right: 20px;
    }
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    p{
        margin-left: 15px;
    }
`