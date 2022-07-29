import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';


const Header = () => {

  const navigate = useNavigate ()
  const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.removeItem('token')
  }

  const LoginAction = () => {
    if (token) {
      logout()
      goToLogin(navigate)
    }
    else {
      goToLogin(navigate)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={LoginAction} color="inherit">{token && token ? "Logout" : "Login"}</Button>
          <img src={Logo} height="28px" width="28px"></img>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
