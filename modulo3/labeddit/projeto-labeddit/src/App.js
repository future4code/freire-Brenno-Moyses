import React from "react";
import { Router } from "./routes/Router";
import FeedPage from "./pages/FeedPage/FeedPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PostPage from "./pages/PostPage/PostPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import theme from "./constants/theme";
import { ThemeProvider } from '@mui/material'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/> 
    </ThemeProvider>
  );
}

export default App;
