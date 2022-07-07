import React, {useState} from 'react'
import styled from "styled-components";

import { ListContainer } from './style';
import { ListMenuBar } from './style';



function ProfilesList() {
  return (
    <ListContainer>
        <ListMenuBar>
            <button><h1>astromatch</h1></button>
        </ListMenuBar>
    </ListContainer>
  )
}

export default ProfilesList