import styled from "styled-components";
import { TextField } from "@mui/material";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    flex-direction: column;
`

export const LogoImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 152px;
        height: 142px;
    }

    p{
        margin-top: 5px;
    }
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 90px;
`
export const StyledTextField = styled(TextField)`
    width: 340px;
    height: 50px;
    border: 1px solid #D5D8DE;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    button{
        border-radius: 27px;
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        color: white;
        width: 365px;
        width: 340px;
        padding: 13px 133px;
        text-align: center;
        border: none;
    }
`

