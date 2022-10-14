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
    const {cart} = props

    const calculateTotal = () => {
        const total = cart.reduce((acc,item)=> 
             acc + (item.price * item.quantity)
        , 0)

        return total.toLocaleString
        ('pt-br',
            { style: 'currency', currency: 'USD' }
        )}

    return (
        <ContainerSection>
            <h1>Pedido</h1>
            {cart.map((pizza) => {
                return (
                    <ItemCard key={pizza.name} pizza={pizza}/>
                )
            })}
            <h2>Total: {calculateTotal()}</h2>
            <button>Confirmar Pedido</button>
        </ContainerSection>
    )
}

export default Orders