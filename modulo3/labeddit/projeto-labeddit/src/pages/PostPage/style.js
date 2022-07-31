import styled from "styled-components";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";


export const PostScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const StyledTextField = styled(TextField)`
background: #EDEDED;
border-radius: 12px !important;
width: 364px;
`

export const StyledButton = styled(Button)`
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    color: white !important;
    border-radius: 12px !important;
    width: 359px !important;
    height: 47px !important;
    margin: 10px !important;
`