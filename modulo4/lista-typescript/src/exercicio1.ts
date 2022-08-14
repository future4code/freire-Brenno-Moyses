    type user = {
        name: string,
        birthdate: string
    }

    const user: user = {
        name: "Brenno",
        birthdate: "23/03/2000"
    }

    const getUser = (name: string, birthdate: string) => {
        const Birthdate: string[] = birthdate.split("/");
        const day: string = Birthdate[0]
        const month : string = Birthdate[1]
        const year : string = Birthdate[2]

        return `Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`
    }

    console.log(getUser(user.name, user.birthdate))

