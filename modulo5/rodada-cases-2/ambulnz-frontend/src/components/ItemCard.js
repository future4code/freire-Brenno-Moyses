import styled from "styled-components"

export const ContainerLi = styled.li`
    display: flex;
`

function ItemCard(props) {
    const { pizza } = props

    return (
        <ContainerLi>
            <p>
                Pizza {pizza.name}
                - {pizza.price.toLocaleString
                    ('pt-br',
                        { style: 'currency', currency: 'USD' }
                    )}
                x {pizza.quantity}</p>
            <button>Remover</button>
        </ContainerLi>
    )
}

export default ItemCard