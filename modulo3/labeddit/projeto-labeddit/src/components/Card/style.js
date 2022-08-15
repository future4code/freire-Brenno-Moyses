import styled from "styled-components";
import { Card } from "@mui/material";

export const CardContainer = styled.div`
    height: 140px;
    width: 340px;
    background-color: #E0E0E0;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    padding: 9px 10px;
    margin: 5px;
`

export const FunctoinalitiesContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const StyledCard = styled(Card)`
    background-color:#E0E0E0 !important;
    border: 1px solid #E0E0E0 !important;
    border-radius: 12px !important;     
`