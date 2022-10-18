import axios from "axios";
import { BASE_URL } from "./constants";
import { useEffect, useState } from "react"
import { GlobalStyle } from "./Global";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setCards(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      });
  }, [])

  // const ImageBackCard = cards.imageBackCard

  const ImagesUrl = cards.imagesUrl;

  const MappedCards = cards.cards?.map((card) => {
      const renderCard = ImagesUrl+card.image
      return <img src={renderCard}></img>
  })

  return (
    <div>
      {MappedCards}
      <GlobalStyle/>
    </div>
  );
}

export default App;
