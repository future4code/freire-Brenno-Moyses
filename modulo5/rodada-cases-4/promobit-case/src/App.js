import Header from "./Components/Header/Header";
import { useEffect, useState } from "react"
import { GlobalStyle } from "./Global";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
