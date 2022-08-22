export type account = {
    id: number,
    name: string,
    cpf: string,
    birthdate: string,
    balance: number
}

export type transaction = {
    value: number,
    date: string,
    description: string
}

export const accountsList: account[] = [
    {
        id: 1,
        name: "Tim",
        cpf: "126.682.811-43",
        birthdate: "03/03/2000",
        balance: 800
    },
    {
        id: 2,
        name: "Tom",
        cpf: "127.680.814-43",
        birthdate: "03/03/2001",
        balance: 500
    },
    {
        id: 3,
        name: "Rato",
        cpf: "139.690.814-43",
        birthdate: "03/03/2002",
        balance: 600
    }
]