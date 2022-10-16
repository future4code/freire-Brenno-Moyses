import ItemCard from "../components/ItemCard"
import styled from "styled-components"

export const ContainerSection = styled.section`
    width: 30em;
    border: 1px solid black;

    h1{
        font-size: 1.5em;
        text-align: center;
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
            <button onClick={confirmOrder}>Confirmar Pedido</button>
        </ContainerSection>
    )
}

export default Orders