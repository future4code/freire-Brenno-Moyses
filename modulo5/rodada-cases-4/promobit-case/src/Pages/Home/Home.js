import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FilterMenu } from "./styled";
import Descrição from "../../img/Descrição.png"

const Home = () => {
    return (
        <div>
            <FilterMenu>
                <img src={Descrição} />
            </FilterMenu>
        </div>
    )
}

export default Home
