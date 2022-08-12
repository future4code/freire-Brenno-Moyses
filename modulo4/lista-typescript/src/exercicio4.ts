        enum DEPARTAMENT {
            MARKETING="marketing",
            VENDAS="vendas",
            FINANCEIRO="financeiro"
            }

        type workersList = {
            nome: string,
            salário: number,
            setor: DEPARTAMENT,
            presencial: boolean
        }  

        const workers = [
            { nome: "Marcos", salário: 2500, setor: DEPARTAMENT.MARKETING, presencial: true },
            { nome: "Maria" ,salário: 1500, setor: DEPARTAMENT.VENDAS, presencial: false},
            { nome: "Salete" ,salário: 2200, setor: DEPARTAMENT.FINANCEIRO, presencial: true},
            { nome: "João" ,salário: 2800, setor: DEPARTAMENT.MARKETING, presencial: false},
            { nome: "Josué" ,salário: 5500, setor: DEPARTAMENT.FINANCEIRO, presencial: true},
            { nome: "Natalia" ,salário: 4700, setor: DEPARTAMENT.VENDAS, presencial: true},
            { nome: "Paola" ,salário: 3500, setor: DEPARTAMENT.MARKETING, presencial: true }
        ]

        function getWorker(workers:workersList[]){
            return console.log(workers.filter((item) => item.presencial === true && item.setor === DEPARTAMENT.MARKETING))
        }

        getWorker(workers)