    type clients = {
        cliente: string,
        saldoTotal: number,
        debitos: number[]
    } 

    const clientsList = [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]

    function getClientsList(clientsList:clients[]){
        const filterClients = clientsList.map((client) => {
        const sum = client.debitos.reduce((accumulator, number) => accumulator + number, 0)
        client.saldoTotal-=sum
        client.debitos = []
        })
        return clientsList.filter((item) => item.saldoTotal <0)
    }

    console.log(getClientsList(clientsList))
