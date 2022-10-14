import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import styled from "styled-components";
import { useState } from "react";

export const ContainerMain = styled.main`
    display: flex;
`


function App() {
    const [cart, setCart] = useState([])

    const addToCart = (pizza) => {
      const foundIndex = cart.findIndex((pizzaCart) => {
        return pizzaCart.name === pizza.name
      })

      if(foundIndex >= 0) {
        const newCart = [...cart]
        newCart[foundIndex].quantity += 1
        setCart(newCart)
      } else {
        const newCart = [...cart]
        const newPizza = {
          name: pizza.name,
          price: pizza.price,
          quantity: 1
        }
        newCart.push(newPizza)
        setCart(newCart)

      }
    }

  return (
    <ContainerMain>
      <Menu addToCart={addToCart} />
      <Orders cart={cart} />
    </ContainerMain>

  );
}

export default App;
