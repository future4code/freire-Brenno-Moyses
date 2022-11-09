import axios from "axios";
import { BASE_URL } from "./constants";
import { useEffect, useState } from "react"
import { GlobalStyle } from "./Global";
import Cards from "./components/Cards/Cards";
import Modal from "./components/Modal/Modal";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => {
        console.log(err.message)
      });
  }, [setCards])

  return (
    <div>
      <Cards
      cards = {cards}
      />
      <GlobalStyle />
    </div>
  );
}

export default App;
