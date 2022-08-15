import styled from "styled-components";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width:100vw; */
    flex-direction: column;
`

export const LogoImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px;

    img{
        width: 152px;
        height: 142px;
        margin: 20px;
    }

    p{
        margin-top: 5px;
    }
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`
export const StyledTextField = styled(TextField)`
    border: 1px solid #D5D8DE;
    width: 300px !important;
`

export const StyledButton = styled(Button)`
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    color: white !important;
`



