import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { BASE_URL } from "./constants";
import axios from "axios";
import Popup from "./components/Popup";

export const ContainerMain = styled.main`
    display: flex;
`


function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const [orderSucessPopupState, setOrderSucessPopupState] = useState ({
    isActive: false,
    summary: {
      id: null,
      pizzas: null,
      total: null
    }
  })

  useEffect(() => {
    calculateTotal()
  }, [cart])

  const addToCart = (pizza) => {
    const foundIndex = cart.findIndex((pizzaCart) => {
      return pizzaCart.name === pizza.name
    })

    if (foundIndex >= 0) {
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

  const removeItem = (pizzaToRemove) => {
    if (pizzaToRemove.quantity > 1) {
      const newCart = cart.map((pizza) => {
        if (pizza.name === pizzaToRemove.name) {
          pizza.quantity -= 1
        }

        return pizza
      })

      setCart(newCart)

    } else {
      const newCart = cart.filter((pizza) => {
        return pizza.name !== pizzaToRemove.name
      })

      setCart(newCart)
    }
  }

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) =>
      acc + (item.price * item.quantity)
      , 0)

    setTotal(total)
  }

  const confirmOrder = async () => {
    try {
      const body = {
        pizzas: cart
      }
  
      const res = await axios.post(`${BASE_URL}/orders`, body)

      setOrderSucessPopupState({
        isActive: true,
        summary: res.data.order
      })

      setCart([])

    } catch (error) {
      console.log(error)
    }
  }

  const closePopup = () => {
    setOrderSucessPopupState({
      isActive: false,
      summary: {
        id: null,
        pizzas: null,
        total: null
      }
    })
  }

  return (
    <ContainerMain>
      <Menu addToCart={addToCart} />
      <Orders
        cart={cart}
        removeItem={removeItem}
        total={total}
        confirmOrder={confirmOrder}
      />
      {orderSucessPopupState.isActive 
      && <Popup 
      order={orderSucessPopupState.summary}
      closePopup={closePopup}
      />
      }
    </ContainerMain>

  );
}

export default App;
