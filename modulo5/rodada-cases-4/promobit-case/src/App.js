import Header from "./Components/Header/Header";
import { useEffect, useState } from "react"
import { GlobalStyle } from "./Global";
import Home from "./Pages/Home/Home";
import axios from "axios";
import { BASE_URL, KEY_API } from "./Constants/constants";

function App() {
  const [films, setFilms] = useState([]);
    useEffect(() => {
        axios
        .get(`${BASE_URL}/movie/popular?api_key=${KEY_API}&language=en-US&page=1`)
            .then((res) => {
                setFilms(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })   
    },[setFilms])

  return (
    <div>
      <Header/>
      <Home
      films = {films}
      setFilms = {setFilms}
      />
      <GlobalStyle/>
    </div>
  );
}

export default App;
