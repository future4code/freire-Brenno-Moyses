import styled from "styled-components"
import Diavola from "../img/DIAVOLA.jpg"

export const Container = styled.li`
    border: 2px solid grey;
    border-radius: 10px;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.3);
    margin: 1em;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    h3 {
        margin-left: 10px;
    }

    p{
        margin-left: 10px;
    }

    button{
        width: 60%;
        height: 4vh;
        margin: 10px;
        align-self: center;
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
    }
`

function PizzaCard(props) {
    const {pizza, addToCart} = props

    return (
        <Container>
            <img src={Diavola}></img>
            <h3>{pizza.name}</h3>
            <p>
                {pizza.ingredients.map((item) => {
                return (
                    <span key={item}>{`${item}, `}</span>
                )
                })}
            </p>
            <p className="card-price">
                {`${pizza.price.toLocaleString
                ('pt-br',
                    { style: 'currency', currency: 'USD' }
                )}`}
            </p>
            <button onClick={() => addToCart(pizza)}>Adicionar ao carrinho</button> 
        </Container>
    )
}

export default PizzaCard