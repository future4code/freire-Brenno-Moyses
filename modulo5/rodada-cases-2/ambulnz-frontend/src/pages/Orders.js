import ItemCard from "../components/ItemCard"
import styled from "styled-components"

export const ContainerSection = styled.section`
    width: 30em;
    border: 2px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;


    h1{
        font-size: 1.5em;
        text-align: center;
    }

    h2{
        text-align: center;
    }
`

export const ConfirmButton = styled.button`
    width: 60%;
            height: 5vh;
            margin: 10px;
            border-radius: 8px;
            border: none;
            background-color: #EB1D36;
            color: white;
            font-weight: bold;
            font-size: 14px;
            opacity: 80%;

            :hover{
                cursor: pointer;
                opacity: 100%;
                transition: 0.3s;
            }
`

function Orders(props) {
    const {cart, removeItem, total, confirmOrder} = props

    return (
        <ContainerSection>
            <h1>Pedido</h1>
            {cart.map((pizza) => {
                return (
                    <ItemCard key={pizza.name} 
                    pizza={pizza} 
                    removeItem={removeItem}/>
                )
            })}
                <h2>
                    Total: {total.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                    )}
                </h2>
                <ConfirmButton onClick={confirmOrder}>Confirmar Pedido</ConfirmButton>
        </ContainerSection>
    )
}

export default Orders