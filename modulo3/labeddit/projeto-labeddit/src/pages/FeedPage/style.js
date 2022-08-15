import styled from "styled-components";
import { TextField, Card  } from "@mui/material";
import {Button} from "@mui/material";

export const InputsContainerFeed = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    hr{
    width: 363.01px;
    height: 0px;
    left: 29px;
    top: 503px;
    transform: rotate(0.32deg);
    }
`
export const StyledTextField = styled(TextField)`
    background: #EDEDED;
    border-radius: 12px;
    width: 364px;
    height: 53px;
`

export const StyledTextField2 = styled(TextField)`
    background: #EDEDED;
    border-radius: 12px !important;
    width: 364px;
`

export const StyledButton = styled(Button)`
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    color: white !important;
    border-radius: 12px;
    width: 359px !important;
    height: 47px !important;
    margin: 10px !important;
`

export const StyledCard = styled(Card)`
    background: #E0E0E0 !important;
    border-radius: 12px;    
`

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
