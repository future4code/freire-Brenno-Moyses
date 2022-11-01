import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../img/Logo.png"

import { HeaderContainer } from "./styled";



const Header = () => {

    return (
        <HeaderContainer>
            <img src={Logo}/>
        </HeaderContainer>
    )
}

export default Header