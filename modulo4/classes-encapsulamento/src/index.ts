// EXERCICIO 1

//    a) Construtores são funções de inicialização de classe.
//    Para chamar o construtor, precisamos declarar o método constructor e dentro os argumentos que a classe vai receber.

        // type Transaction = {
        //     description: string,
        //     value: number,
        //     date: string
        // }

        class UserAccount {
            private cpf: string;
            private name: string;
            private age: number;
            private balance: number = 0;
            private transactions: Transaction[] = [];
    
        constructor(
            cpf: string,
            name: string,
            age: number,
        ) {
        console.log("Chamando o construtor da classe UserAccount")
            this.cpf = cpf;
            this.name = name;
            this.age = age;
        }

        public setTransactions(
            newTransaction:Transaction
        ):void{
            this.transactions.push(newTransaction)
        }

        public getTransactions():Transaction[]{
            return this.transactions
        }

    }

        const newUser = new UserAccount("126.689.887-43", "Brenno", 22)
        const newUser2 = new UserAccount("123.456.678-65", "Fernando", 90)

    // b) Apenas uma vez.

    // c) Podemos acessar usando a keyword this.

    // EXERCICIO 2

    class Transaction {
        private date: string;
        private value: number;
        private description: string;

    constructor(date: string, value: number, description: string){
        this.date = date;
        this.value = value;
        this.description = description
    }

    public getDate(): string {
        return this.date
    }

    public getValue(): number {
        return this.value
    }

    public getDescription(): string {
        return this.description
    }
} 

    const newTransaction = new Transaction("23/03/2000", 1400, "Conta de luz")

    newUser.setTransactions(newTransaction)
    console.table(newUser.getTransactions())
    console.table(newUser)

    // EXERCICIO 3

    class Bank{
        private accounts: UserAccount[];

        constructor(accounts: UserAccount[]){
            this.accounts = accounts;
        }

        public getAccounts(): UserAccount[] {
            return this.accounts
        }
    }

    const newAccount = new Bank([newUser2, newUser])

    console.table(newAccount.getAccounts())



