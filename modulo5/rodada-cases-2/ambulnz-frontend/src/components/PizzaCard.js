import styled from "styled-components"

export const Container = styled.li`
    border: 1px solid black;
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3,
    card-price {
        text-align: center;
    }
`

function PizzaCard(props) {
    const {pizza, addToCart} = props

    return (
        <Container>
            <h3>{pizza.name}</h3>
            <p className="card-price">
                {`${pizza.price.toLocaleString
                ('pt-br',
                    { style: 'currency', currency: 'USD' }
                )}`}
            </p>
            <p>
                {pizza.ingredients.map((item) => {
                return (
                    <span key={item}>{`${item} `}</span>
                )
                })}
            </p>
            <button onClick={() => addToCart(pizza)}>Adicionar ao carrinho</button>
        </Container>
    )
}

export default PizzaCard