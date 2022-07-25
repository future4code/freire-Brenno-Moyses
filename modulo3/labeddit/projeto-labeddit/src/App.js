import React from "react";
import { Router } from "./routes/Router";
import FeedPage from "./pages/FeedPage/FeedPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PostPage from "./pages/PostPage/PostPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;
