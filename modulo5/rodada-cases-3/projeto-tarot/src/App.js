import axios from "axios";
import { BASE_URL } from "./constants";
import { useEffect, useState } from "react"
import { GlobalStyle } from "./Global";
import Cards from "./components/Cards/Cards";
import styled from "styled-components";

export const ImageCards = styled.img`
  width: 200px;
  height: 350px;
  border-radius: 20px;

  :hover{
    cursor: pointer;
    box-shadow: 5px 0px 15px 5px darkgray;
  }
`


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
    const renderCard = ImagesUrl + card.image
    return <ImageCards src={renderCard}></ImageCards>
  })

  return (
    <div>
      <Cards
      MappedCards = {MappedCards}
      />
      <GlobalStyle />
    </div>
  );
}

export default App;
