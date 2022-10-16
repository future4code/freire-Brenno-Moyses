import styled from "styled-components"
import Trash from "../img/trash.png"

export const ContainerLi = styled.li`
    display: flex;
    margin: 10px;

    button{
        width: 30px;
        height: 30px;
        border: none;
        background-color: transparent;

        :hover{
            cursor: pointer;
        }

    }
`

function ItemCard(props) {
    const { pizza, removeItem } = props

    return (
        <ContainerLi>
            <p>
                Pizza {pizza.name}
                - {pizza.price.toLocaleString
                    ('pt-br',
                        { style: 'currency', currency: 'USD' }
                    )}
                {" "} x {pizza.quantity}</p>
            <button onClick={() => removeItem(pizza)}><img src={Trash}/></button>
        </ContainerLi>
    )
}

export default ItemCard